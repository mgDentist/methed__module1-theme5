const eurUsd = 1.2;
const UsdRub = 64;

const convertMoneyEurToRub = (eur) => {
    const finalAmountInRub = eur * eurUsd * UsdRub;

    console.log(`Финальна сумма: ${finalAmountInRub} euro`);
};

convertMoneyEurToRub(100);