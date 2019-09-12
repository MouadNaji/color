"use strict";
document.addEventListener("DOMContentLoaded", selectColor);
const colorPicker = document.querySelector("#basecolor");
colorPicker.addEventListener("input", selectColor);

function selectColor(event) {
  const color = event.target.value;
  console.log(color);
  convertHEXtoRGB(color);
  //document.querySelector(".color").style.backgroundColor = `${color}`;
  document.querySelector(".hex1").textContent = `Hex: ${color}`;
}

function convertHEXtoRGB(color) {
  let r = parseInt(color.substring(1, 3), 16);
  let b = parseInt(color.substring(3, 5), 16);
  let g = parseInt(color.substring(5, 7), 16);

  document.querySelector(".RGB").textContent = `rgb(${r},${g},${b})`;
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
  h = Math.floor(h * 1);
  s = Math.floor(s * 1);
  l = Math.floor(l * 1);

  document.querySelector(".HSL").textContent = `HSL: ${h}, ${s}, ${l}`;
  document.querySelector(
    ".color"
  ).style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;

  if (document.querySelector("#theme").value === "monochromatic") {
    document.querySelector(".HSL2").textContent = `HSL: ${h}, ${s}, ${l - 30}`;
    document.querySelector(
      ".color2"
    ).style.backgroundColor = `hsl(${h}, ${s}%, ${l - 30}%)`;

    document.querySelector(".HSL3").textContent = `HSL: ${h}, ${s}, ${l - 20}`;
    document.querySelector(
      ".color3"
    ).style.backgroundColor = `hsl(${h}, ${s}%, ${l - 20}%)`;

    document.querySelector(".HSL4").textContent = `HSL: ${h}, ${s}, ${l + 10}`;
    document.querySelector(
      ".color4"
    ).style.backgroundColor = `hsl(${h}, ${s}%, ${l + 10}%)`;

    document.querySelector(".HSL5").textContent = `HSL: ${h}, ${s}, ${l + 20}`;
    document.querySelector(
      ".color5"
    ).style.backgroundColor = `hsl(${h}, ${s}%, ${l + 20}%)`;
  } else if (document.querySelector("#theme").value === "analogous") {
    document.querySelector(".HSL2").textContent = `HSL: ${h - 40}, ${s}, ${l}`;
    document.querySelector(".color2").style.backgroundColor = `hsl(${h -
      40}, ${s}%, ${l}%)`;

    document.querySelector(".HSL3").textContent = `HSL: ${h - 20}, ${s}, ${l}`;
    document.querySelector(".color3").style.backgroundColor = `hsl(${h -
      20}, ${s}%, ${l}%)`;

    document.querySelector(".HSL4").textContent = `HSL: ${h + 20}, ${s}, ${l}`;
    document.querySelector(".color4").style.backgroundColor = `hsl(${h +
      20}, ${s}%, ${l}%)`;

    document.querySelector(".HSL5").textContent = `HSL: ${h + 40}, ${s}, ${l}`;
    document.querySelector(".color5").style.backgroundColor = `hsl(${h +
      40}, ${s}%, ${l}%)`;
  } else if (document.querySelector("#theme").value === "triad") {
    document.querySelector(".HSL2").textContent = `HSL: ${h - 20}, ${s}, ${l}`;
    document.querySelector(".color2").style.backgroundColor = `hsl(${h +
      60}, ${s}%, ${l}%)`;

    document.querySelector(".HSL3").textContent = `HSL: ${h}, ${s}, ${l - 20}`;
    document.querySelector(
      ".color3"
    ).style.backgroundColor = `hsl(${h}, ${s}%, ${l - 20}%)`;

    document.querySelector(".HSL4").textContent = `HSL: ${h}, ${s}, ${l + 20}`;
    document.querySelector(
      ".color4"
    ).style.backgroundColor = `hsl(${h}, ${s}%, ${l + 20}%)`;

    document.querySelector(".HSL5").textContent = `HSL: ${h - 60}, ${s}, ${l}`;
    document.querySelector(".color5").style.backgroundColor = `hsl(${h -
      60}, ${s}%, ${l}%)`;
  }
  addRGBVAlUE();
}
function addRGBVAlUE() {
  const color2 = document.querySelector(".color2");
  const color3 = document.querySelector(".color3");
  const color4 = document.querySelector(".color4");
  const color5 = document.querySelector(".color5");

  document.querySelector(".RGB2").textContent = color2.style.backgroundColor;
  document.querySelector(".RGB3").textContent = color3.style.backgroundColor;
  document.querySelector(".RGB4").textContent = color4.style.backgroundColor;
  document.querySelector(".RGB5").textContent = color5.style.backgroundColor;
}
