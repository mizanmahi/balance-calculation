const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

function updateBalance(elementId1, elementId2, inputId, isSubtract) {
  let element1 = document.getElementById(elementId1);
  let element2 = document.getElementById(elementId2);
  let input = document.getElementById(inputId);
  let newAmount1 = 0;
  let newAmount2 = 0;

  if (!isSubtract && parseFloat(input.value) > 0) {
    newAmount1 = parseFloat(element1.innerText) + parseFloat(input.value);
    newAmount2 = parseFloat(element2.innerText) + parseFloat(input.value);
    element1.innerText = newAmount1;
    element2.innerText = newAmount2;
  } else if (
    isSubtract &&
    parseFloat(input.value) > 0 &&
    parseFloat(input.value) < parseFloat(element2.innerText)
  ) {
    newAmount1 = parseFloat(element1.innerText) + parseFloat(input.value);
    newAmount2 = parseFloat(element2.innerText) - parseFloat(input.value);
    element1.innerText = newAmount1;
    element2.innerText = newAmount2;
  } else {
    console.log('Please insert valid amount');
  }

  input.value = '';
}

depositBtn.addEventListener('click', function (e) {
  e.preventDefault()
  updateBalance('deposit_balance', 'current_balance', 'depositInput');
});

withdrawBtn.addEventListener('click', function (e) {
  e.preventDefault()
  updateBalance('withdrawAmount', 'current_balance', 'withdrawInput', true);
});
