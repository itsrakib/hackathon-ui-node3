import {
    LOAD_FRADULENT_TRANS_STARTED,
    LOAD_FRADULENT_TRANS_SUCCESS,
    LOAD_FRADULENT_TRANS_ERROR
} from "../actions/transaction-analyser/type";

const defaultState = {
    FraudTransactionList: [],
    isLoading: false,
    isError: false,
    error: "",
  };


const TransactionAnalyserReducer = (
    state = JSON.parse(JSON.stringify(defaultState)),
    action 
) => {

    switch (action.type) {
       case LOAD_FRADULENT_TRANS_STARTED:
           return {
            ...state,
            isLoading: true,  
           }
        case LOAD_FRADULENT_TRANS_SUCCESS:
            return {
                 ...state,
                 isLoading: false, 
                 FraudTransactionList : action.payload,
                }
        case LOAD_FRADULENT_TRANS_SUCCESS:
            return {
                 ...state,
                 isLoading: false, 
                 isError: true,
                 error: action.payload,
                 FraudTransactionList : [],
                }
       default:
           return state;
    }

}

export default TransactionAnalyserReducer;