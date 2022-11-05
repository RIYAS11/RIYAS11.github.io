
let open = document.querySelector(".open");

open.addEventListener("click", () => {

  document.querySelector('.x').style.display = "block";
  document.querySelector('.open').style.display = "none";
  document.querySelector('.close').style.display = "block";
  let url = document.querySelectorAll('.qualification__line');
  url.forEach(el => el.style.display = "none");
})


let close = document.querySelector(".close");

close.addEventListener("click", () => {

  document.querySelector('.x').style.display = "none";
  document.querySelector('.open').style.display = "block";
  document.querySelector('.close').style.display = "none";
  let url = document.querySelectorAll('.qualification__line');
  url.forEach(el => el.style.display = "block");
})





let type = new Typed(".chg", {
  strings: ['  I have knowledge in Java , Spring Boot , Hibernate , SQL , AWS.'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})



GitHubCalendar(".calendar", "riyas11", {
  responsive: true,
  global_stats: false,
  tooltips: true,
});

$(".counting").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },
    {
      duration: 3000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      },
    }
  );
});



document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  //button animation
  document.getElementById("email-submit").innerText = "Sending...";

  if (
    document.getElementById("name").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("message").value != ""
  ) {
    let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const serviceID = "service_embce24";
    const templateID = "template_cci0niw";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        document.getElementById("email-submit").innerHTML = `
          Send message
          <i class="uil uil-message button__icon"></i>`;

        alert("Your message send susscessfully!");
      })
      .catch((err) => {
        document.getElementById("email-submit").innerHTML = `
          Send message
          <i class="uil uil-message button__icon"></i>`;
        console.log(err);
      });
  } else {
    alert("Please fill out all the fields");
  }
});



