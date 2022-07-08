import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', height: '500px', width: '100%' }}>
      {props.children}
    </div>
  );
};

export default Scroll;