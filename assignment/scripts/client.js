// an array to store all of our cars
let garage = [];


$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");
  $('#addCarButton').on('click', addNewCar)

  // add click event handler that calls the addNewCar function

}

function addNewCar() {
  // get input values
  yearInput = $('#yearInput').val();
  makeInput = $('#makeInput').val();
  modelInput = $('#modelInput').val();
  // add to array
  garage = {
    year: Number(yearInput),
    make: makeInput,
    model: modelInput
  }
  // anything else?
  render();
}



function render() {
  // update the DOM
  $('.listOfCars').empty();
  for(let i = 0; i < garage.length; i++){
    $('.listOfCars').append(`
      <li>Car Year: ${garage[i].year}. Car Make: ${garage[i].make}. Car Model: ${garage[i].model}
    `)
  }
}