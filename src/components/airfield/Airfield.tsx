import React from 'react'
import './Airfield.scss';
import { AirfieldProps } from '../../typescript/interfaces/interface';
import { Link } from 'react-router-dom';

const Airfield = (props: AirfieldProps) => {
  return (
    <Link to={`/dashboard/airfield/${props._id}`}>
      <div className="test airfield">
        <div className="test header">
          <h5 className="test header-text">{props.airport_name}</h5>
        </div>
        <div className="test header">
          <h5 className="test header-text">{props.country}</h5>
        </div>
        <div className="test header">
          <h5 className="test header-text">{props.airfield_category}</h5>
        </div>
        <div className="test header">
          <h5 className="test header-text">{props.icao}</h5>
        </div>
        <div className="test header">
          <h5 className="test header-text">{props.iata}</h5>
        </div>
      </div>
    </Link>
  )
}

export default Airfield