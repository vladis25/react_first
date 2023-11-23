import { useContext } from "react";

import FooterItem from "../FooterItem";
import { UsersContext } from "../../App";
import './footer.css'


const Footer = () => {
  const { userCount } = useContext(UsersContext);

    return (
    <footer>
        <div className="footer">
            <FooterItem text="Зворотній зв`язок" isLowercaseText={true}/>
            <FooterItem text="Про Нас" isLowercaseText={true}/>
            <FooterItem text="Загальні питання" isLowercaseText={true}/>
            <FooterItem text="Політика конфіденційності" isLowercaseText={true}/>
        <div>UserCount: {userCount}</div>
        </div>
    </footer>
    )
}

export default Footer;