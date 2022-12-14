let list = document.querySelectorAll('.sci li');
let bg = document.querySelector('.socialMedia');

list.forEach(el => {
    el.addEventListener('mouseenter',function(event){
        let color = event.target.getAttribute
        ('data-color');
        bg.style.backgroundColor = color;
    })
    el.addEventListener('mouseleave',function(event){
        bg.style.backgroundColor = '#fff';
    })
})

VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 30,
    speed: 400,
    glare : true,
    "max-glare" :1,
});