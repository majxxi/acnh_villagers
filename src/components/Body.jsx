import React from 'react';
// import { Query } from 'react-apollo';
// import gql from "graphql-tag";

import { Container, Grid, makeStyles } from '@material-ui/core';
import Table from './Table';
import SearchBar from './SearchBar';

const useStyles = makeStyles(() => ({
	root: {

	},
}));

function Body(){
  // const classes = useStyles();
  
  return (
    // <Table />
    <SearchBar />
  )


};

export default Body;