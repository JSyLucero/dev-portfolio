/*
ArtXperience Component
UserBioAboutMe
*/
import React, { Component } from 'react';
import { ContentBlock, Link } from 'Layout';
import './UserBioAboutMe.css';

class UserBioAboutMe extends Component {
  constructor(props) {
    super(props);
  }

  state = { }

  componentDidMount() { }

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
    const { id, className, children, style } = this.props;
    return (
      <ContentBlock className="user-bio-about-me">
        <h3>About Me</h3>
        <ContentBlock className="user-bio-about-me-content">
          Hi! This is the biography of a user.
        </ContentBlock>
      </ContentBlock>
    );
  }
}

export { UserBioAboutMe };