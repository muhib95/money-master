function expensesTotal(id){
  const expenseId=document.getElementById(id);
  const expenseString=expenseId.value;
  const expensesNumber=parseFloat(expenseString);
  return expensesNumber;

}
function totalExpense(expenseValue){
  const expenseResult=document.getElementById('expenses-result');
  const expenseResultString=expenseResult.innerText;
  const expenseResultNumber=parseFloat(expenseResultString); 
  expenseResult.innerText=expenseValue;
  return expenseResultNumber;
}

function balanceTotal(balanceTaka){
  const balanceId=document.getElementById('balance-result');
  const balanceString=balanceId.innerText;
  const balanceT=parseFloat(balanceString);
  const balanceTa=balanceId.innerText=balanceTaka;
  return balanceT;

}
function incomeInput(){
  const incomeInputId=document.getElementById('income-input');
  const incomeInputString=incomeInputId.value;
  const incomeNumber=parseFloat(incomeInputString);
  return incomeNumber;
}

function savingTaka(balanceTaka){
  const savingId=document.getElementById('saves-input');
  const savingString=savingId.value;
  const savingTaka=parseFloat(savingString);
  const savingTotal=(balanceTaka*(savingTaka/100));
  return savingTotal;
}





document.getElementById('calculation-btn').addEventListener('click',function(){
  

const foodExpense=expensesTotal('food-cost');
const rentExpense=expensesTotal('rent-cost');
const clothExpense=expensesTotal('cloth-cost');
const totalExpenses=foodExpense+rentExpense+clothExpense;
const totalExpensesNumber=totalExpense(totalExpenses);

const incomeInp=incomeInput();
const remainningBalance=incomeInp-totalExpenses;

balanceTotal(remainningBalance);


});
document.getElementById('saving-btn').addEventListener('click',function(){
  const balance=document.getElementById('balance-result');
  const balanceString1=balance.innerText;
  
  const saving=savingTaka(balanceString1);
  
  const saValu=document.getElementById('saving-amount');
  const savString=saValu.innerText;
  const savNum=parseFloat(savString);
  saValu.innerText=saving;
 
  const subTotalBalance=document.getElementById('balance-result');
  const subTotalString=subTotalBalance.innerText;
  const subTotalNumber=parseFloat(subTotalString);
  
  const remainningBalanceHave=subTotalNumber-saving;

  const remBal=document.getElementById('remaining-balancetotal');
  const remStri=remBal.innerText;
  remBal.innerText=remainningBalanceHave;
  
});