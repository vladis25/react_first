import { useContext } from "react";
import { UsersContext } from "../../App";
import { Link } from "react-router-dom"

import './header.css'
import { HOME_PATH, PRODUCTS_PATH, REF_PATH, REGISTRATION_PATH, SINGLE_USER_PATH } from "../../constants/routes-links";

const Header = () => {

  const { userCount } = useContext(UsersContext);

    const navElements = [
        {
            text: 'First',
            isUpperCaseText: true,
            description: 'first desc'
        },
        {
            text: 'Second',
            isUpperCaseText: true,
            description: 'second desc'
        },
        {
            text: 'Third',
            isUpperCaseText: true,
            description: 'third desc'
        },
        {   text: 'Samsung',
            isUpperCaseText: true,
        }
    ]

    return (
    <header>
        <div className="header">
        <Link to={HOME_PATH}>Main</Link>
        <Link to={PRODUCTS_PATH}>Products</Link>
        <Link to={HOME_PATH}>HomePage</Link>
        <Link to={REF_PATH}>Ref</Link>
        <Link to={SINGLE_USER_PATH}>User</Link>
        <Link to={REGISTRATION_PATH}>Registration</Link>        
          
          {/* {navElements.map((element) => {
                return (
                    <NavigationItem
                        key = {element.text}
                        text = {element.text}
                        isUpperCaseText = {element.isUpperCaseText}
                        description = {element.description}
                    />
                    )
                })}
                <div>Longest Name User: {userCount}</div> */}
        </div>
    </header>
    )
}

export default Header;