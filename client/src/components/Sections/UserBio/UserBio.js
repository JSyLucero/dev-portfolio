import React, { Component } from 'react';
import { ContentBlock, Link } from 'Layout';
import { UserPicture, UserBioDetails } from 'Sections';
import './UserBio.css';

class UserBio extends Component {
  constructor(props) {
    super(props);
  }

  state = { }

  componentDidMount() {  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = { };
    for (let key in nextProps) {
      if (prevState.hasOwnProperty(key)) {
        if (nextProps[key] !== prevState[key])
          state[key] = nextProps[key];
      }
    }

    return state;
  }

  render() {
    return (
      <ContentBlock className="user-bio">
        <ContentBlock className="user-bio-content d-flex" size="5">
          <UserPicture />
          <UserBioDetails />
        </ContentBlock>
      </ContentBlock>
    );
  }
}

export { UserBio };