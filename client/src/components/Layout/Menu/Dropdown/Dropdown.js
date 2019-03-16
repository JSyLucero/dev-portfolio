import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  renderOptions(options, onOptionClick) {
    let optionElems = [];

    for (let option of options) {
      if (option !== null) {
        
      }
    }
  }

  render() {
    const { id, className, options, placeholder, onOptionClick, onChange, multiple } = this.props;
    return (
      <select id={id} className={className} onChange={onChange} 
        size={size} multiple={multiple}>
        <option selected disabled>{placeholder}</option>
        {this.renderOptions(options, onOptionClick)}
      </select>
    );
  }
}