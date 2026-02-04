function increaseSize() {
  const balloon = document.getElementById("balloon");
  let currentWidth = balloon.offsetWidth;
  let currentHeight = balloon.offsetHeight;
  balloon.style.width = currentWidth + 10 + "px";
  balloon.style.height = currentHeight + 10 + "px";

  if (currentWidth >= 420 || currentHeight >= 420) {
    balloon.style.width = "200px";
    balloon.style.height = "200px";
  }

  if (balloon.style.backgroundColor === "red") {
    balloon.style.backgroundColor = "green";
  } else if (balloon.style.backgroundColor === "green") {
    balloon.style.backgroundColor = "blue";
  } else {
    balloon.style.backgroundColor = "red";
  }
}

function decreaseSize() {
  const balloon = document.getElementById("balloon");
  let currentWidth = balloon.offsetWidth;
  let currentHeight = balloon.offsetHeight;
  if (currentWidth > 200 || currentHeight > 200) {
    balloon.style.width = currentWidth - 10 + "px";
    balloon.style.height = currentHeight - 10 + "px";
  }
}

