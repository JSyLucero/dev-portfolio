/*
ArtXperience Component
UserPicture
*/
import React, { Component } from 'react';
import './UserPicture.css';

class UserPicture extends Component {
  constructor(props) {
    super(props);
  }
z
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

  getPictureClass(size) {
    const sizes = {
      xs: "xs-user-picture",
      sm: "sm-user-picture",
      md: "md-user-picture",
      lg: "lg-user-picture"
    }

    if (sizes.hasOwnProperty(size)) {
      return sizes[size];
    } else {
      return sizes["md"];
    }
  }

  render() {
    const { id, className, children, style, Avatar, Size } = this.props;
    return (
      <div className={this.getPictureClass(Size)} style={{ backgroundImage: `url('${Avatar ? Avatar : ``}')` }}></div>
    );
  }
}

export { UserPicture };