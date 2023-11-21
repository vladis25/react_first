import Button from '../Button';

import './userCard.css'

const UserCard = ({ name, surname, email, id, onClickDeleteBtn,onClickUpdateBtn}) => {

	return (
		<div className='common-user-card'>
			<div>{ `Name : ${name}` }</div>
			<div>{ `Surname : ${surname}` }</div>
			<div>{ `Email : ${email}` }</div>
			<Button variant='primary' onClick={() => {onClickDeleteBtn(id)}}>delete user</Button>
			<Button variant='secondary' onClick={() => {onClickUpdateBtn(id)}}>update user</Button>
		</div>
	)
};

export default UserCard;