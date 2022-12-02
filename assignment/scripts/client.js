// an array to store all of our cars
let garage = [];
let invalidInput = [];

$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");
  render();
  $('#addCarButton').on('click', addNewCar)
  $('body').on('click', '.deleteButton', deleteCar)
  // add click event handler that calls the addNewCar function

}
function deleteCar(){
  let buttonClicked = $(this);
  let yearSpan = buttonClicked.siblings();
  let actualCarYear = yearSpan.text();
  console.log(actualCarYear);
  let cleanGarage = [];
  for(let i = 0; i < garage.length; i++){
    if(actualCarYear != garage[i].year){
      cleanGarage.push(garage[i]);
    }
  }
  garage = cleanGarage;
  render();
}

function addNewCar() {
  // get input values
  $('h2').empty();
  yearInput = $('#yearInput').val();
  makeInput = $('#makeInput').val();
  modelInput = $('#modelInput').val();
  if(yearInput === '' || makeInput === '' || modelInput === ''){
    for(let i = 0; i < 1; i++){ 
      $('h2').append(`INVALID INPUT`);
    }
  } else {
    let newGarage = {
      year: Number(yearInput),
      make: makeInput,
      model: modelInput
    }
    garage.push(newGarage);
    console.log(garage)
    // anything else?
  
    $('#yearInput').val('')
    $('#makeInput').val('')
    $('#modelInput').val('')
  }
  render();
  // add to array
}



function render() {
  // update the DOM
  $('#listOfCars').empty();
  for(let i = 0; i < invalidInput.length; i++){
    $('h2').append(`<div>${invalidInput[i].iv0} ${invalidInput[i].iv1} ${invalidInput[i].iv2}</div>`)
  }
  for(let i = 0; i < garage.length; i++){
    $('#listOfCars').append(`
      <li>Car Year: <span class="yearSpan">${garage[i].year}</span>. Car Make: ${garage[i].make}. Car Model: ${garage[i].model}
        <button class="deleteButton">🔥</button>
      </li>
      
    `)
    
  }
  
}