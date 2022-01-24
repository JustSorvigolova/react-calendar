import {AuthactionEnam, SetAuthAction, SetErrorAction, SetLoadingAction, SetUserAction} from "./types";
import {Iuser} from "./Iuser";
import {AppDispatch} from "../../index";
import userService from "../../../api/userService";

export const AuthActionCreators = {
    setUser: (user: Iuser): SetUserAction => ({type: AuthactionEnam.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthactionEnam.SET_AUTH, payload: auth}),
    setError: (payload: string): SetErrorAction => ({type: AuthactionEnam.SET_ERROR, payload}),
    setIsLoading: (payload: boolean): SetLoadingAction => ({type: AuthactionEnam.SET_LOADING, payload}),

    login: (username: string, password: string) => async (dispatch: AppDispatch) =>{
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await userService.getUsers()
                const mockUser= response.data.find(user => user.username === username && user.password === password);
                if(mockUser){
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUser.username);
                    dispatch(AuthActionCreators.setUser(mockUser))
                    dispatch(AuthActionCreators.setIsAuth(true))
                }else {
                    dispatch(AuthActionCreators.setError('Login or password is Wrong'))
                }
                dispatch(AuthActionCreators.setIsLoading(false));
            }, 1000)

        }catch (e) {
                dispatch(AuthActionCreators.setError("Error have been on login"))
        }
    },
    logOut: () => async (dispatch: AppDispatch) =>{
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setUser({} as Iuser));
            dispatch(AuthActionCreators.setIsAuth(false))

    },

}