'use strict';

// Common Events
const heading = document.getElementById('myHeading');
const button = document.getElementById('myButton');
const input = document.getElementById('myInput');
const output = document.getElementById('output');
const hoverBox = document.getElementById('hoverBox');

// Click event → Change heading text & color
button.addEventListener('click', function () {
  heading.innerText = 'Heading Changed! 🎉';
  heading.style.color = 'blue';
});

// Keyup event → Show typed text in real time
input.addEventListener('keyup', function () {
  output.innerText = 'You typed: ' + input.value;
});

// Mouseover event → Change box color when hovering
hoverBox.addEventListener('mouseover', function () {
  hoverBox.style.backgroundColor = 'lightgreen';
  hoverBox.innerText = 'Mouse Over!';
});

// Mouseout event → Reset box color when leaving
hoverBox.addEventListener('mouseout', function () {
  hoverBox.style.backgroundColor = 'lightgray';
  hoverBox.innerText = 'Hover over me';
});

// Create, Add and Delete element

const container = document.getElementById('container');
const myPara = document.getElementById('myPara');

// Utility: create a box with a remove button
function createBox(text) {
  const div = document.createElement('div');
  div.className = 'box';
  div.textContent = text;

  const btn = document.createElement('button');
  btn.textContent = '❌ Remove';
  btn.className = 'remove-btn';
  btn.onclick = () => div.remove(); // removes itself
  div.appendChild(btn);

  return div;
}

function addAppend() {
  container.append(createBox('📦 Appended Element'));
}

function addPrepend() {
  container.prepend(createBox('📦 Prepended Element'));
}

function addBefore() {
  myPara.before(createBox('📦 Inserted Before <p>'));
}

function addAfter() {
  myPara.after(createBox('📦 Inserted After <p>'));
}

// Remove first child inside #container (excluding #myPara if needed)
function removeFirstChild() {
  if (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// Styles and Attributes
const myElement = document.getElementById('box');
const styles = window.getComputedStyle(myElement);
console.log('Width:', styles.width); // "120px"
console.log('Height:', styles.height); // "80px"
console.log('Background Color:', styles.backgroundColor); // "rgb(255, 255, 0)"

function changeHTMLColor() {
  document.documentElement.style.setProperty('background-color', 'lightblue');
}

function showImage() {
  const imgEl = document.getElementById('mySampelImage');
  console.log('Image SRC =', imgEl.src);
  console.log('Image Attribute SRC  =', imgEl.getAttribute('src'));
  console.log('Image Attribute ALT  =', imgEl.getAttribute('alt'));
  console.log('Image Attribute height  =', imgEl.getAttribute('height'));
  console.log('Image Attribute width  =', imgEl.getAttribute('width'));
  imgEl.setAttribute('src', './image/IMG_2.jpeg');
  imgEl.setAttribute('alt', 'IMAG 2');
}

// Dataset and Classes
function updateAppVersion() {
  const appVEl = document.getElementById('appVersion');
  let currentVersion = appVEl.dataset.versionNumber; // Get Current Version
  console.log('App Current Version =', currentVersion); // Log current Version
  currentVersion = incrementAppVersion(currentVersion);
  appVEl.dataset.versionNumber = currentVersion; // Changes the attribute in the DOM
  console.log('App Latest Version =', appVEl.getAttribute('data-version-number')); // "2.0.0"
  appVEl.innerHTML = 'App Latest Version = ' + currentVersion;
}
function incrementAppVersion(currentVersion) {
  let v = currentVersion.split('.');
  for (let i = v.length - 1; i >= 0; i--) {
    let n = Number.parseInt(v[i]);
    if (n < 25) {
      n += 1;
      v[i] = n;
      break;
    } else {
      n = 0;
      v[i] = n;
    }
  }
  return v[0] + '.' + v[1] + '.' + v[2];
}

const text = document.getElementById('myText');

function addClass() {
  text.classList.add('highlight');
}

function removeClass() {
  text.classList.remove('highlight');
}

function toggleClass() {
  text.classList.toggle('blue');
}

function checkClass() {
  if (text.classList.contains('highlight')) {
    alert("✅ 'highlight' class is present");
  } else {
    alert("❌ 'highlight' class is not present");
  }
}
