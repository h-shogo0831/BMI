'use strict'

{
  let height = document.getElementById('height');
  let weight = document.getElementById('weight');
  let BMI = document.getElementById('BMI');
  const btn = document.getElementById('btn');
  const reset = document.getElementById('reset');

 btn.addEventListener('click',(e)=>{
   if(height.value == '' || weight.value == ''){
     alert('値を入力してください。');
     e.preventDefault();
   } else{
    let m = parseInt(height.value)*0.01
    let kg = parseInt(weight.value);
     BMI.value = Math.round((kg/(m*m))*100)/100
   }
 });

  reset.addEventListener('click',()=>{
    height.value = "";
    weight.value = "";
    BMI.value = "";
  });

}