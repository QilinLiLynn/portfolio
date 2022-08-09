
//preloader

$(window).on("load",function(){
     $(".loader-wrapper").fadeOut(200);
     $("body").removeClass("preload");
});

//menu

const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-main a')
const menuLength = menuItem.length

for (let i = 0; i < menuLength; i++) {
  if(menuItem[i].href === currentLocation){
    menuItem[i].classList.add('active');
  }
}


$(document).ready(function () {

//set tag hover interaction
        $(".box").hover(function(){
          $(this).find(".img-project-overview").css("filter", "saturate(100%)");
          }, function(){
          $(this).find(".img-project-overview").css("filter", "saturate(90%)");
        });

        $("#box-shimo").hover(function(){
          $("#shimo-background").css("background", "linear-gradient(360deg, #2C3033 -0.09%, #54585D 100%)");
        }, function(){$("#shimo-background").css("background", "#EEEEEE");
        });
        

        $("#box-handinhand").hover(function(){
          $("#handinhand-background").css("background", "linear-gradient(90deg, #D2D5EC 0%, #E5E7F4 100%)");
          }, function(){
          $("#handinhand-background").css("background", "#EEEEEE");
        });

        $("#box-lemonbox").hover(function(){
          $("#lemonbox-background").css("background", "linear-gradient(261.65deg, #FFFFFF -3.33%, #FDF150 78.83%)");
          }, function(){
          $("#lemonbox-background").css("background", "#EEEEEE");
        });

        $("#box-dailyui").hover(function(){
          $("#dailyui").css("filter", "saturate(100%)");
          }, function(){
          $("#dailyui").css("filter", "saturate(0%)");
        });

        $("#box-dailyui").hover(function(){
          $("#dailyui").css("opacity", "1");
          }, function(){
          $("#dailyui").css("opacity", "0.1");
        });



});



