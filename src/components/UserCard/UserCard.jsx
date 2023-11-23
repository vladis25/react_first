import Button from '../Button';

import './userCard.css'

const UserCard = ({ 
	name, 
	surname, 
	email, 
	id, 
	onClickDeleteBtn,
	onClickSaveBtn,
	onClickUpdateBtn}) => {

	return (
		<div className='common-user-card'>
			<div>{ `Name : ${name}` }</div>
			<div>{ `Surname : ${surname}` }</div>
			<div>{ `Email : ${email}` }</div>
			<Button variant='primary' onClick={() => {onClickUpdateBtn(id)}}>update user</Button>
			<Button variant='secondary' onClick={() => {onClickSaveBtn(id)}}>save user</Button>
			<Button variant='error' onClick={() => {onClickDeleteBtn(id)}}>delete user</Button>
		</div>
	)
};

export default UserCard;