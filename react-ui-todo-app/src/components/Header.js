import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

  function ButtonAppBar(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="body2" color="inherit" className={classes.title} position="absolute">
              TODO App
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(connect()(ButtonAppBar));