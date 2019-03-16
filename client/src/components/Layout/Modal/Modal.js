/*
ArtXperience Component
Modal
*/
import React, { Component } from 'react';
import { ModalContent } from 'Layout';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  state = { 
    show: this.props.show !== undefined ? this.props.show : false
  }

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
    const { id, className, children, style, toggle } = this.props;
    const { show } = this.state;
    
    return (
      <React.Fragment>
        {show &&
          <div id={id} className={`modal show${className ? ` ${className}` : ``}`} style={style ? style : null} onClick={toggle}>
            <ModalContent>
              {children}
            </ModalContent>
          </div>
        }
      </React.Fragment>
    );
  }
}

export { Modal };