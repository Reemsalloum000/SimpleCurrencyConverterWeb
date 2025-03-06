const exchangeRates = {
    USD: {USD: 1, JOD: 0.71, ILS: 3.65 },
    JOD: { JOD: 1, USD: 1.41, ILS: 5.14 },
    ILS: { ILS: 1, USD: 0.27, JOD: 0.19 },
};
function convertCurrency(){
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value; 
    const resultText = document.getElementById("result");

    if (amount === "" || amount<=0){
        resultText.innerHTML = "⚠️ الرجاء إدخال مبلغ صالح.";
        return;
    }
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    resultText.innerHTML =  `💲 ${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}