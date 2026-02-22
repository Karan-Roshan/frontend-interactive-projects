const colors = [
    "#2C3E50", "#34495E", "#3B3B58", "#4A4E69", "#22223B",
    "#3D405B", "#2F3E46", "#283618", "#1D3557", "#264653",
    "#5F0F40", "#9A031E", "#6A0572", "#4B0082", "#3A0CA3",
    "#560BAD", "#7209B7", "#6D597A", "#6C757D", "#495057",
    "#3A5A40", "#344E41", "#1B4332", "#2D6A4F", "#2A9D8F",
    "#386641", "#4F772D", "#606C38", "#3E5C76", "#1E6091",
    "#7B2CBF", "#5A189A", "#9D4EDD", "#7F5539", "#6F1D1B",
    "#8B5E34", "#7F4F24", "#582F0E", "#432818", "#3C096C",
    "#B56576", "#6D6875", "#8D99AE", "#5C677D", "#495867"
];


const colorBox = document.querySelector("#colorBox");
const changeBtn = document.querySelector("#changeBtn");
const h2 = document.querySelector("h2");


const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];


changeBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    colorBox.style.backgroundColor = randomColor;
    h2.innerHTML = randomColor
})

