const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");
const maxPoletteBoxses = 32;
const generatePalette = () => {
  container.innerHTML = "";
  for (let i = 0; i < maxPoletteBoxses; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                       <span class="hex-value">${randomHex}</span>`;
    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};
generatePalette();
const copyColor = (elem, hexValue) => {
  const colorElement = elem.querySelector(".hex-value");
  navigator.clipboard
    .writeText(hexValue)
    .then(() => {
      colorElement.innerHTML = "Copied";

      setTimeout(() => (colorElement.innerHTML = hexValue), 1000);
    })
    .catch(() => alert("Failed to copythe color code"));
};
refreshBtn.addEventListener("click", generatePalette);
