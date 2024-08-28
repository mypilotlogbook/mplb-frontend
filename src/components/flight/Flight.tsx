import React from 'react';
import './Flight.scss';
import { FlightProps } from '../../typescript/interfaces/interface';
import { Link } from 'react-router-dom';

const Flight = (props: FlightProps) => {

    const date = new Date(props.date);

    return (
        <Link to={`/dashboard/flight/${props._id}`}>
            <div className="test flight">
                <div className="test header">
                    <h5 className="test header-text">{`` + date.toLocaleDateString()}</h5>
                </div>
                <div className="test header">
                    <h5 className="test header-text">{props.flight_nr}</h5>
                </div>
                <div className="test header">
                    <h5 className="test header-text">{props.arrival.airport_name}</h5>
                </div>
                <div className="test header">
                    <h5 className="test header-text">{props.departure.airport_name}</h5>
                </div>
                <div className="test header">
                    <h5 className="test header-text">{props.in_time}</h5>
                </div>
                <div className="test header">
                    <h5 className="test header-text">{props.out_time}</h5>
                </div>
            </div>
        </Link>
    );

}

export default Flight;