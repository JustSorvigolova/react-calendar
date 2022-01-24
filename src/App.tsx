import React, {FC, useEffect} from 'react';
import './App.css';
import AppRouter from "./component/AppRouter";
import {Layout} from "antd";
import Navbar from "./component/Navbar";
import {useACtions} from "./useTypedSelector";
import {Iuser} from "./store/reducer/auth/Iuser";


let App: FC =()=> {
    const {setUser, setIsAuth} = useACtions()
    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as Iuser)
            setIsAuth(true);
        }
    }, [])
  return (
    <Layout>
      <Navbar/>
      <Layout.Content>
        <AppRouter/>
      </Layout.Content>
    </Layout>
  );
}

export default App;
