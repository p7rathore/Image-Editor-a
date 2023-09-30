// images/photos Choose Function
let inputFile = document.getElementById("inputFile");
let photosPic = document.getElementById("photos-pic"); //main image edit
let rotateImg = document.getElementById("rotate-img");
let HorizontalFlip = document.getElementById("Horizontal-Flip");
let verticalFlip = document.getElementById("vertical-Flip");

let updateWidth = document.getElementById("update-Width");
let updateHeight = document.getElementById("update-height");

let camvaImg = document.getElementById("camva-img");

let Rotate = 0;
let vertical = 1;
let Horizental = 1;
let FilterBlur = 0;
let Filterbright = 100;
let Filtercontra = 100;
let FliterGray = 0;
let FilterhuiRotate = 0;
let FlterInvert = 0;
let Filtersaturate = 100;

// update images function
inputFile.onchange = function () {
  let file = inputFile.files[0];
  if (!file) return;
  photosPic.src = URL.createObjectURL(file);
};

/* Applay all filter,transform in images/photos */
const applyafilter = () => {
  photosPic.style.transform = `rotate(${Rotate}deg) scale(${vertical},${Horizental})`;
  photosPic.style.filter = `blur(${FilterBlur}px) brightness(${Filterbright}%) contrast(${Filtercontra}%) grayscale(${FliterGray}%) hue-rotate(${FilterhuiRotate}deg) invert(${FlterInvert}%) saturate(${Filtersaturate}%)`;
};
/* verticalFlip function */
verticalFlip.addEventListener("click", () => {
  vertical = vertical === 1 ? -1 : 1;
  applyafilter();
});
/*HorizontalFlip Function  */
HorizontalFlip.addEventListener("click", () => {
  Horizental = Horizental === 1 ? -1 : 1;
  applyafilter();
});

/* Rotate function  */
rotateImg.addEventListener("click", () => {
  Rotate -= 90;
  applyafilter();
});

/* update image show realWidth and height */
photosPic.addEventListener("load", () => {
  let realWidth = photosPic.naturalWidth;
  let realHeight = photosPic.naturalHeight;

  updateWidth.innerHTML = realWidth + `px`;
  updateHeight.innerHTML = realHeight + `px`;
});

/* ======================================================================= Effects ========================================================= */
let Effect = document.getElementById("Effect");
let EffectMenuShow = document.getElementById("Effect-menu-show");
let Blurinput = document.getElementById("Blurinput");
let BlurProgress = document.getElementById("BlurProgress");
/* brightness */
let brightnesinput = document.getElementById("brightnesinput");
let brightUpdateText = document.getElementById("bright-update-text");
/* contrast */
let contrainput = document.getElementById("contrainput");
let contraFilterShowText = document.getElementById("contra-filter-show-text");
/* grayscale */
let grayinput = document.getElementById("grayinput");
let grayTextUpdate = document.getElementById("gray-text-update");

let hueroInput = document.getElementById("hueroInput");
let huiRoText = document.getElementById("hui-ro-text");

let invertinput = document.getElementById("invertinput");
let invertTextFilter = document.getElementById("invert-text-filter");

let saturateinput = document.getElementById("saturateinput");
let saturateTextUpdate = document.getElementById("saturate-text-update");

/* effect toggle menu  */
/* Effect.addEventListener("click", () => {
  if (EffectMenuShow.style.display === "none") {
    EffectMenuShow.style.display = "block";
  } else {
    EffectMenuShow.style.display = "none";
  }
}); */
/* blur filter function */
const Blur = () => {
  BlurProgress.innerText = `${Blurinput.value}%`;
  FilterBlur = Blurinput.value;
  applyafilter();
};
/* brightness filter function */
const brightness = () => {
  brightUpdateText.innerText = `${brightnesinput.value}%`;
  Filterbright = brightnesinput.value;
  /* console.log(Filterbright); */
  applyafilter();
};
/* contrast filter function */
const contrast = () => {
  contraFilterShowText.innerText = `${contrainput.value}%`;
  Filtercontra = contrainput.value;
  applyafilter();
};
/* grayscale filter function */
const grayscale = () => {
  grayTextUpdate.innerText = `${grayinput.value}%`;
  FliterGray = grayinput.value;
  applyafilter();
};
/* hui-rotate filter function */
const huiRotate = () => {
  huiRoText.innerText = `${hueroInput.value}%`;
  FilterhuiRotate = hueroInput.value;
  applyafilter();
};
/* invert filter function */
const invert = () => {
  invertTextFilter.innerText = `${invertinput.value}%`;
  FlterInvert = invertinput.value;
  applyafilter();
};
/* saturate filter function */
const saturate = () => {
  saturateTextUpdate.innerText = `${saturateinput.value}%`;
  Filtersaturate = saturateinput.value;
  applyafilter();
};

Blurinput.addEventListener("input", Blur); // blur
brightnesinput.addEventListener("input", brightness); // brightness
contrainput.addEventListener("input", contrast); // contrast
grayinput.addEventListener("input", grayscale); // grayscale
hueroInput.addEventListener("input", huiRotate); // huiRotate
invertinput.addEventListener("input", invert); // invert
saturateinput.addEventListener("input", saturate); // saturate

/* =============================================================== Downloade Function =============================================================== */
let downloade = document.getElementById("downloade");

function saveImage() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = photosPic.naturalWidth;
  canvas.height = photosPic.naturalHeight;
  ctx.filter = `blur(${FilterBlur}px) brightness(${Filterbright}%) contrast(${Filtercontra}%) grayscale(${FliterGray}%) hue-rotate(${FilterhuiRotate}deg) invert(${FlterInvert}%) saturate(${Filtersaturate}%)`;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  if (Rotate !== 0) {
    ctx.rotate((Rotate * Math.PI) / 180);
  }
  ctx.scale(vertical, Horizental);
  ctx.drawImage(
    photosPic,
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height
  );

  const link = document.createElement("a");
  link.download = "image.jpg";
  link.href = canvas.toDataURL();
  link.click();

  /*  document.body.appendChild(canvas); */
}

downloade.addEventListener("click", saveImage);

/* ========================================================= reset ============================================================ */
let resetbtn = document.getElementById("reset");

function reset() {
  Rotate = 0;
  vertical = 1;
  Horizental = 1;
  FilterBlur = 0;
  Filterbright = 100;
  Filtercontra = 100;
  FliterGray = 0;
  FilterhuiRotate = 0;
  FlterInvert = 0;
  Filtersaturate = 100;
  applyafilter();
}

resetbtn.addEventListener("click", reset);
