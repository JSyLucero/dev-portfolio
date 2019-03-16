/*
ArtXperience Component
UserBioHeader
*/
import React, { Component } from 'react';
import { ContentBlock, Link } from 'Layout';
import './UserBioHeader.css';

class UserBioHeader extends Component {
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
      <ContentBlock className="user-bio-header">
        <ContentBlock className="user-username"><h2>Username</h2></ContentBlock>
        <ContentBlock className="user-extras">
          <div className="user-name">Full Name</div>
          <Link className="user-website">http://artist.site/</Link>
        </ContentBlock>
      </ContentBlock>
    );
  }
}

export { UserBioHeader };