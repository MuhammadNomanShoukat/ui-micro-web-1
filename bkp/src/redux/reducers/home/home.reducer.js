import { services_list, work_history, code_level, our_strategies } from "../../../pages/home.data";
import { GET_SERVICES, GET_WORK_HISTORY, GET_CODE_LEVEL, OUR_STRATEGOIES } from "../../constants";

const INITIAL_STATE = []

  const HomeReducer = (state=INITIAL_STATE, actions) => {
    switch(actions.type){
        case GET_SERVICES:
            return({
                ...state,
                services_list
            })
            break;
        case GET_WORK_HISTORY:
            return({
                ...state,
                work_history
            })
                break;
        case GET_CODE_LEVEL:
            return({
                ...state,
                code_level
            })
                break;
        case OUR_STRATEGOIES:
            return({
                ...state,
                our_strategies
            })
                break;
        default:
            return state;
    }
}

export default HomeReducer;
