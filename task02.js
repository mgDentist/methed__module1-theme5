const normalizeString = (userString) => {
    const stringInProcess = userString;
    const trimmedString = stringInProcess.trimStart();
    const firstSymbol = trimmedString[0].toUpperCase();
    const remainingString = trimmedString.slice(1).toLowerCase();
    const normalizedString = firstSymbol + remainingString;
    const stringToshow = normalizedString;
    console.log(stringToshow);
};

normalizeString(' прИвЕт МиР !');
