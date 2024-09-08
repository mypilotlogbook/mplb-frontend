import React, { useEffect, useState } from 'react'
import './SingleAirfield.scss';
import BackButton from '../../components/back-button/BackButton';
import { Link, useParams } from 'react-router-dom';
import { AirfieldProps } from '../../typescript/interfaces/interface';
import getAirField from '../../api/airfield-endpoints/getAirfield';
import { Skeleton } from '@mui/material';
import Spline from '@splinetool/react-spline';

const SingleAirfield = () => {

    const [airfield, setAirfield] = useState<AirfieldProps>();
    const [loaded, setLoaded] = useState(false);

    const { airfieldId } = useParams();

    const getSingleAirfield = () => {
        getAirField({
            airfieldId: airfieldId,
            setAirfield: setAirfield,
        });
    }

    useEffect(() => {
        getSingleAirfield();
    }, []);

    return (
        <div className='single-airfield test'>
            <div className="test-single-airfield-header">
                <Link to='/dashboard/airfields'>
                    <BackButton image='https://res.cloudinary.com/dv9ax00l4/image/upload/v1722961275/arrow-small-left_llmk3x.png'/>
                </Link>
                <h6 className="test page-subtitle">Back to Airfields</h6>
            </div>
            <div className="test single-airfield-content">

                {/* airfield spline section */}
                <div className="test single-airfield-hero">
                    {!loaded && (
                        <Skeleton
                        variant="rectangular"
                        width="100%"
                        height="100%"
                        animation="wave"
                        />
                    )}
                    <Spline
                        onLoad={() => setLoaded(true)}
                        className="test single-airfield-spline"
                        scene="https://prod.spline.design/UpWvNsM5OcMQ0KO8/scene.splinecode"
                    />
                </div>

                <div className="test upper">
                    <h1 className="test name">{airfield?.airport_name}</h1>
                    <h6 className="test code">{airfield?._id}</h6>
                </div>

                <div className="test middle">
                    <div className="test middle-left">
                        <div className="test info-container">
                            <h6 className="test info-lable">Country:</h6>
                            {
                                airfield?.country? (
                                    <h6 className="test info">{airfield?.country}</h6>
                                ) : (
                                    <h6 className="test info">Not Set</h6>
                                )
                            }
                        </div>
                        <div className="test info-container">
                            <h6 className="test info-lable">Category:</h6>
                            {
                                airfield?.airfield_category? (
                                    <h6 className="test info">{airfield?.airfield_category}</h6>
                                ) : (
                                    <h6 className="test info">Not Set</h6>
                                )
                            }
                        </div>
                        <div className="test info-container">
                            <h6 className="test info-lable">Code:</h6>
                            {
                                airfield?.airfield_code? (
                                    <h6 className="test info">{airfield?.airfield_code}</h6>
                                ) : (
                                    <h6 className="test info">Not Set</h6>
                                )
                            }
                        </div>
                        <div className="test info-container">
                            <h6 className="test info-lable">ICAO:</h6>
                            {
                                airfield?.icao? (
                                    <h6 className="test info">{airfield?.icao}</h6>
                                ) : (
                                    <h6 className="test info">Not Set</h6>
                                )
                            }
                        </div>
                        <div className="test info-container">
                            <h6 className="test info-lable">IATA:</h6>
                            {
                                airfield?.iata? (
                                    <h6 className="test info">{airfield?.iata}</h6>
                                ) : (
                                    <h6 className="test info">Not Set</h6>
                                )
                            }
                        </div>
                    </div>
                    <div className="test middle-right">
                        <div className="test info-container">
                            <h6 className="test info-lable">Elevation:</h6>
                            {
                                airfield?.elevation? (
                                    <h6 className="test info">{airfield?.elevation}</h6>
                                ) : (
                                    <h6 className="test info">Not Set</h6>
                                )
                            }
                        </div>
                        <div className="test info-container">
                            <h6 className="test info-lable">Timezone:</h6>
                            {
                                airfield?.timezone? (
                                    <h6 className="test info">{airfield?.timezone.timezone}</h6>
                                ) : (
                                    <h6 className="test info">Not Set</h6>
                                )
                            }
                        </div>
                        <div className="test info-container">
                            <h6 className="test info-lable">Nearest City:</h6>
                            {
                                airfield?.nearByCity? (
                                    <h6 className="test info">{airfield?.nearByCity}</h6>
                                ) : (
                                    <h6 className="test info">Not Set</h6>
                                )
                            }
                        </div>
                        <div className="test info-container">
                            <h6 className="test info-lable">Longitude:</h6>
                            {
                                airfield?.longitude? (
                                    <h6 className="test info">{airfield?.longitude}</h6>
                                ) : (
                                    <h6 className="test info">Not Set</h6>
                                )
                            }
                        </div>
                        <div className="test info-container">
                            <h6 className="test info-lable">Latitude:</h6>
                            {
                                airfield?.lattitude? (
                                    <h6 className="test info">{airfield?.lattitude}</h6>
                                ) : (
                                    <h6 className="test info">Not Set</h6>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="test lower">

                </div>
            </div>
        </div>
    );
}

export default SingleAirfield;