import React from 'react';
import './Pilot.scss';
import { PilotProps } from '../../typescript/interfaces/interface';
import { Link } from 'react-router-dom';

const Pilot = (props: PilotProps) => {

  return (
    <Link to={`/dashboard/pilot/${props._id}`}>
        <div className="test pilot">
            <div className="test header">
                <h5 className="test header-text">{`${props.fname} ${props.lname}`}</h5>
            </div>
            <div className="test header">
                <h5 className="test header-text">{props.company}</h5>
            </div>
            <div className="test header">
                <h5 className="test header-text">{props.mobile}</h5>
            </div>
            <div className="test header">
                <h5 className="test header-text">{props.email}</h5>
            </div>
        </div>
    </Link>
  );

}

export default Pilot;