import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listPlaces } from './graphql/queries';

const ListPlaces = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetchPlaces();
    }, []);

    const fetchPlaces = async () => {
        try {
            const placesData = await API.graphql(graphqlOperation(listPlaces));
            const placesItems = placesData.data.listPlaces.items;

            setPlaces(placesItems);
        } catch (error) {
            console.log(`Error Fetching Places `, error);
        }
        // setPlaces([
        //     {
        //         id: '1',
        //         imgUrl: 'https://images.pexels.com/photos/3254729/pexels-photo-3254729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        //         title: 'Madrid',
        //         description: 'Very sunny and beautiful city',
        //     },
        //     {
        //         id: '2',
        //         imgUrl: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        //         title: 'Paris',
        //         description: 'Rainy and nice place',
        //     },
        // ]);
    };

    return (
        <div className='list-places'>
            {places.map((place) => (
               <p key={place.id}>{place.title}</p> 
            ))}
        </div>
    )
}

export default ListPlaces;