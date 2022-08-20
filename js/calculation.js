document.getElementById('calculation').addEventListener('click',function(){
  const incomeMoney=incomeExpenses('income-input');
  const foodExpensesMoney=incomeExpenses('food-expense');
  const rentExpensesMoney=incomeExpenses('rent-expense');
  const clothExpensesMoney=incomeExpenses('cloth-expense');
  const totalExpenses=foodExpensesMoney+rentExpensesMoney+clothExpensesMoney;
      console.log(totalExpenses);
  if(isNaN(incomeMoney)===true  ||isNaN(foodExpensesMoney)===true||isNaN(rentExpensesMoney)===true|| (clothExpensesMoney)===true){
alert('Enter Number ');
  }
  else if(incomeMoney<0 ||foodExpensesMoney<0||rentExpensesMoney<0||clothExpensesMoney<0){
    alert('Enter Positive Number');

  }
  else if(incomeMoney<totalExpenses){
    
    
      alert('Expenses is not more than Income');

    }
    else{
      
      // expense total back here
      const getExpensesValue=totalExpensesMoney(totalExpenses);
      const afterExpensesHaveMoney=incomeMoney-getExpensesValue;
    console.log(afterExpensesHaveMoney);
    balanceAfterExpenses(afterExpensesHaveMoney);
    }
    
  
 
});