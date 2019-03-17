/*
Component
Capsule
*/
import React, { Component } from 'react';
import './Capsule.css';

// Material UI imports
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: blueGrey[100]
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

class CapsuleComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, label, color, onClick, onDelete } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Chip label={label} color="primary" 
          className={classes.chip} 
          onClick={onClick} 
          onDelete={onDelete} 
        />
      </MuiThemeProvider>
    );
  }
}

export const Capsule = withStyles(styles)(CapsuleComponent);