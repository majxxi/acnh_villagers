import React, { useState, useEffect } from 'react';

import AcnhApi from '../Api';
import SearchCard from './SearchCard';

function SearchList({search}){
  const [villagers, setVillagers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function searchVillagersOnRender() {
    async function searchVillager(search){
      setIsLoading(true);
      try {
        const response = await AcnhApi.getVillager(search); //search should be here
        setVillagers(Object.entries(response));
        setIsLoading(false);
      } catch (error) {
        setVillagers([]);
        setIsLoading(false);
      }
    };
    searchVillager(search);
  }, [search]);
  

  return (
    <div>
      {villagers.map(villager => (
        <SearchCard 
          name={villager[0]}
          data={villager[1]}
        />
      ))}
    </div>
  )
}

export default SearchList;