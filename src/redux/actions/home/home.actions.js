import { GET_SERVICES, GET_WORK_HISTORY, GET_CODE_LEVEL, OUR_STRATEGOIES } from "../../constants";
import { services_list, our_strategies, code_level, work_history, clients_images, clients_desc, copyright } from "../../../pages/home.data";


export const GetAllServices = (data=services_list) => {
    return({
        type: GET_SERVICES,
        payload: data
    });
}

export const GetWorkHistory = (data=work_history) => {
    return({
        type: GET_WORK_HISTORY,
        payload: data
    });
}

export const GetCodeLevel = (data=code_level) => {
    return({
        type: GET_CODE_LEVEL,
        payload: data
    });
}

export const GetOurStrategies = (data=our_strategies) => {
    return({
        type: OUR_STRATEGOIES,
        payload: data
    });
}

