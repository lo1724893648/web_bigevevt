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
})