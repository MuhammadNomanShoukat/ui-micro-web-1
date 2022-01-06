import { GET_SERVICES, GET_WORK_HISTORY, GET_CODE_LEVEL, OUR_STRATEGOIES } from "../../constants";


export const GetBanner = (data) => {
    return({
        type: "GET_BANNER",
        payload: data
    });
}

export const GetServies = (data) => {
    return({
        type: "GET_SERVICES",
        payload: data
    });
}

export const GetGreatProduct = (data) => {
    return({
        type: "GET_GREAT_PRODUCT",
        payload: data
    });
}