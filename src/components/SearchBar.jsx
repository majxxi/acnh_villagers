import React, { useState, useCallback } from 'react';

import { debounce } from 'lodash';

import { makeStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import SearchList from './SearchList';

function SearchBar(){
  const [search, setSearch] = useState('');

  const delayedQuery = useCallback(debounce(q => setSearch(q), 1000, {trailing:true}), []);

  function handleChange(event) {
    delayedQuery(event.target.value);
  }

  return (
    <div>
      <InputBase 
        placeholder="Search for a villager..."
        value={search}
        onChange={handleChange}
      />
      <SearchList search={search} />
    </div>
  )

}

export default SearchBar;