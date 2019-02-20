import React from 'react';
import Room from './Room/Room';

const RoomList = (props) => {
	const transformedData = Object.keys(props.data).map( igKey => {
		return [...Array(props.data[igKey])].map((data,index) => {
		return <Room type={igKey} key = {data['key']} data = {data} checkChangeHandler = {props.checkChangeHandler}
		updatePersonHandler = {props.updatePersonHandler}/>
	})
	}).reduce( (arr,curr) => arr.concat(curr), []);
  return (
  		<div className = "roomList">
  		{transformedData}
  		</div>
  	)
}

export default RoomList;