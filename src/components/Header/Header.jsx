import NavigationItem from "../NavigationItem";
import './header.css'

const Header = () => {

    return (
    <div className="header">
        <NavigationItem text="First elem" isUppercaseText={true}/>
        <NavigationItem text="Second elem" isUppercaseText={false}/>
        <NavigationItem text="Thirst elem" isUppercaseText={false}/>
        <NavigationItem text="Fourth elem" isUppercaseText={true}/>

    </div>
    )
}

export default Header;