import {AuthAction, AuthactionEnam, AuthState} from "./types";
import {Iuser} from "./Iuser";

const init: AuthState ={
   isAuth: false,
    error: '',
    IsLoading: false,
    user: {} as Iuser
}

export default function authReducer(state=init, action:AuthAction):AuthState {
        switch (action.type) {
            case AuthactionEnam.SET_AUTH:
                return {...state, isAuth: action.payload, IsLoading: false}
            case AuthactionEnam.SET_ERROR:
                return {...state, error: action.payload, IsLoading: false}
            case AuthactionEnam.SET_LOADING:
                return {...state, IsLoading:action.payload, }
            case AuthactionEnam.SET_USER:
                return {...state, user: action.payload}
            default:
                return state
        }
}