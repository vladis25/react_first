

const FooterItem = (props) => {
  const {text, isLowercaseText} = props;
  
    let textToRender;

    isLowercaseText ? textToRender = text.toLowerCase() : textToRender = text;
    
    return (
        <div>{ textToRender }</div>
    )
}

export default FooterItem;