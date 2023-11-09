

const FooterItem = (props) => {
  const {text, isLowercaseText} = props;
  
    let textToRender;

    if(isLowercaseText){
        textToRender = text.toLowerCase();
    }else{
       textToRender = text;
    }
    return (
        <div>{ textToRender }</div>
    )
}

export default FooterItem;