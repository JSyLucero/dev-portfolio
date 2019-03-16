/*
ArtXperience Component
Home
*/
import React, { Component } from 'react';
import { ContentArea, ContentBlock, Link } from 'Layout';
import { FooterContent } from 'Sections';
import css from './Home.css';

import SwipeableViews from 'react-swipeable-views';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { UserAuthSubscriber } from 'services';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class HomePage extends Component {

	constructor(props) {
		super(props);
	}

  state = {
    profilePicSize: window.innerWidth <= 800 ? 10 : 3,
    aboutSize: window.innerWidth <= 800 ? 10 : 7,
    activeTab: 0,
    expanded: ""
  }

  updateSize = () => {
    this.setState({
      profilePicSize: window.innerWidth <= 800 ? 10 : 3,
      aboutSize: window.innerWidth <= 800 ? 10 : 7,
    });
  }

  handleActiveTab = (event, value) => {
    this.setState({ activeTab: value });
  }

  handleActiveTabSwipe = index => {
    this.setState({ activeTab: index })
  }

  handleExpand = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

	componentDidMount() {
    document.title = "JSyLucero";
    window.addEventListener("resize", this.updateSize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize);
  }

	render() {
    const { classes } = this.props;
    const { profilePicSize, aboutSize, activeTab, expanded } = this.state;

		return (
			<UserAuthSubscriber>
				{auth => (
					<ContentArea FooterContent={<FooterContent/>}>
						<ContentBlock className="d-flex">
              <ContentBlock size={profilePicSize} className="d-flex" 
                style={{
                  minWidth: "200px",
                  maxWidth: "100%",
                  minHeight: "200px",
                  maxHeight: "100%",
                  background: "url('/assets/images/user-picture.jpg')", 
                  backgroundPosition: "center", 
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat" 
                }}>
                <div style={{background: "rgba(0, 0, 0, 0.125)", minWidth: "100%", minHeight: "100%"}}></div>
              </ContentBlock>
              <ContentBlock size={aboutSize} className="d-flex padding-25" style={{ background: "rgba(230, 230, 230, 1.0)" }}>
                <ContentBlock className="padding-25" style={{boxShadow: "0 0 15px rgba(0, 0, 0, 0.07225)"}}>
                  <h1 style={{fontSize: "1.3em"}}><Link Url="https://www.linkedin.com/in/jsylucero">Jullian Anthony Sy-Lucero <em style={{fontWeight: "normal"}}>(JSyLucero)</em></Link></h1>
                  <h2 style={{fontSize: "1.15em", fontWeight: "normal"}}>Modern Programmer with C# and JavaScript (React/ES6)</h2>
                  <section style={{ 
                    fontSize: "1.1em", 
                    width: "100%", 
                    marginTop: "10px", 
                    borderTop: "1px solid rgb(220, 220, 220)", 
                    paddingTop: "10px",
                    paddingRight: "5%",
                    maxHeight: "325px",
                    overflowY: "overlay",
                  }}>
                    Hello, I am currently a student at George Brown College in the program named Computer Programmer Analyst (T127). I do not have a lot of experience, however, I have knowledge in languages such as C#, JavaScript (React/ES6) and PHP along with various other languages.
                    <br/><br/>
                    In projects I hope to contribute well, and improve code as much as possible, and when tasked to learn new technologies I attempt to learn quickly and agile in order to adapt and implement new technologies.
                    <br/><br/>
                    As a part of a team I strongly believe in having a solid foundation in a code base, and therefore when accepted, I wish to be able to solve issues thoroughly while trying to implement quick, as well as readable, and potentially modular/reusable code.
                    <br/><br/>
                    In complement to my programming skills, I also have a hobby in creating designs for my personal use for projects related and non-related to software, when tasked with design, I will apply my design knowledge in order to implement a fluent, smooth user experience in software.
                  </section>
                </ContentBlock>
              </ContentBlock>
						</ContentBlock>
            <ContentBlock className="d-flex padding-25" style={{ background: "rgba(230, 230, 230, 1.0)" }}>
              <ContentBlock style={{boxShadow: "0 0 15px rgba(0, 0, 0, 0.07225)"}}>
                <Tabs style={{ background: "rgb(245, 245, 245)" }}
                  value={this.state.activeTab}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={this.handleActiveTab}>
                  <Tab label="Projects" />
                  <Tab label="Education" />
                  <Tab label="Job Related" />
                </Tabs>
                <SwipeableViews
                  axis={'x'}
                  index={this.state.activeTab}
                  onChangeIndex={this.handleActiveTabSwipe}
                >
                  <div className="padding-15">
                  <ExpansionPanel expanded={expanded === 'project-1'} onChange={this.handleExpand('project-1')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>ArtXperience</Typography>
                      <Typography className={classes.secondaryHeading}>Art Portfolio/Community Web App</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'project-2'} onChange={this.handleExpand('project-2')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>Chat Room</Typography>
                      <Typography className={classes.secondaryHeading}>
                        Chat Application [COMP3133 Assignment]
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>

                        </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'project-3'} onChange={this.handleExpand('project-3')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>Gamer Friends' List</Typography>
                      <Typography className={classes.secondaryHeading}>
                        Pseudo Friends List App [COMP3123 Assignment]
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel expanded={expanded === 'project-4'} onChange={this.handleExpand('project-4')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>Versus</Typography>
                      <Typography className={classes.secondaryHeading}>
                        Tournament Brackets Web App
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  </div>
                  <div className="padding-15">
                    Item Two
                  </div>
                  <div className="padding-15">
                    Item Three
                  </div>
                </SwipeableViews>
              </ContentBlock>
            </ContentBlock>
					</ContentArea>
				)}
			</UserAuthSubscriber>
		);
	}
}

export const Home = withStyles(styles)(HomePage);