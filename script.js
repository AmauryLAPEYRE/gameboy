// Game Boy color palette
// http://ooloopa.studio/gameboy-color-palette/
const COLOR_0 = '#CADC9F'
const COLOR_1 = '#0f380f'
const COLOR_2 = '#306230'
const COLOR_3 = '#8bac0f'
const COLOR_4 = '#9bbc0f'

// canvas
const display = document.getElementById('display');
const ctx = display.getContext('2d');

// using canvas to draw the clicked button names

const drawText = (text) => {
  ctx.clearRect(0, 0, 200, 200)
  ctx.font = '24px Arial, Helvetica, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = COLOR_2;
  ctx.fillText(text, display.width/2, display.height/2);
};

const extractButtonName = (id) => {
  return id.replace('-button', '').replace('dpad-', '')
};

const gbInput = document.getElementsByClassName('gb-input');

for(let input of gbInput) {
  const btnName = extractButtonName(input.id);
  input.onclick = (e) => drawText(btnName);
}
