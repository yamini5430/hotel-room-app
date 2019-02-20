import React, { Component, PropTypes } from 'react';

class SelectBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: props.defaultVal};
  
      this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.defaultVal != this.state.defaultVal ) {
            this.setState({
              value : nextProps.defaultVal
            });
        }
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      this.props.updatePersonHandler(event,this.props.type,this.props.identifier)
    }
  
    render() {
      return (
        <select value={this.state.value} onChange = {this.handleChange} disabled = {this.props.disabledInfo}>
        {this.props.optionsData.map(v => <option key = {this.props.identifier + v}  value = {v}>{v}</option>)}
    </select>
      );
    }
  }

  export default SelectBox;