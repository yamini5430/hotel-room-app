import React from 'react';
import './BuildControl.css';
import SelectBox from '../../UI/SelectBox/SelectBox'

const buildControl = (props) => {
	const {type} = props;
	return <div className="room-data">
			<div className="adult-count">
				<div className="">
					<p>Adults</p>
					<p>(18+)</p>
				</div>
				<SelectBox defaultVal= {props.peopleData.adultCount} updatePersonHandler = {props.updatePersonHandler} disabledInfo = {props.disabledInfo} identifier ="adultCount"
				 optionsData = {[1,2]} type = {type} />
			</div> 
			<div className="children-count">
				<div className="">
					<p>Children</p>
					<p>(0-17)</p>
				</div>
				<SelectBox defaultVal = {props.peopleData.childrenCount} updatePersonHandler = {props.updatePersonHandler} disabledInfo = {props.disabledInfo} identifier ="childrenCount"
				 optionsData = {[0,1,2]} type = {type} />
			</div>
		</div>
}

export default buildControl;