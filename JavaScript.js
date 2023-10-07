const display = document.querySelector('.girdi');
const butonlar = document.querySelector('.hesapMakinesiTuslar');

let displayValue = '0';
let ilkDeger = null;
let operator = null;
let ikinciDeger = false;

Guncelle();

function Guncelle() {
    display.value = displayValue;
}

butonlar.addEventListener('click', function (e) {
    const element = e.target;

    if (!element.matches('button')) return;

    if (element.classList.contains('operator')) {
        operatorDegistir(element.value);
        Guncelle();
        return;
    }
    if (element.classList.contains('decimal')) {
        ondalıkGirdi();
        Guncelle();
        return;
    }
    if (element.classList.contains('clear')) {
        clear();
        Guncelle();
        return;
    }
    girilen_sayi(element.value);
    Guncelle();

});

function hesapla(first, second, operator) {
    if (operator === '+') {
        return first + second;
    }
    else if (operator === '-') {
        return first - second;
    }
    else if (operator === '*') {
        return first * second;
    }
    else if (operator === '/') {
        return first / second;
    }
   return second;
}

function operatorDegistir(nextoperator) {
    const value = parseFloat(displayValue);
    if (operator && ikinciDeger) {
        operator = nextoperator;
        return;
    }

    if (ilkDeger == null) {
        ilkDeger = value;
    }
    else if (operator) {
        const result = hesapla(ilkDeger, value, operator);
        displayValue = String(result);
        ilkDeger = result;
    }
    ikinciDeger = true;
    operator = nextoperator;
    console.log(displayValue, ilkDeger, operator, ikinciDeger);
}

function ondalıkGirdi() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
}

function girilen_sayi(num) {
    if (ikinciDeger) {
        displayValue = num;
        ikinciDeger = false;
    }
    else {
        displayValue = displayValue === '0' ? num : displayValue + num;
    }
    console.log(displayValue, ilkDeger, operator, ikinciDeger);
}

function clear() {
    displayValue = '0';
}