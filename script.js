"use strict";
const colorPicker = document.querySelector("#basecolor");
colorPicker.addEventListener("input", selectColor);

function selectColor(event) {
  const color = event.target.value;
  console.log(color);
  convertHEXtoRGB(color);
  document.querySelector(".color").style.backgroundColor = `${color}`;
  document.querySelector(".hex1").textContent = `Hex: ${color}`;
}
function convertHEXtoRGB(color) {
  let r = parseInt(color.substring(1, 3), 16);
  let g = parseInt(color.substring(3, 5), 16);
  let b = parseInt(color.substring(5, 7), 16);

  document.querySelector(".RGB").textContent = `RGB(${r},${g},${b}`;
  convertRGBtoHSL(r, b, g);
}

function convertRGBtoHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  // function convertHEXtoRGB(color) {}{}{}{}
  h = Math.floor(h * 10);
  s = Math.floor(s * 10);
  l = Math.floor(l * 10);
  document.querySelector(".HSL").textContent = `HSL: ${h}, ${s}, ${l}`;
}
