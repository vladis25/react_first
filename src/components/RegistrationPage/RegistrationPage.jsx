import { useState, useContext } from "react";
import Input from "../Input";
import UserCard from "../UserCard/UserCard";
import Button from "../Button"
import { UsersContext } from "../../App";

import { v4 as uuidv4 } from 'uuid';

import styles from "./registrationPage.module.css";

const DEFAULT_USERS = [
  {
      name: 'John',
      surname: 'Nollan',
      email: 'nollan@gmail.com',
	    id: uuidv4(),
  },
  {
      name: 'Nick',
      surname: 'Norton',
      email: 'norton@gmail.com',
	    id: uuidv4(),
  },
  {
      name: 'Rick',
      surname: 'Johnson',
      email: 'johnson.gmail.com',
	    id: uuidv4(),
  },
  {
      name: 'Erik',
      surname: 'Kingston',
      email: 'kingston.gmail.com',
	    id: uuidv4(),
  },
]


const RegistrationPage = () => {

  const {userCount, setUserCount } = useContext(UsersContext);

  const [users, setUsers] = useState(DEFAULT_USERS);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState();
  
  setUserCount(users.length);

  console.log(userCount)
  
  
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  

  const onAddUser = () => {
    const user = {
      name,
      surname,
      email,
	    id: new uuidv4(),
    };

    setUsers([...users, user]);
    setName("");
    setSurname("");
    setEmail("");
  };


  const onGetName = (value) => {
    setName(value);
  };

  const onGetSurname = (value) => {
    setSurname(value);
  };

  const onGetEmail = (value) => {
    setEmail(value);
  };

  const onDeleteUserHandler = (id) => {
    console.log(id)
    setUsers(users.filter((user) => user.id !== id));
  
  }

  const onSaveUserHandler = (id) => {
    const currentUser = users.filter((user) => user.id === id)[0];
    setName(currentUser.name);
    setSurname(currentUser.surname);
    setEmail(currentUser.email);
    console.log(currentUser)
  }
    const onUpdateUserHandler = () => {
    const updatedUsers = users.map((user) => {
      if (user.id === selectedUserId) {
        return {
          ...user,
          name,
          surname,
          email,
        };
      }
      return user;
    });

    setUsers(updatedUsers);
    setIsEditMode(false);
    clearInputs();
  };

  const clearInputs = () => {
    setName("");
    setSurname("");
    setEmail("");
    setIsEditMode(false);
    setSelectedUserId(null);
  };

  return (
    <div className={styles["common"]}>
      <div className={styles["left-side"]}>
        <Input
          label="Name: "
          placeholder="Enter Your Name"
          onChangeFunction={onGetName}
          value={name}
        />
        <Input
          label="Surname: "
          placeholder="Enter Your Surname"
          onChangeFunction={onGetSurname}
          value={surname}
        />
        <Input
          label="Email: "
          placeholder="Enter Your Email"
          onChangeFunction={onGetEmail}
          value={email}
        />
        {isEditMode ? (
          <Button type="button" onClick={onUpdateUserHandler} variant="green">
            Update User
          </Button>
        ) : (
          <Button type="button" onClick={onAddUser} variant="primary">
            Add User
          </Button>
        )}
        
      </div>
      <div className={styles["right-side"]}>
        <div className={styles["users-list"]}>
          {users.map((user, index) => {
            const { name, surname, email, id} = user;
            return (
              <UserCard
                key={index}
                name={name}
                surname={surname}
                email={email}
				        id={id}
                onClickDeleteBtn={onDeleteUserHandler}
                onClickSaveBtn={onSaveUserHandler}
                onClickUpdateBtn={onUpdateUserHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;