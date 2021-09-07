import {
    loadFradulentTransactions,
    loadFradulentTransactionsSuccess,
    loadFradulentTransactionsError
} from "./transaction-analyser";
import Services from "../../services"; 

export const getFradulentTransactions = () => {
    return function getAllFradulentTransactions(dispatch) {
        dispatch(loadFradulentTransactions());
        return Services.APICallConfig.callAPIService(
            "LOAD_FRADULENT_TRANS"
        )
        .then((response) => {
            dispatch(loadFradulentTransactionsSuccess(response));
        })
        .catch((error) => {
            console.log("error response", error);
            dispatch(loadFradulentTransactionsError(error))
        })
    }
}