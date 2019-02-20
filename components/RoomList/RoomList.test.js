import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RoomList from "./RoomList";
import Room from "./Room/Room";

configure({adapter : new Adapter})

const wrapper = shallow(<RoomList />);

// Snapshot for RoomList React Component
describe('>>>Room List--- Snapshot',()=>{
  it('+++capturing Snapshot of Room List', () => {
      const wrapper = shallow(<RoomList />);
      expect(wrapper).toMatchSnapshot();
    })
});

describe('>>>Room List--- Elements Getting Rendered Correctly',()=>{
 it('+++renders the room items correctly', () => {
    //expect(wrapper.find(Room)).to.have.length(4);
    expect(wrapper.children().find(Room).length == 4);
    })
});