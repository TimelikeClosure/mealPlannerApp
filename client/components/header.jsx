import React from 'react';
import Menu from './menu';

function Header(props) {
  return (
    <div>
      <div className="col-12 headerBackground row justify-content-end mb-1 ">
        <div className="headerTextMenu textFont textSize flex-fill mt-2 align-self-center text-capitalize">
          <img className=" headerImage" src="./image/redHeart.png" alt="" />
          {props.text}
        </div>
        <Menu setView={props.setView} />
      </div>
    </div>
  );
}

export default Header;
