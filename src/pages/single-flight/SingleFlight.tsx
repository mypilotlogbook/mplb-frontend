import React, { useContext, useEffect, useState } from 'react';
import './SingleFlight.scss';
import { FlightProps, UpdateFlightProps } from '../../typescript/interfaces/interface';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IdContext } from '../../context/UserIdContext';
import Alert from '../../components/alert/Alert';
import BackButton from '../../components/back-button/BackButton';
import { Tooltip } from '@mui/material';
import getSingleFlight from '../../api/flight-endpoints/getSingleFlight';

const SingleFlight = () => {

    const [flight, setFlight] = useState<FlightProps | undefined>(undefined);
    const [formData, setFormData] = useState<UpdateFlightProps>();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [statusCode, setStatusCode] = useState(0);
    const [message, setMessage] = useState('');
    
    const navigate = useNavigate();

    const { flightId } = useParams();

    const idContext = useContext(IdContext);
    const id = idContext?.id;
    if (!id) {
        throw new Error('Id context is not available');
    } 

    const getSingleFlightDetails = () => {
        getSingleFlight({
            flightId: flightId || null,
            setFlight: setFlight,
            setFormData: setFormData
        });
    }

    useEffect(() => {
        // getSingleFlightDetails();
    }, []);

    return (
        <div className='test single-flight'>
            {
                error && <Alert
                type='error'
                statusCode={statusCode}
                message={message}
                />
            }
            {
                success && <Alert
                type='success'
                statusCode={statusCode}
                message={message}
                />
            }

            <div className="test single-flight-header">
              <Link to='/dashboard/flights'>
                  <BackButton image='https://res.cloudinary.com/dv9ax00l4/image/upload/v1722961275/arrow-small-left_llmk3x.png'/>
              </Link>
              <h6 className="test page-subtitle">Back to Flights</h6>
            </div>

            <div className="test single-flight-content">

                <div className="test section1">
                    <div className="test section1-left">
                        <h3 className="test lable">Edit Flight Details</h3>
                        <h6 className="test sub-lable">Update flight information and details!</h6>
                    </div>
                    <div className="test section1-right">
                        <Tooltip title="Click here to save your changes" arrow>
                            <button className="test save-button" onClick={() => {}}>Save Changes</button>
                        </Tooltip>
                        <Tooltip title="Delete Flight" arrow>
                            <button className="test delete-button" onClick={() => {}}>Delete Flight</button>
                        </Tooltip>
                    </div>
                </div>

            </div>

        </div>
    );

}

export default SingleFlight;