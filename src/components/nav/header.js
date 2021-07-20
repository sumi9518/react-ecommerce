import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';   //curly braces used to destructure as link could be dependent

const { SubMenu, Item } = Menu;                                      // Menu.Submenu, menu.item

const Header = () => {                                          //Funtional component

    const [current, setCurrent] = useState("Home");            //This way setting in function component & class component is different

    const handleClick = (e) => {                                   //on click event e will be catched in function
        setCurrent(e.key);
    };

    return (

        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" >
            <Item key="Home" icon={<HomeOutlined />} >
                <Link to="/">Home</Link>
            </Item>
            <SubMenu key="subMenu" icon={<SettingOutlined />} title="User Name">
                <Item key="7">Option 7</Item>
                <Item key="8">Option 8</Item>
            </SubMenu>

            <Item key="Registered" icon={<UserAddOutlined />} className="float-right">
                <Link to="/Register">Registered</Link>
            </Item>

            <Item key="Login" icon={<LoginOutlined />} className="float-right" >
                <Link to="/Login">Login</Link>
            </Item>


        </Menu>

    );
};
export default Header;