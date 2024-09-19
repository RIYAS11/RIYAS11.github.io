
let flag = false;
let open = document.querySelector(".open");

open.addEventListener("click", () => {

  document.querySelector('.x').style.display = "block";
  document.querySelector('.open').style.display = "none";
  document.querySelector('.close').style.display = "block";
  let url = document.querySelectorAll('.qualification__line');
  url.forEach(el => el.style.display = "none");
  flag = true;
})


let close = document.querySelector(".close");

close.addEventListener("click", () => {

  document.querySelector('.x').style.display = "none";
  document.querySelector('.open').style.display = "block";
  document.querySelector('.close').style.display = "none";
  let url = document.querySelectorAll('.qualification__line');
  url.forEach(el => el.style.display = "block");
})

let cont = document.querySelectorAll("#po");
cont.forEach(el => {

  el.addEventListener("click", () => {
    // console.log("woke")
    if (flag) {
      document.querySelector('.x').style.display = "none";
      document.querySelector('.open').style.display = "block";
      document.querySelector('.close').style.display = "none";
      let url = document.querySelectorAll('.qualification__line');
      url.forEach(el => el.style.display = "block");
      flag = false;

  
    };
  })

})


function downl(){
  
  window.open("https://drive.google.com/file/d/1djHxqMw2xl2AHZCABGTCNMtSqx5erzLi/view?usp=sharing");
}










GitHubCalendar(".calendar", "riyas11", {
  responsive: true,
  global_stats: false,
  tooltips: true,
});





document.getElementById("linked").addEventListener("click", () => {
  window.location.href = "https://www.linkedin.com/in/riyas973/";
})


document.getElementById("git").addEventListener("click", () => {
  window.location.href = "https://github.com/RIYAS11/";
})




