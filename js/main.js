const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

console.log(navBtnImg);

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./pic/nav/NAV-CLOSE.svg";
  } else {
    navBtnImg.src = "./pic/nav/NAV.svg";
  }
};
AOS.init();
