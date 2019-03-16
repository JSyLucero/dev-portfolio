/*
ArtXperience Component
UserBioDetails
*/
import React, { Component } from 'react';
import { ContentBlock } from 'Layout';
import { UserBioHeader, UserBioAboutMe } from 'Sections';
import './UserBioDetails.css';
import { UserBio } from '../UserBio';

class UserBioDetails extends Component {
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
      <ContentBlock className="user-bio-details" size="grow">
        <UserBioHeader />
        <UserBioAboutMe />
      </ContentBlock>
    );
  }
}

export { UserBioDetails };