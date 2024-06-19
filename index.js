var cont=document.querySelector("#elem");
var fixedimg=document.querySelector("#fixed-image");

cont.addEventListener("mouseenter",function(){
    fixedimg.style.display="block";

})
cont.addEventListener("mouseleave",function(){
    fixedimg.style.display="none";

})


var img=document.querySelectorAll(".page3-bottom");

img.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var data=elem.getAttribute("data-image");
        fixedimg.style.backgroundImage=`url(${data})`;
    })
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });