const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

function chngimg() {
  let img = document.getElementById("navobject").src;
  // console.log(img);
  // console.log(document.getElementById("navobject"));
  if (img.indexOf("/images/icon-hamburger.svg") != -1) {
    document.getElementById("navobject").src = "/images/icon-close.svg";
  } else {
    document.getElementById("navobject").src = "/images/icon-hamburger.svg";
  }
}
