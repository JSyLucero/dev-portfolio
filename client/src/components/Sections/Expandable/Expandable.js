/*
Component
Material UI Expandable
*/
import React, { Component } from 'react';
import css from './Expandable.css';

// Material UI imports
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    flexGrow: 1,
    textAlign: 'right',
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
});

class ExpandableComponent extends Component {
  constructor(props) {
    super(props);
  }

  state = { 
    expanded: this.props.expanded !== undefined ? this.props.expnded : false,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = { };
    if (prevState) {
      for (let key in nextProps) {
        if (prevState.hasOwnProperty(key)) {
          if (nextProps[key] !== prevState[key])
            state[key] = nextProps[key];
        }
      }
    }
    
    return state;
  }

  render() {
    const { Heading, Subheading, children, onChange, classes } = this.props;
    const { expanded } = this.state;
    
    return (
      <ExpansionPanel expanded={expanded} onChange={onChange}>
        <ExpansionPanelSummary style={{margin: '0'}} expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{Heading}</Typography>
          {Subheading && <Typography className={classes.secondaryHeading}>{Subheading}</Typography>}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {children}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export const Expandable = withStyles(styles)(ExpandableComponent);