import '../css/StateSelector.css';
import React, { useState, useEffect, useContext } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Selection, DropdownButton, Button } from 'react-bootstrap';
import { DataContext, useData } from '../contexts/DataContext';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';

export default function StateSelector({ props }) {
  let [data, /*dispatch*/setData] = useData(/*DataContext*/);

  const handleStateSelect = (newState) => {
    console.log(newState);
    // return dispatch({type: "SELECT_STATE", payload: newState});
    return setData({...data, stateSelected: newState, dropdownTitle: newState});
  }

  return (
      <DropdownButton
            className="StateSelector"
            size="sm"
            variant="outline-secondary"
            id="dropdown-basic-button"
            title={data.dropdownTitle}
            onSelect={handleStateSelect}
        >
          <>
          <Dropdown.Item 
            key={"Maryland"}
            eventKey={"Maryland"}
          >
            Maryland
          </Dropdown.Item>
          </>
      </DropdownButton>
  );
}