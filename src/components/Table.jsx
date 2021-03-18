import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import { Snackbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	header: {
		fontFamily: 'Mack-SemiboldItalic',
	}
}));

function Table(){
	const classes = useStyles();
	// const [rows, setRows] = useState([]);
	const [snackOpen, setSnackOpen] = useState(false);

	const rows = [
		{
			id: 18,
			name: 'Hazel',
			personality: 'Uchi',
			birthday: '08/30',
		}
	]
  const columns = [
		{ field: 'icon', headerName: ' ', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'personality', headerName: 'Personality', width: 150 },
    { field: 'birthday', headerName: 'Birthday', width: 105 },
    // { field: 'edit', headerName: 'Edit', width: 200,
		// 	renderCell: (params) => (
		// 		<div>
		// 			<EditDialog  />
		// 			<DeleteButton  />
		// 		</div>
		// 	),
		// },
  ];

	return (
		<div>
			<Typography className={classes.header}>Your villagers:</Typography>
			<DataGrid autoHeight rows={rows} columns={columns.map((column) => ({
				...column,
				disableClickEventBubbling: true,
			}))} pageSize={2} />
			<Snackbar open={snackOpen} autoHideDuration={4000} onClose={()=>{setSnackOpen(false)}}>
				{/* <SimpleAlerts /> */}
			</Snackbar>
		</div>
	)

}

export default Table;