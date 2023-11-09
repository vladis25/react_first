import FooterItem from "../FooterItem";
import './footer.css'


const Footer = () => {

    return (
    <div className="footer">
        <FooterItem text="First elem" isLowercaseText={true}/>
        <FooterItem text="Second elem" isLowercaseText={false}/>
        <FooterItem text="Thirst elem" isLowercaseText={true}/>
    </div>
    )
}

export default Footer;