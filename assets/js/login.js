$(function(){
    $('#link_zhuce').on('click', function() {
        $('.denglu-box').show()
        $('.zhuce-box').hide()
      })
    
      // 点击“去登录”的链接
      $('#link_denglu').on('click', function() {
        $('.denglu-box').hide()
        $('.zhuce-box').show()
      })
      var form  = layui.form
      var layer = layui.layer;
form.verify({
  pwd:[/^[\S]{6,12}$/,'密码必须6到12位'],
  repwd:function(value){
    var pwd = $('.zhuce-box [name=password]').val()
    if(pwd !== value){
      return '两次密码不一致'
    }
  }
})
$('#form_reg').on('submit', function(e) {
  // 1. 阻止默认的提交行为
  e.preventDefault()
  // 2. 发起Ajax的POST请求
  var data = {
    username: $('#form_reg [name=username]').val(),
    password: $('#form_reg [name=password]').val()
  }
  $.post('/api/reguser', data, function(res) {
    if(res.status!=0){
      return layer.msg(res.message)
    }
    layer.msg('注册成功请登录')
  })
  $('#link_zhuce').click()
})
$('#login-form').submit(function(e){
e.preventDefault()
$.ajax({
  url:'/api/login',
  method:'post',
  data:$(this).serialize(),
  success:function(res){
    if(res.status!=0){
      return layer.msg('登录失败')
    }
    layer.msg('登录成功')
    localStorage.setItem('token',res.token)
    location.href = 'index.html'
  }
})

})
})
