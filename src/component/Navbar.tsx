import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useACtions, useTypedSelector} from "../useTypedSelector";
import {useNavigate} from "react-router-dom";



const Navbar: FC = () => {
    const router = useNavigate()
    const {logOut} = useACtions()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    return(
        <Layout.Header>
            <Row justify={"end"}>
                { isAuth
                    ?
                    <div>
                <h3 style={{color:"white"}}>{user.username}</h3>
                    <Menu theme="dark" mode="horizontal" selectable={false}>

                        <Menu.Item onClick={logOut} key={1}>Log out</Menu.Item>
                    </Menu>
                    </div>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={()=> router('/')} key={1}>Логин</Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};



export default Navbar;