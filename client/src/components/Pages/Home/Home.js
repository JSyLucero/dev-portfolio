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
import { Tabs, Tab } from '@material-ui/core';

import { UserAuthSubscriber } from 'services';

const getDefaultExpanded = (activeTab) => {
  let expanded = "";
  if (activeTab === 0)
    expanded = "career-goal-statement"
  if (activeTab === 2)
    expanded = "gbc-t127"
  if (activeTab === 3)
    expanded = "capstone-documents"
  
  return expanded;
}

class Home extends Component {
	constructor(props) {
		super(props);
	}

  state = {
    profilePicSize: window.innerWidth <= 800 ? 10 : 3,
    aboutSize: window.innerWidth <= 800 ? 10 : 7,
    activeTab: 0,
    expanded: getDefaultExpanded(0),
    windowWidth: window.innerWidth
  }

  updateSize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      profilePicSize: window.innerWidth <= 800 ? 10 : 3,
      aboutSize: window.innerWidth <= 800 ? 10 : 7,
    });
  }

  handleActiveTab = (event, value) => {
    let expanded = getDefaultExpanded(value);
    this.setState({ activeTab: value, expanded: expanded });
  }

  handleActiveTabSwipe = index => {
    let expanded = getDefaultExpanded(index);
    this.setState({ activeTab: index, expanded: expanded });
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
    const { profilePicSize, aboutSize, windowWidth, activeTab, expanded } = this.state;

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
                    maxWidth: "1280px", 
                    marginTop: "10px", 
                    borderTop: "1px solid rgb(220, 220, 220)", 
                    paddingTop: "10px",
                    paddingRight: "5%",
                    maxHeight: "325px",
                    overflowY: "overlay",
                  }}>
                    Hello, my name is Jullian Anthony Sy-Lucero, and I'm a developer studying at George Brown College in 
                    the T127 - Computer Programmer Analyst program, and am currently in my final year.
                    <br/><br/>
                    As a part of a team, in projects, I hope to contribute well and improve code as much as possible, and when tasked to learn new technologies, 
                    I learn quick and agile in order to adapt and implement new technologies. I strongly believe in having a solid foundation in a code base, 
                    and I wish to solve issues thoroughly while trying to implement quick, as well as readable, and modular/reusable code.
                    <br/><br/>
                    I have knowledge in languages such as C#, JavaScript (ES6) and PHP along with various other languages.
                    <br/><br/>
                    In complement to my skills as a developer, I also have a hobby in creating designs for my personal use for projects related and non-related to software, 
                    when tasked with design, I will apply my knowledge in order to implement a fluid, smooth user experience in software.
                  </section>
                </ContentBlock>
              </ContentBlock>
						</ContentBlock>
            <ContentBlock className="d-flex padding-25" style={{ background: "rgba(230, 230, 230, 1.0)" }}>
              <ContentBlock style={{boxShadow: "0 0 15px rgba(0, 0, 0, 0.07225)"}}>
                <Tabs style={{ background: "rgb(245, 245, 245)" }}
                  variant="scrollable"
                  scrollButtons="on"
                  value={activeTab}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={this.handleActiveTab}>
                  <Tab label="Job Related" />
                  <Tab label="Projects" />
                  <Tab label="Education" />
                  <Tab label="Capstone" />
                </Tabs>
                <SwipeableViews
                  axis={'x'}
                  index={this.state.activeTab}
                  onChangeIndex={this.handleActiveTabSwipe}
                >
                  <div className="padding-15">
                    <Expandable onChange={this.handleExpand('career-goal-statement')}
                      Heading="Statement of Career Goal" expanded={expanded === 'career-goal-statement'}>
                      <div style={{ maxWidth: "1024px" }}>
                        As a developer, I hope to really further my knowledge in development. I would like to maximize my skills to the fullest potential.
                        <br/><br/>
                        In the development field, I would like to improve and accelerate in creating, preparing and utilizing modular/reusable code.
                        I wish to contribute well to any team I join and ease up the workloads with this ability. Even further, I am willing 
                        to learn new technologies, and programming languages, as it's fun, and broadens my pool of knowledge.
                        <br/><br/>
                        In complement to my skills as a developer, I also have a hobby in creating designs for personal use for projects related and non-related to software.
                        So in being tasked with works related to design, I wish to apply my knowledge, and help contribute to design teams when possible, especially
                        in front-end development workloads. 
                        <br/><br/>
                        I strongly believe in giving an amazing user experience, and enjoy building up applications that meet a user's needs. 
                      </div>
                    </Expandable>
                    <Expandable onChange={this.handleExpand('job-resources')}
                      Heading="Resources" expanded={expanded === 'job-resources'}
                      Subheading={<Capsule label="Application Files"/>}>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <h3>Downloads: </h3>
                        </div>
                        <div className="expandable-details-item-desc">
                          <Capsule label="Resume" color="secondary" onClick={() => { window.open(`${location.protocol}//${location.host}/downloads/Resume_JSyLucero.pdf`, '_blank')}}/>
                          <Capsule label="Cover Letter"/>
                        </div>
                      </div>
                    </Expandable>
                  </div>
                  <div className="padding-15">
                    <Expandable onChange={this.handleExpand('project-1')}
                      Heading="Developer's Portfolio" expanded={expanded === "project-1"}>
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
                      Heading="ArtXperience" expanded={expanded === "art-ax"}
                      Subheading={<Capsule label="Art Portfolio/Community Web App"/>}>
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
                      Subheading={<Capsule label={windowWidth <= 740 ? `GBC` : `George Brown College - Casa Loma`}/>}>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <Capsule label="School Years"/>
                        </div>
                        <div className="expandable-details-item-desc">
                          2015 - 2017 (1st &amp; 2nd Year), 2018 - 2019 (3rd Year)
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
                    <br/>
                    <Expandable onChange={this.handleExpand('academic-credentials')}
                      Heading="Academic Credentials" expanded={expanded === "academic-credentials"}>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <h3>Honours: </h3>
                        </div>
                        <div className="expandable-details-item-desc">
                          <Capsule label="GBC T127 Honours - Fall 2018" color="primary" onClick={() => { window.open(`/downloads/t127_fall_2018_honours_letter.pdf`, '_blank')}}/>
                        </div>
                      </div>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <h3>Transcripts: </h3>
                        </div>
                        <div className="expandable-details-item-desc">
                          <Capsule label="GBC T127 - Fall 2018" color="secondary" onClick={() => { window.open(`/assets/images/t127_fall_2018_transcript.png`, '_blank')}}/>
                        </div>
                      </div>
                    </Expandable>
                  </div>
                  <div className="padding-15">
                    <Expandable onChange={this.handleExpand('capstone-documents')}
                      Heading="Documents" expanded={expanded === 'capstone-documents'}
                      Subheading={<Capsule label={windowWidth <= 740 ? `Capstone Docs` : `Capstone Documents`}/>}>
                      <div className="expandable-details-item">
                        <div className="expandable-details-item-label">
                          <h3>Files: </h3>
                        </div>
                        <div className="expandable-details-item-desc">
                          <Capsule label="Project Vision" color="secondary" 
                            onClick={() => { window.open(`https://docs.google.com/document/d/16L2pd4aVmtB29cn99NhO_GCnokO4TB7bTQSQb6AeLkY`, '_blank')}}/>
                          <Capsule label="Project/Business Requirements" color="secondary" 
                            onClick={() => { window.open(`https://docs.google.com/document/d/1OlroM_XRVe1zESa61TPRiBE2WbFT-xIWM7E9Ik5f5ls`, '_blank') }}/>
                          <Capsule label="Project Plan" color="secondary" 
                            onClick={() => { window.open(`https://docs.google.com/document/d/1cYi13MqwU9pe_wpbY-N05W-1kO1lBj2wA5WchIKAALM`, '_blank') }}/>
                          <Capsule label="Requirements Analysis &amp; Design" color="secondary" 
                            onClick={() => { window.open(`https://docs.google.com/document/d/1DmFEBKhlmbZgmfkBSRQrY6OGWypFOw3C-SKkBFXt7OY`, '_blank') }}/>
                          <Capsule label="Wireframes/Mockups" color="secondary" 
                            onClick={() => { window.open(`https://xd.adobe.com/view/deb1ae56-c1ca-4149-4162-824326ad590f-a880/?hints=off`, '_blank') }}/>
                          <Capsule label="Status Report 1" color="secondary" 
                            onClick={() => { window.open(`https://docs.google.com/document/d/1HAK0TzSffAVrSrSgRCaSF_2Pmcw56x0ErFzkIfB0DDM`, '_blank') }}/>
                          <Capsule label="Status Report 2" color="secondary" 
                            onClick={() => { window.open(`https://docs.google.com/document/d/1ibJeigkNQdL0fxd_c-TSMRoAmHMMVNIDBIn1AFT0Kx4`, '_blank') }}/>
                          <Capsule label="Status Report 3" color="secondary" 
                            onClick={() => { window.open(`https://docs.google.com/document/d/1txoZyiopjdM55GYi9JFTRTD5pacEzvJmnPbdLL0s5wY`, '_blank') }}/>
                          <Capsule label="Systems Implementation" color="secondary"
                            onClick={() => { window.open(`https://docs.google.com/document/d/15c5zSe4bsUgzbFLlm92rC7cFvExn8o4POXoJXMUodXA`, '_blank') }}/>
                        </div>
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