import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { RootState} from "./store";
import {bindActionCreators} from "redux";
import {allActionsCreators} from "./store/reducer/action-creators-all";

export  const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector

export const  useACtions = () =>{
    const dispatch = useDispatch()
    return bindActionCreators(allActionsCreators, dispatch)
}