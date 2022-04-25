import { getCurrency_API, convertMoney } from "../../api/getCurrency"

const LOADER = "LOADER"
const SET_VALUE = "SET-VALUE"
const ADD_COUNTER = "ADD-COUNTER"
const SET_CONVERSION = "SET-CONVERSION"
const SET_NAME = "SET-NAME"
const ONE_CONVERT = "ONE-CONVERT"

const initState = {
    currency: {
        name: '',
        fullName: '',
    },
    toCurrency: {
        name: '',
        fullName: '',
    },
    interest: 29,
    loader: false,
    counterArray: [],
    UHA_USD: {
        loader: true,
        current: ''
    },
    UHA_EUR: {
        loader: true,
        current: ''
    }
}

const MoneyConversion = (state = initState, action) => {

    switch (action.type) {

        case LOADER:
            return {
                ...state,
                loader: action.loader
            }

        case SET_VALUE:
            return {
                ...state,
                currency: {
                    ...state.currency,
                    value: action.value
                },
                toCurrency: {
                    ...state.toCurrency,
                    value: action.toValue
                }
            }

        case ADD_COUNTER:
            return {
                ...state,
                counterArray: action.array

            }

        case SET_CONVERSION: {
            return {
                ...state,
                interest: action.interest
            }
        }

        case SET_NAME:
            if (action.run === 'with') {
                return {
                    ...state,
                    currency: {
                        name: action.name,
                        fullName: action.fullName
                    }
                }
            }
            else if (action.run === 'to') {
                return {
                    ...state,
                    toCurrency: {
                        name: action.name,
                        fullName: action.fullName
                    }
                }
            }
            else if (action.run === 'start') {
                let fullName = state.counterArray.find(item => item.id === action.toValue);
                return {
                    ...state,
                    currency: {
                        name: action.toValue,
                        fullName: fullName.currencyName
                    },
                    toCurrency: {
                        name: action.name,
                        fullName: action.fullName
                    }
                }
            }
            else {
                return {
                    ...state,
                    currency: {
                        name: state.toCurrency.name,
                        fullName: state.toCurrency.fullName
                    },
                    toCurrency: {
                        name: state.currency.name,
                        fullName: state.currency.fullName
                    }
                }
            }

        case ONE_CONVERT: {
            if (action.currencyMoney === 'USD')
                return {
                    ...state,
                    UHA_USD: {
                        ...state,
                        current: action.currency,
                        loader: false
                    }
                }
            else {
                return {
                    ...state,
                    UHA_EUR: {
                        ...state,
                        current: action.currency,
                        loader: false
                    }
                }
            }
        }
        default:
            return state
    }
}

export default MoneyConversion

const loader = (loader) => ({ type: LOADER, loader })
const addCounter = (array) => ({ type: ADD_COUNTER, array })
const setConversion = (interest) => ({ type: SET_CONVERSION, interest })
const setOneConvert = (currency, currencyMoney) => ({ type: ONE_CONVERT, currency, currencyMoney })




export const setValue_AC = (value) => ({ type: SET_VALUE, value: value[0], toValue: value[1] })
export const setName_AC = (name, run, toValue, fullName) => ({ type: SET_NAME, name, run, toValue, fullName })

export const getCurrency = () => {
    return (dispatch) => {
        dispatch(loader(true))
        getCurrency_API().then((res) => {
            dispatch(addCounter(Object.keys(res).map((key) => res[key])))
        })
            .then(() => {
                dispatch(setName("USD", "start", "UAH"));
                dispatch(setOneConvert_AC("UAH", "USD"))
                dispatch(setOneConvert_AC("UAH", "EUR"))
            })
    }
}

export const setName = (value, run, toValue) => {
    return (dispatch, state) => {
        dispatch(loader(true))
        let fullName = state().MoneyConversionReducer.counterArray.find(item => item.id === value);
        convertMoney(toValue, value).then(res => {
            dispatch(setName_AC(value, run, toValue, fullName.currencyName))
            dispatch(setConversion(res))
            dispatch(loader(false))
        })
    }
}


const setOneConvert_AC = (value, toValue) => {
    return (dispatch) => {
        convertMoney(toValue, value).then(res => {
            dispatch(setOneConvert(res, toValue))
        })
    }
}
