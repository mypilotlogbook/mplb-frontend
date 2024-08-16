import React from 'react'
import { Link } from 'react-router-dom';
import { AircraftProps } from '../../typescript/interfaces/interface';
import './Aircraft.scss';

const Aircraft = (props: AircraftProps) => {

    return (
        <Link to={`/dashboard/aircraft/${props._id}`}>
            <div className="test aircraft">
                <div className="test header">
                    <h5 className="test header-text">{props.type}</h5>
                </div>
                <div className="test header">
                    <h5 className="test header-text">{props.manufacturer}</h5>
                </div>
                <div className="test header">
                    <h5 className="test header-text">{props.model}</h5>
                </div>
                <div className="test header">
                    <h5 className="test header-text">{props.aircraft_class}</h5>
                </div>
                <div className="test header">
                    <h5 className="test header-text">{props.category}</h5>
                </div>
                <div className="test header">
                    <h5 className="test header-text">{props.power}</h5>
                </div>
            </div>
        </Link>
    );

}

export default Aircraft;