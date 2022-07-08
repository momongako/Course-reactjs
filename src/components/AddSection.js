import React, { useState } from 'react';
import AddContent from './AddContent';

function AddSection(props) {
  const [inputList, setInputList] = useState([{ props: '' }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { props: '' }]);
  };

  return (
    <div className="App">
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name={props.field}
              placeholder={"Enter "+props.field+" Name"}
              value={x.props}
              onChange={(e) => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && (
                <button className="mr10" onClick={() => handleRemoveClick(i)}>
                  Remove
                </button>
              )}
              {inputList.length - 1 === i && (
                <button onClick={handleAddClick}>Add</button>
              )}
            </div>
            <div className="ms-5 my-1 border col-10"><AddContent field="content"/></div>
          </div>
        );
      })}
    </div>
  );
}

export default AddSection;
