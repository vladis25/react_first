import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserCard from "../UserCard";
import { HOME_PATH } from "../../constants/routes-links";
import Button from "../Button";

const UserPage = () => {

  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigator = useNavigate();

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => 
      response.json())
    .then(resp => setUser(resp))
    .catch(err => {
      setError(err);
      setLoading(false)
    })

  }, []);
  
    console.log(id)
    console.log(user)
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  //       if (!response.ok) {
  //         throw new Error("User not found");
  //       }
  //       const userData = await response.json();
  //       setUser(userData);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   };

  //   fetchUser();
  // }, [id]);
  // console.log(user)

  // if (loading) {
  //   return <div>Інтернет не дуже...</div>;
  // }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <Button variant="error" onClick={() => navigator(HOME_PATH)}>
          Go Home
        </Button>
      </div>
    );
  }

  if (!user) {
    return (
      <div>
        <p>User not found</p>
        <Button variant="secondary" onClick={() => navigator(HOME_PATH)}>
          Go Home
        </Button>
      </div>
    );
  }

  const { name, username, email, id:userId } = user;

  return (
    <UserCard 
      key={userId} 
      id={userId} 
      name={name} 
      surname={username} 
      email={email} 
    />
  );
};

export default UserPage;
