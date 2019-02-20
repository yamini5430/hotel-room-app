import React, {Component} from 'react';
import RoomApp from '../containers/RoomApp/RoomApp';
import "../containers/RoomApp/RoomApp.css";
import "../components/RoomList/Room/Room.css";
import "../components/RoomList/BuildControl/BuildControl.css";

class Home extends Component {
    render() {
        return (
           <div>
              <RoomApp />
           </div> 
        )

    }

}

export default Home;