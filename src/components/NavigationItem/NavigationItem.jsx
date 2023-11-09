

const NavigationItem = (props) => {

    const { text, isUppercaseText } = props;

    let textToRender;

    if(isUppercaseText){
        textToRender = text.toUpperCase();
    }else{
       textToRender = text;
    }
    return (
        <div>{ textToRender }</div>
    )
}

export default NavigationItem;