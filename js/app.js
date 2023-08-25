
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    // console.log(pin);
    //display screen
    const displayGenerateScreenField = document.getElementById('display-screen');
    displayGenerateScreenField.value = pin;

    const textAlign = displayGenerateScreenField.style.textAlign = 'center';

})

document.getElementById('calculator-click').addEventListener('click', function (event) {
    const numericNumber = event.target.innerText;
    const displayScreenField = document.getElementById('display-field');
    const preNumericNumber = displayScreenField.value;

    const textAlign = displayScreenField.style.textAlign = 'center';


    // console.log(numericNumber)
    if (isNaN(numericNumber)) {
        // console.log(numericNumber);
        if (numericNumber === 'C')
            displayScreenField.value = '';
        else if (numericNumber === '<') {
            const displayNumber = preNumericNumber.split('')
            displayNumber.pop();
            const newDisplayNumber = displayNumber.join('');
            displayScreenField.value = newDisplayNumber;
        }
    }
    else {
        const newNumericNumber = preNumericNumber + numericNumber;
        displayScreenField.value = newNumericNumber;
        // console.log(newNumericNumber)
    }

})

document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('submit button clicked...')
    const displayPinField = document.getElementById('display-screen');
    const currentPin = displayPinField.value;

    // console.log(currentPin)

    const displayField = document.getElementById('display-field');
    const displayPin = displayField.value;
    console.log(displayPin)
    const displaySuccessMesg = document.getElementById('display-success');
    const displayFailMesg = document.getElementById('display-fail');

    if (displayPin === currentPin) {
        displaySuccessMesg.style.display = 'block';
        displayFailMesg.style.display = 'none';

    }
    else {
        displayFailMesg.style.display = 'block';
        displaySuccessMesg.style.display = 'none';

    }
})