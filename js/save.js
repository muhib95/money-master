document.getElementById('save-button').addEventListener('click',function(){
  const savingValue=incomeExpenses('saving-expenses');
  console.log(savingValue);
  const saveValue=valuForSave();
  console.log(saveValue);
  const savingAmount=(savingValue/100)*saveValue;
  console.log(savingAmount);
  if(savingValue>100){
    alert('Not more than 100');

  }
  else{
   
  
 savingValuSet(savingAmount);
 const takaHave=saveValue-savingAmount;
 console.log(takaHave);
 remainTakaSet(takaHave);
  }

});