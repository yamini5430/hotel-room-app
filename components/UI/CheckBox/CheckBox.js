import React, { Component, PropTypes } from 'react';

class Checkbox extends Component {
  state = {
    isChecked: this.props.isChecked || false,
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.isChecked != this.state.isChecked){
          this.setState({
            isChecked :  nextProps.isChecked
          });
      }
  }

  toggleCheckboxChange = (e) => {
    const { checkChangeHandler, type } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    checkChangeHandler(type,e);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
                            type="checkbox"
                            value={label}
                            checked={isChecked}
                            onChange={this.toggleCheckboxChange}
                        />

          {label}
        </label>
      </div>
    );
  }
}

// Checkbox.propTypes = {
//   label: PropTypes.string.isRequired,
//   handleCheckboxChange: PropTypes.func.isRequired,
// };

export default Checkbox;