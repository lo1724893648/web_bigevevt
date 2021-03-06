$(function(){
    getUserInfo()
    var layer = layui.layer
    $('#btn').on('click',function(){
        layer.confirm('确认退出登录?', {icon: 3, title:'提示'}, function(index){
            //do something
            
            layer.close(index);
            localStorage.removeItem('token')
            location.href = '/login.html'
          });
    })
    
})
function getUserInfo(){
    $.ajax({
        method:'get',
        url:'/my/userinfo',
        
        success:function(res){
            if(res.status !==0){
            console.log('获取用户信息失败')
            }
            
            renderAvatar(res.data)
        }
        
    })
}
function renderAvatar(user) {
    // 1. 获取用户的名称
    var name = user.nickname || user.username
    // 2. 设置欢迎的文本
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    // 3. 按需渲染用户的头像
    if (user.user_pic !== null) {
      // 3.1 渲染图片头像
      $('.layui-nav-img')
        .attr('src', user.user_pic)
        .show()
      $('.text-avatar').hide()
    } else {
      // 3.2 渲染文本头像
      $('.layui-nav-img').hide()
      var first = name[0].toUpperCase()
      $('.text-avatar')
        .html(first)
        .show()
    }
  }