import MoneyConversion, { setCurrency_AC } from "../redux/reducer/MoneyConversion"

it('Отриманна валют', () => {

    // 1. test date
    let action = setCurrency_AC('PLN')
    let state = {
        nameCurrency: "USA",
        nameCurrencyConversion: "UAH"
    }

    // 2. action
    let newCurrency = MoneyConversion(state, action)

    // 3. expectation
    expect(newCurrency.nameCurrency).toBe('PLN')
})
