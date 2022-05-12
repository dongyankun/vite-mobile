import Axios, { AxiosResponse } from "axios";
import { Toast } from "vant";
import Cookies from "js-cookie";
import qs from "qs";

const noTokenIdAjax = Axios.create({});
const dealWarn = (responseData: any) => {
  Toast({
    message: responseData.error || responseData.message || responseData.info,
    type: "fail"
  });
  return Promise.reject(responseData);
};

const dealCode = (response: any) => {
  const { code } = response.data;
  const { success } = response.data;
  const { status } = response.data;

  if (status !== 200 && status !== 201 && status === false) {
    const responseData = response.data;
    return dealWarn(responseData);
  }

  return response;
};

noTokenIdAjax.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

noTokenIdAjax.interceptors.response.use(
  (response) => {
    return dealCode(response);
  },
  (error) => {
    const message =
      error &&
      error.response &&
      error.response.data &&
      (error.response.data.message ||
        error.response.data.Message ||
        error.response.data.errorMessage);
    Toast({
      duration: 2000,
      message: message || "接口或网络异常",
      type: "fail"
    });
    return Promise.reject(error);
  }
);

export default noTokenIdAjax;

export const ajaxGetData = (dataParams: any) => {
  return noTokenIdAjax.get(dataParams.url, { params: dataParams.params });
};
export const ajaxPostFormData = (dataParams: any) => {
  return noTokenIdAjax({
    method: "post",
    url: dataParams.url,
    data: dataParams.params,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};
export const ajaxDeleteData = (dataParams: any) => {
  return noTokenIdAjax.delete(dataParams.url, { params: dataParams.params });
};
export const ajaxDeleteJson = (dataParams: any) => {
  return noTokenIdAjax({
    url: dataParams.url,
    method: "delete",
    data: dataParams.params
  });
};
export const ajaxPostData = (dataParams: any) => {
  return noTokenIdAjax.post(dataParams.url, qs.stringify(dataParams.params));
};
export const ajaxPostJson = (dataParams: any) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  };
  return noTokenIdAjax.post(dataParams.url, dataParams.params, axiosConfig);
};
export const ajaxPutData = (dataParams: any) => {
  return noTokenIdAjax.put(dataParams.url, qs.stringify(dataParams.params));
};
export const ajaxPutJson = (dataParams: any) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  };
  return noTokenIdAjax.put(dataParams.url, dataParams.params, axiosConfig);
};
