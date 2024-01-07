//toggle icon navbar
console.log("hello");
//
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll secttion
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
//
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

let mail=document.getElementById("mail");
let call=document.getElementById('call');

call.href="tel:8988063411";
mail.href="mailto:pc69269@gmail.com";

console.log(mail.innerText);
console.log(call.innerText);

let pdf=document.getElementById("pdf");
pdf.href="Pankaj's Resume (Back).pdf";

document.getElementById('mobile').addEventListener('input',function(){
  let inputValue = this.value.replace(/\D/g, '');
  let length=this.value.length;
  if(length>10){
    this.value = inputValue.slice(0, 10);
  }
})
document.getElementById('contactForm').addEventListener('submit', function(event) {
  let mobileInput = document.getElementById('mobile');
  let mobile = mobileInput.value.trim();

  if (mobile.length !== 10) {
      mobileInput.style.border = '1px solid red'; // Add 'error' class for styling
      mobileInput.focus();
      event.preventDefault(); // Prevents form submission if validation fails
  } 
});
document.getElementById('mobile').addEventListener('input', function() {
  let mobileInput = document.getElementById('mobile');
  let mobile = mobileInput.value;

  if (mobile.length === 10) {
      mobileInput.style.border = ''; // Reset border if length becomes 10
  }
});