function incomeExpenses(id){
  const inExInfo=document.getElementById(id);
  const inExInfoString=inExInfo.value;
  const inExInfoValue=parseFloat(inExInfoString);
  inExInfo.value='';
  return inExInfoValue;
}
function totalExpensesMoney(expensesValue){
  const expensesId=document.getElementById('total-expenses');
  const expensesString=expensesId.innerText;
  const expensesValueNumber=parseFloat(expensesString);
  const ex=expensesId.innerText=expensesValue;
 return ex; 
}
function balanceAfterExpenses(balanceValue){
  const balanceid=document.getElementById('balance-have');
  const balanceIdString=balanceid.innerText;
  const balanceIdValueNumber=parseFloat(balanceIdString);
  const bal=balanceid.innerText=balanceValue;
  console.log(bal);
  
}
function valuForSave(){
const getValueIdForSave=document.getElementById('balance-have');
const getValueIdForSaveString=getValueIdForSave.innerText;
const getValueIdForSaveSNumber=parseFloat(getValueIdForSaveString);
return getValueIdForSaveSNumber;

}

function savingValuSet(savingValuu){
  const savingValuuSetId=document.getElementById('saving-total');
  savingValuuSetId.innerText=savingValuu;
}
function remainTakaSet(remainTakaSetValuu){
  const remainTakaSetId=document.getElementById('remain-balance');
  remainTakaSetId.innerText=remainTakaSetValuu;
}