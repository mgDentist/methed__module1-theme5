const reverseString = (userString) => {
    const stringInProcess = userString;
    const reversedString = stringInProcess.split('').reverse().join('');
    console.log(reversedString);
};

reverseString('Привет мир!');

//Проблема в том, что мы не знаем еще циклы, и методы массивов и рекурсию.
//Что бы не хардкодить я решил обратиться к методам массивов.