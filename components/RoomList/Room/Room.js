import React,{Component} from 'react';
import BuildControl from "../BuildControl/BuildControl";
import Checkbox from "../../UI/CheckBox/CheckBox"

const Room = (props) => {
  return  <div className={"room" + (!props.data.enabled ? " disabled" : "")}>
	   {props.type != "room1" ? <Checkbox label = {props.data.name} type = {props.type} 
	   checkChangeHandler = {props.checkChangeHandler} isChecked = {props.data.enabled} /> :
	   <div className="title">{props.data.name}</div> }
		<BuildControl disabledInfo = {!props.data.enabled} peopleData = {props.data.data}
		updatePersonHandler = {props.updatePersonHandler} type = {props.type} />
		
	</div>
}

export default Room;