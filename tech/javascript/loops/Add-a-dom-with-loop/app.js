

//const randColorRGB = () => {

const randColorRGB = (shades) => {

  const red = Math.floor( Math.random() * 0 );
  const green = Math.floor( Math.random() * 196 );
  const blue = Math.floor( Math.random() * 239);
  return "rgb(" + red + "," + green + "," + blue + ")";
}
console.log(randColorRGB());
const generateSquares = (numberOfSquares) => {
  for (let i=1; i <= numberOfSquares; i++) {
  console.log(i);
  const $square = $('<div>').addClass('square');
  $square.css('background-color', randColorRGB());
  $square.text(i);
  $square.attr('id', 'square' + i);
  $('body').append($square);
  }
}
$(()=>{
  generateSquares(1000);
});
