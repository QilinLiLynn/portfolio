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
            "Dove 90 feet on one breath in 2019 🌊",
            "Gym rat, climbing all day 🧗‍♂️",
            "Easily in the flow while designing, climbing, and cooking 🎨🍳",
            "Autumn is my fave season 🍂",
            "Introvert with an energy boost from interesting convos 💬",
            "Outdoor lover who's scared of insects 🏕️",
            "Cried when my first design was launched 😭",
            "From Beijing to Ann Arbor, small town lover ❤️",
            "Obsessed with James Turrell's art 🎨",
            "Addicted to 'Design Matters with Debbie Millman' podcast 🎙️",
            "Middle school dream: Architect 🏗️",
            "One-time path walker with a photographic memory 🚶‍♂️🧠"
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
          
          $("#box-alibaba").hover(function(){
            $("#alibaba-background").css("background", "linear-gradient(287deg, #FFC26D 1.59%, #FF8500 97.05%)");
            }, function(){
            $("#alibaba-background").css("background", "#EEEEEE");
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








