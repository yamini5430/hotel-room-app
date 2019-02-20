import React from 'react';
import ReactDOM from 'react-dom';
import RoomApp from './RoomApp';
import renderer from 'react-test-renderer';

// Snapshot for RoomApp React Component
test(" snapshot test", ()=>{
    const component = renderer.create(
         <RoomApp />
         );
         let tree = component.toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
})

