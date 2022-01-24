import {Iuser} from "./Iuser";

export interface AuthState {
    isAuth: boolean | any;
    user: Iuser | any;
    IsLoading: boolean | any;
    error: string | any;
}
export enum AuthactionEnam {
SET_AUTH = "SET_AUTH",
SET_ERROR = "SET_AUTH",
SET_USER = "SET_AUTH",
SET_LOADING = "SET_AUTH"
}

export interface SetAuthAction {
    type:AuthactionEnam.SET_AUTH;
    payload: boolean;
}
export interface SetErrorAction {
    type:AuthactionEnam.SET_ERROR;
    payload: string;
}
export interface SetUserAction {
    type:AuthactionEnam.SET_USER;
    payload: Iuser;
}
export interface SetLoadingAction {
    type:AuthactionEnam.SET_LOADING;
    payload: boolean;
}

export type AuthAction= SetAuthAction |SetErrorAction|SetUserAction|SetLoadingAction