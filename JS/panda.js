// button er color change
document.getElementById("nike-brand-shoes").style.backgroundColor = "salmon";

// card er color change
const card = (document.getElementById("card").style.backgroundColor = "white");

// form er moddhe condition
document.getElementById("form-control").addEventListener("keyup", function (event) {
  const submitBtn = document.getElementById("submit-btn");
  if (event.target.value == "email") {
    submitBtn.removeAttribute("disabled");
  }
});

// change the image on onmouseover
function changePic(img) {
  document.getElementById("shoes1").src = "shoe-2.png";
}
function changePic1(img) {
  document.getElementById("shoes1").src = "shoe-1.png";
}
