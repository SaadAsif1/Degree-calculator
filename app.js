const selectOne = document.querySelector('#select-one');
const selectTwo = document.querySelector('#select-two');
const inputOne = document.querySelector('#celsius');
const inputTwo = document.querySelector('#fahrenheit');
const btn = document.querySelector('.btn');
const alerts = document.querySelector('.alert');

btn.addEventListener('click', buttonClicked);

function buttonClicked(e){
  
  if(inputOne.value != ''){

    if(selectOne.value === 'celsius' && selectTwo.value === 'fahrenheit'){

      // calcuation
      const celcius = ((parseFloat(inputOne.value)*9/5) + 32).toFixed(2);

      const something = (inputTwo.value = celcius);

      numberCheck();

    } else if((selectOne.value === 'fahrenheit' && selectTwo.value === 'celsius')){

      const fahrenheit = ((parseFloat(inputOne.value)-32)*5/9).toFixed(2);

      const same = (inputTwo.value = fahrenheit);

      numberCheck();


    }else{

      // makes sure deggres are not the same
      alerts.innerHTML = '<p class="p">Cant Choose the Same Options</p>';
      alerts.style.display = 'block';


      setTimeout(function(){
         alerts.style.display = 'none';
      },2000)
    }

  }else {
    alerts.innerHTML = '<p class="p">Please Check Number</p>';
    alerts.style.display = 'block';
    setTimeout(function(){
      alerts.style.display = 'none';
   },2000)
  }



  e.preventDefault();

}

function numberCheck(){

  const inputValue = inputOne.value.substring(0, 1000);
  const inputLength = inputValue.length;


  if(inputLength >= 6  ){
    alerts.innerHTML = '<p class="p">Number Converted Must be 5 or less</p>';
    alerts.style.display = 'block';
    inputTwo.value = '0';
  setTimeout(function(){
    alerts.style.display = 'none';
 },3000)
  } 
}





// (0°C × 9/5) + 32 = 32°F


// Farent height to celcius 
// Deduct 32, then multiply by 5, then divide by 9

// celcius to fairentheight 
// Multiply by 9, then divide by 5, then add 32