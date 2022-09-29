const modelViews = document.querySelectorAll('.experiences_model')
      modelBtns = document.querySelectorAll('.experiences_button')
      modelClose = document.querySelectorAll('.experiences_model-close')
    
let model = function(modelClick){
    modelViews[modelClick].classList.add('active-model')
}

modelBtns.forEach((mb, i) =>{
    mb.addEventListener('click',() =>{
        model(i)
    })
})

modelClose.forEach((mc) =>{
    mc.addEventListener('click',() =>{
        modelViews.forEach((mv) =>{
            mv.classList.remove('active-model')
        })
    })
})

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 100) {
        header.style.backgroundColor = "#061630";
    } else{
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });

});



// document.addEventListener('scroll', () => {
//     var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("header").style.top = "0px";
//   } else {
//     document.getElementById("header").style.top = "-60px";
//   }
//   prevScrollpos = currentScrollPos;
// }
// });

