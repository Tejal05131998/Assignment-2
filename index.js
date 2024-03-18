

function question1(input) {
    var input = document.getElementById("input").value;
    var vowels = 0;
    var consonants = 0;

    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            vowels++;
        } else {
            consonants++;
        }
    }
    document.getElementById("result1").textContent = `Vowels: ${vowels}, Consonants: ${consonants}`;
}

let numberPalindromeInput = document.getElementById('palindrome-check-input');
let isPalindromeSpan = document.getElementById('palindrome-check');

numberPalindromeInput.addEventListener('input', (e) => {
    console.log('eventfired');
    isPalindromeSpan.checked = isPalindrome(e.target.value);
});

function isPalindrome(input) {
    let numberArray = input.split('');
    for (let i = 0, j = numberArray.length - 1; i < numberArray.length / 2; i++, j--) {
        if(numberArray[i]!==numberArray[j])
            return false;
    }

    return input !== '' ? true : false;
}



let subtotalInput = document.getElementById('subtotal-input');
let tipPercentageInput = document.getElementById('tip-percentage-input');
let tipSpan = document.getElementById('tip-text');
let totalSpan = document.getElementById('total-text');
const tipCalcAnon = (e) => {
    console.log('eventfired');
    let tipCalculation = calculateTip(subtotalInput.value, tipPercentageInput.value);
    tipSpan.value = `$${tipCalculation.tip.toFixed(2)}`;
    totalSpan.value = `$${tipCalculation.total.toFixed(2)}`;
}

subtotalInput.addEventListener('input', tipCalcAnon );
tipPercentageInput.addEventListener('input', tipCalcAnon );

function calculateTip(subtotal, tipPercentageInput) {
    let actualTipPercentage = tipPercentageInput * 0.01;
    return {
        total: subtotal* (1+actualTipPercentage),
        tip: subtotal*actualTipPercentage
    }
}