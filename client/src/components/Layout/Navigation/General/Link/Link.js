import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';

class Link extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    
  }

  render = () => {
    const { id, className, style, children, Url, PageName, onClick } = this.props;
    return (
      Url && Url.startsWith("/") ?
        <RouterLink id={id} className={className} style={style} to={Url} onClick={onClick}>
          {
            children !== undefined ? 
              children 
            : PageName
          }
        </RouterLink>
      :
        <a id={id} className={className} style={style} href={Url} target="_blank" onClick={onClick}>
          {
            children !== undefined ? 
              children 
            : PageName
          }
        </a>
    );
  }
}

export { Link };