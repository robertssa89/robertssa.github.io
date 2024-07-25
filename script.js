let buttons = document.getElementsByTagName("button");



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", handleMouseOver);
    buttons[i].addEventListener("mouseleave", handleMouseLeave);
}

function handleMouseOver(evt) {
  let button = evt.target;
  const name = button.firstElementChild.firstElementChild;

  name.style.backgroundColor = "white";
  name.style.color = "#A68524";
  name.style.fontSize = "20px";
  button.style.maxHeight = "6em";
  button.style.backgroundColor = "white";
  button.style.cursor = "pointer";
  button.style.borderColor = "#A68524";
}

function handleMouseLeave(evt) {
  let button = evt.target;
  const name = button.firstElementChild.firstElementChild;

  name.style.backgroundColor = "#F2DE79";
  name.style.color = "#592D07";
  name.style.fontSize = "16px";
  button.style.backgroundColor = "#F2DE79";
  button.style.borderColor = "#A68A56";
}