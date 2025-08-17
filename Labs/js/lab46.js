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

// Events and Event Handlers
// -------- Mouse Events --------
document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Button Clicked!');
});

document.getElementById('dblClickBtn').addEventListener('dblclick', () => {
  alert('Button Double Clicked!');
});

const mouseArea = document.getElementById('mouseArea');
mouseArea.addEventListener('mouseenter', () => mouseArea.classList.add('highlight'));
mouseArea.addEventListener('mouseleave', () => mouseArea.classList.remove('highlight'));
mouseArea.addEventListener('mousemove', e => {
  mouseArea.textContent = `Mouse at X:${e.offsetX}, Y:${e.offsetY}`;
});

// -------- Keyboard Events --------
const keyInput = document.getElementById('keyInput');
const keyOutput = document.getElementById('keyOutput');
keyInput.addEventListener('keydown', e => (keyOutput.textContent = `Key Down: ${e.key}`));
keyInput.addEventListener('keyup', e => (keyOutput.textContent = `Key Up: ${e.key}`));

// -------- Form Events --------
const myForm = document.getElementById('myForm');
const formOutput = document.getElementById('formOutput');
myForm.addEventListener('submit', e => {
  e.preventDefault(); // prevent page refresh
  formOutput.textContent = `Form submitted! Username: ${username.value}, Password: ${password.value}`;
});
myForm.addEventListener('reset', () => (formOutput.textContent = 'Form has been reset!'));
document.getElementById('username').addEventListener('change', e => (formOutput.textContent = `Username changed to: ${e.target.value}`));
document.getElementById('username').addEventListener('focus', () => (formOutput.textContent = 'Username input focused'));
document.getElementById('username').addEventListener('blur', () => (formOutput.textContent = 'Username input lost focus'));

// -------- Window Events --------
const windowOutput = document.getElementById('windowOutput');
window.addEventListener('resize', () => (windowOutput.textContent = 'Window was resized!'));
window.addEventListener('scroll', () => (windowOutput.textContent = 'Page was scrolled!'));

// -------- Clipboard Events --------
const clipArea = document.getElementById('clipArea');
const clipOutput = document.getElementById('clipOutput');
clipArea.addEventListener('copy', () => (clipOutput.textContent = 'Copied text!'));
clipArea.addEventListener('cut', () => (clipOutput.textContent = 'Cut text!'));
clipArea.addEventListener('paste', () => (clipOutput.textContent = 'Pasted text!'));

// -------- Drag & Drop Events --------
const dragItem = document.getElementById('dragItem');
const dropZone = document.getElementById('dropZone');
const dragOutput = document.getElementById('dragOutput');

dragItem.addEventListener('dragstart', () => (dragOutput.textContent = 'Dragging started'));
dropZone.addEventListener('dragover', e => e.preventDefault()); // allow drop
dropZone.addEventListener('drop', () => (dragOutput.textContent = 'Dropped inside zone'));

// -------- Touch Events (Mobile) --------
const touchBox = document.getElementById('touchBox');
const touchOutput = document.getElementById('touchOutput');
touchBox.addEventListener('touchstart', () => (touchOutput.textContent = 'Touch started'));
touchBox.addEventListener('touchmove', () => (touchOutput.textContent = 'Touch moving...'));
touchBox.addEventListener('touchend', () => (touchOutput.textContent = 'Touch ended'));

// Bubbling and Capturing
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const btn = document.getElementById('btn');

// Bubbling (default: false)
outer.addEventListener('click', () => console.log('Outer DIV (Bubbling)'), false);
inner.addEventListener('click', () => console.log('Inner DIV (Bubbling)'), false);
btn.addEventListener('click', () => console.log('Button (Bubbling)'), false);

// Capturing (true)
outer.addEventListener('click', () => console.log('Outer DIV (Capturing)'), true);
inner.addEventListener('click', () => console.log('Inner DIV (Capturing)'), true);
btn.addEventListener('click', () => console.log('Button (Capturing)'), true);

// Event  Propagation
document.getElementById('outer2').addEventListener('click', () => {
  console.log('Outer Div (Bubbling)');
});
document.getElementById('inner2').addEventListener('click', () => {
  console.log('Inner Div (Bubbling)');
});
document.getElementById('btn2').addEventListener('click', () => {
  console.log('Button (Target)');
});
// Capturing example
document.getElementById('outer').addEventListener(
  'click',
  () => {
    console.log('Outer Div (Capturing)');
  },
  true
);

// Event  Delegation
document.querySelectorAll('.menu_item').forEach(item => {
  item.addEventListener('click', () => {
    console.log('You clicked:', item.textContent);
  });
});

const menu = document.getElementById('menu');
// Event delegation
menu.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    console.log('You clicked:', event.target.textContent);
  }
});

// Scroll Into View
const btn2 = document.getElementById('scrollBtn');
const target = document.getElementById('target');

btn2.addEventListener('click', () => {
  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// DOM Traversing
const menu2 = document.getElementById('menu2');
const about = document.getElementById('about');
// 🔹 Parent Node
console.log('Parent of About:', about.parentNode);
// 🔹 First Child
console.log('First Child of Menu:', menu2.firstElementChild.textContent);
// 🔹 Last Child
console.log('Last Child of Menu:', menu2.lastElementChild.textContent);
// 🔹 Next Sibling
console.log('Next Sibling of About:', about.nextElementSibling.textContent);
// 🔹 Previous Sibling
console.log('Previous Sibling of About:', about.previousElementSibling.textContent);
// 🔹 All Children
console.log('Children of Menu:');
Array.from(menu2.children).forEach(item => console.log(item.textContent));

const about2 = document.getElementById('about');
// 🔹 Step 1: Go Up (get parent UL)
const parentUl = about2.parentElement;
console.log('Parent UL:', parentUl);
// 🔹 Step 2: From parent, go down (last child of UL)
const lastChild = parentUl.lastElementChild;
console.log('Last Child of Parent UL:', lastChild.textContent);
// 🔹 Step 3: Combine traversal
console.log('Parent → Last Child in one chain:', about2.parentElement.lastElementChild.textContent);
// 🔹 Another chain: Parent → First Child
console.log('Parent → First Child:', about2.parentElement.firstElementChild.textContent);

// Tabbed Component
const tabs2 = document.querySelectorAll('.tab2');
const contents2 = document.querySelectorAll('.tab2-content');

tabs2.forEach(tabC => {
  tabC.addEventListener('click', () => {
    // Remove active from all
    tabs2.forEach(t => t.classList.remove('active'));
    contents2.forEach(c => c.classList.remove('active'));

    // Add active to clicked tab and its content
    tabC.classList.add('active');
    document.getElementById(tabC.dataset.target).classList.add('active');
  });
});

// Passing Arguments to Event Handlers
// Normal event handler without arguments
document.getElementById('btnX').addEventListener('click', function (event) {
  console.log('Clicked:', event.target.textContent);
  console.log(event);
  console.log('Value', event.target.value);
});

// Passing extra argument using an arrow function
function showMessage(message, event) {
  console.log('Message:', message, '| Clicked:', event.target.textContent);
}

document.getElementById('btnY').addEventListener('click', event => {
  showMessage('Hello from Button Y!', event);
});

// Passing arguments with bind()
function showInfo(id, event) {
  console.log('Button ID:', id, '| Text:', event.target.textContent);
}

document.getElementById('btnZ').addEventListener(
  'click',
  showInfo.bind(null, 'btnZ') // first arg is custom, event is auto
);
