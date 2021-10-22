const h1 = document.querySelector("h1");
const body = document.querySelector("body");
h1.style.color = "white";
backgroundColor();

function backgroundColor() {
  const width = window.innerWidth;
  if (width < 600) {
    body.style.backgroundColor = "royalblue";
  } else if (width < 800) {
    body.style.backgroundColor = "darkorchid";
  } else {
    body.style.backgroundColor = "goldenrod";
  }
}

function handleWindowResize() {
  backgroundColor();
}

window.addEventListener("resize", handleWindowResize);
