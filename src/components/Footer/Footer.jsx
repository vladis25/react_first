import FooterItem from "../FooterItem";
import './footer.css'


const Footer = () => {

    return (
    <footer>
        <div className="footer">
            <FooterItem text="Зворотній зв`язок" isLowercaseText={true}/>
            <FooterItem text="Про Нас" isLowercaseText={true}/>
            <FooterItem text="Загальні питання" isLowercaseText={true}/>
            <FooterItem text="Політика конфіденційності" isLowercaseText={true}/>
        </div>
    </footer>
    )
}

export default Footer;