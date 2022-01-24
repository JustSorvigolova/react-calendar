import {AuthActionCreators} from "./auth/ActionsCreators";
import {EventActionsCreatorss} from "./event/EventActionCreators";

export const allActionsCreators ={
    ...AuthActionCreators, ...EventActionsCreatorss
}