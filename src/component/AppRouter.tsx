import React from 'react';
import {Routes} from 'react-router-dom'
import {Route} from "react-router-dom";
import Login from "../pages/Login";
import Event from "../pages/Event";
import {useTypedSelector} from "../useTypedSelector";



const AppRouter = () => {
    let {isAuth} = useTypedSelector(state=> state.auth)
    return (
        isAuth ?
            <Routes>

                <Route key={'/'} path={'/main'} element={<Event/>}  />
                <Route path='*' element={<Event/>}/>
            </Routes>
            :
            <Routes>
                    <Route key={'/login'}  path={'/login'} element={<Login/>} />
                <Route path='*' element={<Login/>}/>
            </Routes>

    );

};

export default AppRouter;