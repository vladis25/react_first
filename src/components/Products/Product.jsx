import { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';
// import BorderWrapper from '../BorderWrapper';
import QueryLoader from '../QueryLoadaer';

import styles from './product.module.css';

const Product = () => {

    const [users, setUsers] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [fetchError, setFetchError] = useState(null);

    useEffect(function() {
        setFetching(true);
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(resp => {
            console.log(resp)
            setUsers(resp)
            setFetching(false)
        })
        .catch(err => {
            console.log('err => ', err)
            setFetching(false)
            setFetchError(err)
        })
        
    }, [])
    
    return (
        <>
            <div className={styles['common']}>Product</div>

                <QueryLoader fetching={fetching} error={fetchError}>
                        {users.map((user) => {
                        const { name, username, email, id} = user;
                        return (
                            <UserCard
                                key={id}
                                name={name}
                                surname={username}
                                email={email}
                                id={id}
                            />
                        );
                    })}
            </QueryLoader>
            {/* <BorderWrapper showDefaultText={false}>
                <div>Hello</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            </BorderWrapper> */}
       </> 
    );
}

export default Product;