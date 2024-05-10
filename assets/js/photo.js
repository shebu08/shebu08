$(function () {
    $(".popup img").click(function () {
        let $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
    });

    $("span.close").click(function () {
        $(".show").fadeOut();
      $('.img-show img').css({'width': '100%', 'height': '100%'});
    });
    
$('.plus').on('click', function(){
let img_widht = $('.img-show img').width()
let new_widht = img_widht+100;
$('.img-show img').width(new_widht);
$('.img-show img').height('auto')
})

$('.minus').on('click', function(){
let img_widht = $('.img-show img').width()
let new_widht = img_widht-100;
if(new_widht < 500) {
  new_widht = 500;
}
$('.img-show img').width(new_widht);
$('.img-show img').height('auto')
})

$('.reset').on('click', function(){ 
$('.img-show img').css({'width': '100%', 'height': '100%', 'top': '0', 'left': '0'});
});


// let ovrflow_width
$(".img-show img").draggable({

scroll: true,
    stop: function(){},  
    drag : function(e,ui){         
      
      let popup_img_width = $('.img-show img').width();
      let popup_width = $('.img-show').width();
      let new_img_width = popup_width - popup_img_width;
      
      let popup_img_height = $('.img-show img').height();
      let popup_height = $('.img-show').height();
      let new_img_height = popup_height - popup_img_height;
      
        if(ui.position.left > 0) {
          ui.position.left = 0;
        }
      if(ui.position.left < new_img_width) {
          ui.position.left = new_img_width;
        }
      
      if(ui.position.top > 0) {
          ui.position.top = 0;
        }
      if(ui.position.top < new_img_height) {
          ui.position.top = new_img_height;
        }
    }
});

});