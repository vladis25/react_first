import { useState, useEffect } from 'react';

import QueryLoader from '../QueryLoadaer';
import UserCard from '../UserCard/UserCard';

import styles from './coctails.module.css'

const Coctails = () => {
    const [drinks, setDrinks] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [fetchError, setFetchError] = useState(null);

    useEffect(function() {
        setFetching(true);
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
         .then(response => response.json())
            .then(data => {
                const drinksArray = data.drinks || [];
                setDrinks(drinksArray);
                setFetching(false);
            })
        .catch(err => {
            console.log('err => ', err)
            setFetching(false)
            setFetchError(err)
        })
    }, [])
    return (
        <>
            <div className={styles['common']}>Drinks</div>

            <QueryLoader fetching={fetching} error={fetchError}>
                {drinks.map((drink) => {
                const { strDrink, strDrinkThumb, idDrink} = drink;
                    return (
                        <UserCard
                            key={idDrink}
                            name={strDrink}
                            img={strDrinkThumb}
                            id={idDrink}
                        />
                    );
                })}
            </QueryLoader>
        </> 
    );
}

export default Coctails;