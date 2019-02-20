import React, {Component} from 'react';
import RoomList from '../../components/RoomList/RoomList';

const roomArr = ['room1','room2', 'room3', 'room4'];

class RoomApp extends Component {
   constructor(props){
       super(props);
        this.state  = {
            roomData : {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);

   }

   getRoomDefaultData =()=> {
      var newObj = roomArr.reduce(function(obj,v,i){
        obj[v] = {
            enabled : i > 0 ? false : true,
            key : v+"-key",
            name : "Room " + (i+1),
            data : {
                "adultCount" : 1,
                "childrenCount" : 0	
            }
        };
        return obj;
    }, {});
    return newObj;
   }

   componentDidMount(){
        var data = {};
        if(localStorage && localStorage.getItem('roomData')){
            data = JSON.parse(localStorage.getItem('roomData'));
        } else {
            data = this.getRoomDefaultData();
        }

        this.setState({
            roomData : data 
        }); 
    }

   handleSubmit(){
       localStorage.setItem('roomData',JSON.stringify(this.state.roomData));
       alert("Hi User, Your data has been recorded!");
   }

   setRoomStatus = (roomArrData,status) => {
    let updatedState = {...this.state.roomData};
    roomArrData.forEach((v,i) => {
        let roomObj = {...this.state.roomData[v]};
        roomObj["enabled"] = status;
        roomObj["data"] = {adultCount : 1 , childrenCount : 0}
        updatedState[v] = roomObj;
    });
    this.setState({
        roomData : updatedState
    });

   }

   checkChangeHandler = (key,event) => {
    let checked = event.target.checked;
    let newRoomArr = [...roomArr];
    let tempState = {...this.state.roomData};
    newRoomArr.shift();
    if(checked){
      let updatedArr =  newRoomArr.filter(function(v){
            return ((newRoomArr.indexOf(v) <= newRoomArr.indexOf(key)) && !tempState[v]["enabled"])
        });
        this.setRoomStatus(updatedArr,true )

    } else {
        let updatedArr =  newRoomArr.filter(function(v){
            return (newRoomArr.indexOf(v) >= newRoomArr.indexOf(key) && tempState[v]["enabled"] );
        });
        this.setRoomStatus(updatedArr, false )
    }

   }

   updatePersonHandler = (event,type,comp) => {
    let selectValue = event.target.value;
    let updatedState =  {...this.state.roomData};
    let updatedRoomObj = {...this.state.roomData[type]};
    updatedRoomObj["data"][comp] = selectValue;
    updatedState[type] = updatedRoomObj;
    this.setState({
        roomData : updatedState
    })
   }

   render(){
       return (
         <div className = "roomApp">
             <RoomList data = {this.state.roomData} checkChangeHandler = {this.checkChangeHandler} updatePersonHandler =
             {this.updatePersonHandler} /> 
             <button className = "submitDetails" onClick = {this.handleSubmit}>Submit</button>
             
           </div>
       )
   }

}

export default RoomApp;