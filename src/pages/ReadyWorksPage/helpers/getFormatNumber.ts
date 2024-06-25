export function addSpacesToHundredths(num: number): string {
    const numStr = num.toFixed(2);
    const parts = numStr.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];

    let result = '';
    for (let i = 0; i < integerPart.length; i++) {
        result += integerPart[i];
        if (
            (integerPart.length - i - 1) % 3 === 0 &&
            i !== integerPart.length - 1
        ) {
            result += ' ';
        }
    }

    // return result + '.' + decimalPart;
    return result;
}
