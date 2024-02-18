const calculate = (sum, goodsAmmount, promo) => {
    let operatedSum = sum;

    if (goodsAmmount > 10) {
        operatedSum *= 0.97;
        console.log(`Цена после скидки по количеству товара: ${operatedSum} руб.`);
    }
    if (operatedSum > 30000) {
        operatedSum -= (operatedSum - 30000) * 0.15;
        console.log(`Цена после скидки по общей стоимости: ${operatedSum} руб.`);
    }

    if (promo === 'METHED') {
        operatedSum = operatedSum * 0.9;
        console.log(`Цена после скидки по промокоду "METHED": ${operatedSum} руб.`);
    } else if (promo === 'G3H2Z1' && operatedSum > 2000) {
        operatedSum -= 500;
        console.log(`Цена после скидки по промокоду "G3H2Z1": ${operatedSum} руб.`);
    }

    console.log(`Итоговая цена с учетом ваших скидок: ${operatedSum} руб.`);

};

calculate(40000, 15, 'G3H2Z1');
