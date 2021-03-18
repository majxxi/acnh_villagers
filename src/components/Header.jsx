import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
	},
  appBar: {
    backgroundColor: '#67c0c5',
  },
	title: {
    fontFamily: 'Mack-SemiboldItalic',
    color: '#ffffff',
	}
}));

function Header(){
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          ACNH VILLAGERS
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
  )
}

export default Header;
