
let open = document.querySelector(".open");

open.addEventListener("click", () => {

    document.querySelector('.x').style.display = "block";
    document.querySelector('.open').style.display = "none";
    document.querySelector('.close').style.display = "block";
 let url =   document.querySelectorAll('.qualification__line');
  url.forEach(el => el.style.display="none");
})


let close = document.querySelector(".close");

close.addEventListener("click", () => {

    document.querySelector('.x').style.display = "none";
    document.querySelector('.open').style.display = "block";
    document.querySelector('.close').style.display = "none";
    let url =   document.querySelectorAll('.qualification__line');
  url.forEach(el => el.style.display="block");
})





let type = new Typed(".chg", {
    strings: ['  I have knowledge in Java , Spring Boot , Hibernate , SQL , AWS.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


