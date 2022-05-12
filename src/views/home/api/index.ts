import {
  ajaxGetData,
  ajaxPostData,
  ajaxPutData,
  ajaxDeleteData,
  ajaxPutJson,
  ajaxDeleteJson,
  ajaxPostJson
} from "../../../utils/axios";

const { VITE_APP_NODE_ENV } = import.meta.env;

const homeApi = {
  getTypeList(params) {
    return ["1", "2", "3", "4"];
  }
};
export default homeApi;
