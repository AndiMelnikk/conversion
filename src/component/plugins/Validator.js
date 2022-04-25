export const NumberType = (value, prev = 1) => {
    let number = value === "" ? "" : value;
    return isNaN(number) ? prev : number
}