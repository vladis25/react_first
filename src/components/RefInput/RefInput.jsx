import { useRef } from "react";
import { useParams } from "react-router-dom";

const RefInput = () => {

  const params = useParams(null);
  console.log(params);

  const inputRef =  useRef(null);
  const textRef = useRef('some text')

  console.log(textRef.current)

  // useEffect(() => {
  //   console.log(inputRef.current)
  // },[])
  return (
    <label>
      inputRef
      <input ref={inputRef} id="inputRef" type="text" /> 
    </label>
  )
};

export default RefInput;
