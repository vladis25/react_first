import { Link } from 'react-router-dom';
import Button from '../Button';

import './userCard.css'

const UserCard = ({ 
	name, 
	surname, 
	email,
	img, 
	id,
	onClickDeleteBtn,
	onClickSaveBtn,
	onClickUpdateBtn}) => {

	return (
		<Link to={`/user/${id}`}>
			<div className='common-user-card'>
				<div className='upper'>{ `${name}` }</div>
				<div className='upper'>{ `${surname}` }</div>
				<div className='upper'><img src={img} alt="" /></div>
				<div>{ `Email : ${email}` }</div>
				{/* <Button variant='primary' onClick={() => {onClickUpdateBtn(id)}}>update user</Button> */}
				<Button variant='secondary' onClick={() => {onClickSaveBtn(id)}}>save user</Button>
				<Button variant='error' onClick={() => {onClickDeleteBtn(id)}}>delete user</Button>
			</div>
		</Link>
	)
};

export default UserCard;