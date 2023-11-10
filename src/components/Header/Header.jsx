import NavigationItem from "../NavigationItem";
import './header.css'

const Header = () => {

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
            {navElements.map((element) => {
                return (
                    <NavigationItem
                        key = {element.text}
                        text = {element.text}
                        isUpperCaseText = {element.isUpperCaseText}
                        description = {element.description}
                    />
                )
            })}
        </div>
    </header>
    )
}

export default Header;