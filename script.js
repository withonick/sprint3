function calculate(value) {
    let currency = document.getElementById("blmim");
    if (currency.value === "KZT") {
        let kztToUsd = Math.round(value * 0.23201856) / 100;
        let kztToEur = Math.round(value * 0.19646365) / 100;
        document.getElementById("output-usd").innerHTML = kztToUsd.toString();
        document.getElementById("output-eur").innerHTML = kztToEur.toString();
        document.getElementById("output-kzt").innerHTML = "-";
    } else if (currency.value === "USD") {
        let usdToKzt = Math.round(value * 42900.0) / 100;
        let usdToEur = Math.round(value * 84.283) / 100;
        document.getElementById("output-kzt").innerHTML = usdToKzt.toString();
        document.getElementById("output-eur").innerHTML = usdToEur.toString();
        document.getElementById("output-usd").innerHTML = "-";
    } else if (currency.value === "EUR") {
        let eurToKzt = Math.round(value * 50700.0) / 100;
        let eurToUsd = Math.round(value * 117.6335) / 100;
        document.getElementById("output-kzt").innerHTML = eurToKzt.toString();
        document.getElementById("output-usd").innerHTML = eurToUsd.toString();
        document.getElementById("output-eur").innerHTML = "-";
    }
}