/*
Component
Home
*/
import React, { Component } from 'react';
import { ContentArea, ContentBlock, Link } from 'Layout';
import { FooterContent, Expandable, Capsule } from 'Sections';
import css from './Home.css';

import SwipeableViews from 'react-swipeable-views';

// Material UI imports
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { UserAuthSubscriber } from 'services';

class Home extends Component {
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
    this.setState({ activeTab: value, expanded: "" });
  }

  handleActiveTabSwipe = index => {
    this.setState({ activeTab: index, expanded: "" });
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
                  value={activeTab}
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
                    <Expandable onChange={this.handleExpand('project-1')}
                      Heading="Developer's Portfolio" expanded={expanded === "project-1"}
                      Subheading={<Capsule label=""/>}>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <Capsule label="Technology"/>
                        </div>
                        <div className="expandable-details-item-desc">
                          MongoDB, Express, React, NodeJS
                        </div>
                      </div>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <Capsule label="Repository"/>
                        </div>
                        <div className="expandable-details-item-desc">
                          <Link Url="https://github.com/jsylucero/dev-portfolio" PageName="GitHub"/>
                        </div>
                      </div>
                    </Expandable>
                    <Expandable onChange={this.handleExpand('art-ax')}
                      Heading="ArtXperience" expanded={expanded === "art-ax"}>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <Capsule label="Technology"/>
                        </div>
                        <div className="expandable-details-item-desc">
                          MongoDB, Express, React, NodeJS
                        </div>
                      </div>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <Capsule label="Repository"/>
                        </div>
                        <div className="expandable-details-item-desc">
                          <Link Url="https://gitlab.com/Delta-Axis/art-ax" PageName="GitLab"/>
                        </div>
                      </div>
                    </Expandable>
                    <Expandable onChange={this.handleExpand('comp3133-assignment')}
                      Heading="Chat Room" expanded={expanded === "comp3133-assignment"}
                      Subheading={<Capsule label="Chat Application [COMP3133 Assignment]"/>}>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <Capsule label="Technology"/>
                        </div>
                        <div className="expandable-details-item-desc">
                          MongoDB, Express, HTML5/CSS3, NodeJS
                        </div>
                      </div>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <Capsule label="Repository"/>
                        </div>
                        <div className="expandable-details-item-desc">
                          <Link Url="https://github.com/jaepun/comp3133_assignment" PageName="GitHub"/>
                        </div>
                      </div>
                    </Expandable>
                    <Expandable onChange={this.handleExpand('comp3123-assignment')}
                      Heading="Gamer Friends' List" expanded={expanded === 'comp3123-assignment'}
                      Subheading={<Capsule label="Pseudo Friends' List App [COMP3123 Assignment]"/>}>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <Capsule label="Technology"/>
                        </div>
                        <div className="expandable-details-item-desc">
                          MongoDB, Express, AngularJS, NodeJS
                        </div>
                      </div>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <Capsule label="Repository"/>
                        </div>
                        <div className="expandable-details-item-desc">
                          <Link Url="https://github.com/JSyLucero/comp3123_assignment1" PageName="GitHub"/>
                        </div>
                      </div>
                    </Expandable>
                    <Expandable onChange={this.handleExpand('comp1230-assignment')}
                      Heading="Versus" expanded={expanded === 'comp1230-assignment'}
                      Subheading={<Capsule label="Tournament Brackets Web App [COMP1230 Assignment]"/>}>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <Capsule label="Technology"/>
                        </div>
                        <div className="expandable-details-item-desc">
                          MySQL &amp; PHP
                        </div>
                      </div>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <Capsule label="Repository"/>
                        </div>
                        <div className="expandable-details-item-desc">
                          <Link Url="https://bitbucket.org/synogen/website-repo/" PageName="BitBucket"/>
                        </div>
                      </div>
                    </Expandable>
                  </div>
                  <div className="padding-15">
                    <Expandable onChange={this.handleExpand('gbc-t127')}
                      Heading="T127 - Computer Programmer Analyst" 
                      expanded={expanded === 'gbc-t127'}
                      Subheading={<Capsule label="George Brown College - Casa Loma"/>}>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <Capsule label="School Years"/>
                        </div>
                        <div className="expandable-details-item-desc">
                          2015 - 2019
                        </div>
                      </div>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <Capsule label="Diploma"/>
                        </div>
                        <div className="expandable-details-item-desc">
                          Advanced Diploma
                        </div>
                      </div>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <Capsule label="School Website"/>
                        </div>
                        <div className="expandable-details-item-desc">
                          <Link Url="https://www.georgebrown.ca/" PageName="George Brown College"/>
                        </div>
                      </div>
                    </Expandable>
                  </div>
                  <div className="padding-15">
                    <Expandable onChange={this.handleExpand('job-resources')}
                      Heading="Resources" expanded={expanded === 'job-resources'}
                      Subheading={<Capsule label="Application Files"/>}>
                      <div className="expandable-details-item">
                        <h3>Downloads: </h3>
                        <Capsule label="Resume" color="secondary" onClick={() => { window.open(`${location.protocol}//${location.host}/downloads/Resume_JSyLucero.pdf`)}}/>
                        <Capsule label="Cover Letter"/>
                      </div>
                    </Expandable>
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

export { Home };