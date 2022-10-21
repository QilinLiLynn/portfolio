$(document).ready(function () {

          const funFacts = [
            "I dived into the ocean with one breath to a depth of 90 feet (after systematical training)",
            "I spend most of my free time in the climbing gym",
            "I easily get into flow states when I’m designing, climbing, and cooking",
            "My favorite season is autumn",
            "I’m an introvert but feel energetic after talking to interesting people and hearing new ideas",
            "My MBTI is INFJ",
            "I love the outdoors, but I’m still scared when seeing an insect in my tent",
            "I cried when I saw my design was launched during my first internship",
            "I have lived in four cities since I was born: Wuhan, Beijing, Shanghai, Ann Arbor",
            "I enjoy observing people on the street when I’m alone",
            "My favourite artist is James Turrell",
            "My favourite podcast is Design Matters with Debbie Millman"
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
  
          $("#box-brand").hover(function(){
            $("#brand-background").css("background", "linear-gradient(90deg, #FFDA8D -2.87%, rgba(255, 249, 238, 0.874837) 25.53%, #FFFFFF 72.01%)");
            }, function(){
            $("#brand-background").css("background", "#EEEEEE");
          });
  
  
  
  });


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


//fade-in-effect

const appear = document.querySelector('.appear'); 
const cb = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io = new IntersectionObserver(cb);
io.observe(appear);

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

const appear3 = document.querySelector('.appear3'); 
const cb3 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
      entry.unobserve(entry.target)
    }
  });
}
const io3 = new IntersectionObserver(cb3);
io3.observe(appear3);



