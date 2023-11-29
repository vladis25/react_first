import './input.css';

const Input = (props) => {
	
	const { value, type, placeholder, label, name,  onChangeFunction } = props;
	
	return (
		<label>
			{ label }
			<input 
			type={type || "text"}
			name={name}
			placeholder={placeholder}
			onChange={(event) => onChangeFunction(event.target.value)}
			value={value} />
		</label>
		
	)
}

export default Input;