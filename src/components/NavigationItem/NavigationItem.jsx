import './navigationItem.css';

const NavigationItem = (props) => {

    const { text, isUppercaseText, description, shouldRenderDescription } = props;

    // let textToRender;

    // isUppercaseText ? textToRender = text.toUpperCase() : textToRender = text;
    
    const descriptionSection = (
        <div className="description">{description}</div>

    )

    return (
        <div className="common">
            <div className="text">
                { isUppercaseText ? text.toUpperCase() : text }
            </div>
            { shouldRenderDescription && descriptionSection }
        </div>
    )
}

export default NavigationItem;