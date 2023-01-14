//preloader


setTimeout(function(){ 
  $(".loader-wrapper").fadeOut(200);
  $("body").removeClass("preload");
}, 4000); 


//fade-in-effect

const appear = document.querySelector('.appear'); 
const cb = function(entries){
            
  
entries.forEach(entry => {
              if(entry.isIntersecting){
                entry.target.classList.add('inview');
                entry.unobserve(entry.target)
              }
            });
          }

const io3 = new IntersectionObserver(cb);
io3.observe(appear);

//

const items = document.querySelectorAll('.appear2');

const active = function(entries){
  
entries.forEach(entry => {
                  if(entry.isIntersecting){
                  entry.target.classList.add('inview2'); 
                  }else{
                      entry.target.classList.remove('inview2'); 
                  }
              });
          }
          
const io2 = new IntersectionObserver(active);

for(let i=0; i < items.length; i++){
              io2.observe(items[i]);
          }

//


$(document).ready(function () {

          const funFacts = [
            "I dived to 90 feet with one breath in 2019",
            "I love to spend a whole day in the climbing gym, climbing and watching other climbers",
            "I easily get into flow states when designing, climbing, and cooking",
            "My favorite season is autumn",
            "I’m an introvert but feel energetic after talking to interesting people and receiving new ideas",
            "I love the outdoors but still feel scared when seeing an insect in my tent",
            "I cried when my design was launched during my first internship",
            "Moving from Beijing to Ann Abor, it's my first time living in a small town, but I love it",
            "My favourite artist is James Turrell",
            "My favourite podcast is Design Matters with Debbie Millman",
            "My dream job in middle school was to become an architect",
            "I can easily remember the past roads even though I only walked through them once"
          ];

          var randomFactIndex = Math.floor(Math.random() * funFacts.length);
          $('#preloader-title').text("Fun fact about Lynn #"+(randomFactIndex+1));
          $('#preloader-content').html(funFacts[randomFactIndex]);



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
  
          $("#box-urban").hover(function(){
            $("#urban-background").css("background", "linear-gradient(255.27deg, #F7C000 0.97%, #FFC700 0.98%, #FFFFFF 103.9%)");
            }, function(){
            $("#urban-background").css("background", "#EEEEEE");
          });


  
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








