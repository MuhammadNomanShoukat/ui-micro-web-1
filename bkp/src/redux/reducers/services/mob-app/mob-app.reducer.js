import { bannerData, subServicesDesc, greatProduct } from "../../../../pages-data/mob-app.data";
// import { GET_SERVICES, GET_WORK_HISTORY, GET_CODE_LEVEL, OUR_STRATEGOIES } from "../../constants";

const INITIAL_STATE = []

  const MobileAppReducer = (state=INITIAL_STATE, actions) => {
    switch(actions.type){
        case "GET_BANNER":
            return({
                ...state,
                bannerData
            })
            break;
        case "GET_SERVICES":
            return({
                ...state,
                subServicesDesc
            })
                break;
        case "GET_GREATP_RODUCT":
            return({
                ...state,
                greatProduct
            })
                break;
        default:
            return state;
    }
}

export default MobileAppReducer;
