// hover effect for herofooter

const right1 = document.querySelector("#rightarrow1");
const upRight1 = document.querySelector("#upRightarrow1");
const herofooterA1 = document.querySelector("#herofooterA1");

herofooterA1.addEventListener("mousemove", function(){
    upRight1.style.display = 'none';
    right1.style.display = 'inline-block';
    right1.style.transition = "ease-in";
})
herofooterA1.addEventListener("mouseout", function(){
    upRight1.style.display = 'inline-block';
    right1.style.display = 'none';
    upRight1.style.transition = "ease-in";
})

const right2 = document.querySelector("#rightarrow2");
const upRight2 = document.querySelector("#upRightarrow2");
const herofooterA2 = document.querySelector("#herofooterA2");

herofooterA2.addEventListener("mousemove", function(){
    upRight2.style.display = 'none';
    right2.style.display = 'inline-block';
    right2.style.transition = "ease-in";
})
herofooterA2.addEventListener("mouseout", function(){
    upRight2.style.display = 'inline-block';
    right2.style.display = 'none';
    upRight2.style.transition = "ease-in";
})


// locomotiv 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// mouse follow

var timeout;
function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector(
          "#minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    });
  }
function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}
circleChaptaKaro();
// circleMouseFollower();



document.querySelectorAll(".elm").forEach(function (elm) {
    var rotate = 0;
    var diffrot = 0;
  
    elm.addEventListener("mouseleave", function (dets) {
      gsap.to(elm.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elm.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elm.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elm.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });