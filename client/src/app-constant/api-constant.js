//const baseURL = "http://158.176.168.112:5000";
//const baseURL = "http://localhost:5000";
//const testURL = "http://localhost:2010";
//const baseURL = "https://cma-edge-banking.ml";
//const baseURL = "http://edge-open-banking-api-ibm-cloud-edge-satellite.classic-cluster-satellite-6fb0b86391cd68c8282858623a1dddff-0000.upi.containers.appdomain.cloud"
//const baseURL = "http://edge-open-banking-api-ibm-cloud-edge-banking-app.appdev-cloudnativ-915719-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud"
//const baseURL = "http://edge-open-api-fs-cloud-app-test-open-banking.mgmt-pot01-cluster-1fa025a294811d2b43b68d6ffd4c8b58-i000.us-east.containers.appdomain.cloud"
//const baseURL = "http://158.176.180.100:5000";
  //const baseURL = "http://edge-api-edge-open-banking-tcs.workshop-ocp46-four-bb0dafd08526894d1a8ae848e8bd8099-0000.eu-de.containers.appdomain.cloud"
const baseURL = "https://edge-api-edge-open-banking-tcs.workshop-ocp46-four-bb0dafd08526894d1a8ae848e8bd8099-0000.eu-de.containers.appdomain.cloud"

  const apiConstant = {
  headerOptions: {
    OptionContentTypeJSON: {
      headers: { "Content-Type": "application/json" },
    },
    OptionAccept: {
      headers: { Accept: "application/json" },
    },
    OptionContentTypeFormData: {
      headers: { "Content-Type": "multipart/form-data" },
    },
  },
  endPoint: {
    SIGN_IN: {
      url: `${baseURL}/login`,
      //url: `http://localhost:2010/login`,
      type: "post",
      //headerType: "OptionContentTypeJSON",
    },
    LOAD_OPEN_YOUR_ACCOUNT: {
      //url: `http://localhost:2010/loadAccountConfigurationFront`,
      url: `${baseURL}/fetch_account_form_details`,
      type: "post",
      // headerType: "OptionContentTypeJSONToken",
    },
    OPEN_YOUR_ACCOUNT: {
      url: `${baseURL}/create_bank_account`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_CREATE_YOUR_ACCOUNT_CONFIG: {
      //url: `http://localhost:2010/loadAccountConfiguration`,
      url: `${baseURL}/fetch_config_obj`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    SAVE_CREATE_YOUR_ACCOUNT_CONFIG: {
      url: `${baseURL}/update_data_to_config_obj`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_SELECT_MASTER_CONFIG: {
      //url: `http://localhost:2010/loadSelectMaster`,
      url: `${baseURL}/fetch_config_obj`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    SAVE_SELECT_MASTER_CONFIG: {
      //url: `http://localhost:2010/saveSelectMasterConfig`,
      url: `${baseURL}/update_data_to_config_obj`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    EMAIL_VERFICATION: {
      //url: `http://localhost:2010/emailVerification`,
      url: `${baseURL}/request_otp`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    OTP_VERFICATION: {
      //url: `http://localhost:2010/otpVerification`,
      url: `${baseURL}/validate_otp`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_BAR_DATA: {
      url: `${baseURL}/get_processed_indicator_count`,
      //url: `${testURL}/syncData`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_DORMAT_ACCOUNT_CONFIG: {
      //url: `http://localhost:2010/loadAccountConfiguration`,
      url: `${baseURL}/fetch_dormant_config_obj`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    SAVE_DORMAT_ACCOUNT_CONFIG: {
      url: `${baseURL}/update_dormant_config_obj_data`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_DORMAT_ACCOUNT: {
      //url: `http://localhost:2010/loadAccountConfigurationFront`,
      url: `${baseURL}/fetch_dormant_account_form`,
      type: "post",
      // headerType: "OptionContentTypeJSONToken",
    },
    SAVE_DORMAT_ACCOUNT: {
      url: `${baseURL}/create_dormant_account_request`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_DORMANT_BAR_DATA: {
      url: `${baseURL}/get_dormant_processed_count`,
      //url: `${testURL}/syncData`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_CHEQUEBOOK_CONFIG: {
      //url: `http://localhost:2010/loadAccountConfiguration`,
      url: `${baseURL}/fetch_cheque_book_config`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    SAVE_CHEQUEBOOK_CONFIG: {
      url: `${baseURL}/update_cheque_book_config`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_CHEQUE_BOOK: {
      //url: `http://localhost:2010/loadAccountConfigurationFront`,
      url: `${baseURL}/fetch_cheque_book_form`,
      type: "post",
      // headerType: "OptionContentTypeJSONToken",
    },
    SAVE_CHEQUE_BOOK: {
      url: `${baseURL}/create_cheque_book_request`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_CHEQUEBOOK_BAR_DATA: {
      url: `${baseURL}/get_cheque_processed_count`,
      //url: `${testURL}/syncData`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_CREDIT_CARD_CONFIG: {
      //url: `http://localhost:2010/loadAccountConfiguration`,
      url: `${baseURL}/fetch_credit_card_config`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    SAVE_CREDIT_CARD_CONFIG: {
      url: `${baseURL}/update_credit_card_config`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_CREDIT_CARD: {
      //url: `http://localhost:2010/loadAccountConfigurationFront`,
      url: `${baseURL}/fetch_credit_card_form`,
      type: "post",
      // headerType: "OptionContentTypeJSONToken",
    },
    SAVE_CREDIT_CARD: {
      url: `${baseURL}/create_credit_card_request`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_CREDIT_CARD_BAR_DATA: {
      url: `${baseURL}/get_credit_processed_count`,
      //url: `${testURL}/syncData`,
      type: "post",
      //headerType: "OptionContentTypeJSONToken",
    },
    LOAD_FRADULENT_TRANS: {
      url: `${baseURL}/get_fraud_transactions`,
      //url: `${testURL}/syncData`,
      type: "get",
      //headerType: "OptionContentTypeJSONToken",
    },
  },
};
module.exports = apiConstant;
