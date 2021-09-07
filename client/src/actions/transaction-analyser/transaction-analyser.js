import {
    LOAD_FRADULENT_TRANS_STARTED,
    LOAD_FRADULENT_TRANS_SUCCESS, 
    LOAD_FRADULENT_TRANS_ERROR
} from "./type.js";


export const loadFradulentTransactions = () => {
    return {
      type: LOAD_FRADULENT_TRANS_STARTED,
    };
  };

  export const loadFradulentTransactionsSuccess = (result) => {
    return {
      type: LOAD_FRADULENT_TRANS_SUCCESS,
      payload: result
    };
  };

  export const loadFradulentTransactionsError = (error) => {
    return {
      type: LOAD_FRADULENT_TRANS_ERROR,
      payload: error
    };
  };