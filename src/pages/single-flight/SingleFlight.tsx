import React, { useContext, useEffect, useState } from 'react';
import './SingleFlight.scss';
import { AircraftProps, AirfieldProps, Approach, FlightProps, Operation, PilotProps, UpdateFlightProps } from '../../typescript/interfaces/interface';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IdContext } from '../../context/UserIdContext';
import Alert from '../../components/alert/Alert';
import BackButton from '../../components/back-button/BackButton';
import { Tooltip } from '@mui/material';
import getSingleFlight from '../../api/flight-endpoints/getSingleFlight';
import DashboardTextfield from '../../components/dashboard-textfield/DashboardTextfield';
import Lable from '../../components/lable/Lable';
import getAircraftsByUserId from '../../api/aircraft-endpoints/getAircraftsByUserId';
import getAirFields from '../../api/airfield-endpoints/fetchAirfields';
import getPilotsByUserId from '../../api/pilot-endpoints/getPilotsByUserId';
import Section from '../../components/section/Section';

const SingleFlight = () => {

    const [flight, setFlight] = useState<FlightProps | undefined>(undefined);
    const [formData, setFormData] = useState<UpdateFlightProps>();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [statusCode, setStatusCode] = useState(0);
    const [message, setMessage] = useState('');
    const [aircrafts, setAircrafts] = useState<AircraftProps[]>([]);
    const [pilots, setPilots] = useState<PilotProps[]>([]);
    const [airfields, setAirfileds] = useState<AirfieldProps[]>([]);
    const [approaches, setApproaches] = useState<Approach[]>([
        {
            id: 1,
            category: "AL",
            description: "Autoland",
        },
        {
            id: 2,
            category: "ARA",
            description: "Airbone Radar Approaches",
        },
        {
            id: 3,
            category: "A-RNP",
            description: "Advance RNP",
        },
    ]);

    const [operations, setOperations] = useState<Operation[]>([
        {
            id: 1,
            category: "ACRO",
            description: "Aerobatics",
        },
        {
            id: 2,
            category: "AEMS",
            description: "Aeroplane Emergency Medical System",
        },
        {
            id: 3,
            category: "AMBU",
            description: "Ambululance / HOSP",
        },
    ]);
    const [delayCodes, setDelayCodes] = useState([
        {
            id: 1,
            category: "ACRO",
            description: "Aerobatics",
        },
        {
            id: 2,
            category: "AEMS",
            description: "Aeroplane Emergency Medical System",
        },
        {
            id: 3,
            category: "AMBU",
            description: "Ambululance / HOSP",
        },
    ]);

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

    const getData = () => {
        getAircraftsByUserId({
            userId: id,
            setAircrafts: setAircrafts,
        });
        getAirFields({
            setAirfields: setAirfileds,
        });
        getPilotsByUserId({
            userId: id,
            setPilots: setPilots,
        });
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getSingleFlightDetails();
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
                    <BackButton image='https://res.cloudinary.com/dv9ax00l4/image/upload/v1722961275/arrow-small-left_llmk3x.png' />
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
                            <button className="test save-button" onClick={() => { }}>Save Changes</button>
                        </Tooltip>
                        <Tooltip title="Delete Flight" arrow>
                            <button className="test delete-button" onClick={() => { }}>Delete Flight</button>
                        </Tooltip>
                    </div>
                </div>

                {/* flight basic details */}
                <div className="test add-flight-content-header">
                    <h3 className="test section-header">Flight Basic Details</h3>
                </div>
                <div className="test form-container">
                    <div className="test input">
                        <Lable
                            title='Date *'
                        />
                        <DashboardTextfield
                            type='date'
                            name='date'
                            value={''}
                            placeholder='Enter the date of flight'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Aircraft *'
                        />
                        <select
                            id="options"
                            className="options test"
                            name="aircraft"
                            onChange={() => { }}
                        >
                            <option>Select Aircraft</option>
                            {
                                aircrafts.map((aircraft, index) => {
                                    return (
                                        <option className="test option" key={index} value={aircraft._id}>{aircraft.registration_no}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="test input">
                        <Lable
                            title='Flight NR'
                        />
                        <DashboardTextfield
                            type='text'
                            name='flight_nr'
                            value={''}
                            placeholder='Enter the flight nr'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Arrival *'
                        />
                        <select
                            id="options"
                            className="options test"
                            name="arrival"
                            onChange={() => { }}
                        >
                            <option>Select Arrival</option>
                            {
                                airfields.map((airfield, index) => {
                                    return (
                                        <option className="test option" key={index} value={airfield._id}>{airfield.airport_name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="test input">
                        <Lable
                            title='Departure *'
                        />
                        <select
                            id="options"
                            className="options test"
                            name="departure"
                            onChange={() => { }}
                        >
                            <option>Select Departure</option>
                            {
                                airfields.map((airfield, index) => {
                                    return (
                                        <option className="test option" key={index} value={airfield._id}>{airfield.airport_name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="test input">
                        <Lable
                            title='STD'
                        />
                        <DashboardTextfield
                            type='text'
                            name='std'
                            value={''}
                            placeholder='Enter the STD'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Out'
                        />
                        <DashboardTextfield
                            type='text'
                            name='out_time'
                            value={''}
                            placeholder='Enter the Out Time'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Takeoff'
                        />
                        <DashboardTextfield
                            type='text'
                            name='takeoff'
                            value={''}
                            placeholder='Enter the Takeoff'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Landing'
                        />
                        <DashboardTextfield
                            type='text'
                            name='landing'
                            value={''}
                            placeholder='Enter the Landing'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='In'
                        />
                        <DashboardTextfield
                            type='text'
                            name='in_time'
                            value={''}
                            placeholder='Enter the In Time'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='STA'
                        />
                        <DashboardTextfield
                            type='text'
                            name='sta'
                            value={''}
                            placeholder='Enter the STA'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Total Time'
                        />
                        <DashboardTextfield
                            type='text'
                            name='total_time'
                            value={''}
                            placeholder='Enter the total time'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Air'
                        />
                        <DashboardTextfield
                            type='text'
                            name='air'
                            value={''}
                            placeholder='Enter the Air'
                            onChange={() => { }}
                        />
                    </div>
                </div>

                <hr className='test line' />

                <div className="test form-container-two">
                    <div className="test input">
                        <Lable
                            title='Crew List'
                        />
                        <DashboardTextfield
                            type='text'
                            name='crew_list'
                            value={''}
                            placeholder='Enter Crew List'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Flight Log'
                        />
                        <DashboardTextfield
                            type='text'
                            name='flight_log'
                            value={''}
                            placeholder='Enter Flight Log'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Training'
                        />
                        <DashboardTextfield
                            type='text'
                            name='training'
                            value={''}
                            placeholder='Enter Training'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Remarks'
                        />
                        <DashboardTextfield
                            type='text'
                            name='remarks'
                            value={''}
                            placeholder='Enter Remarks'
                            onChange={() => { }}
                        />
                    </div>
                </div>

                <hr className='test line' />

                {/* delay codes details */}
                <div className="test add-flight-content-header">
                    <h3 className="test section-header">Delay Codes</h3>
                </div>
                <div className="test form-container">
                    <div className="test input">
                        <Lable
                            title='Delay Code 1'
                        />
                        <select
                            id="options"
                            className="options test"
                            value={''}
                            name="delay_code_one"
                            onChange={() => { }}
                        >
                            <option>Select Delay Code One</option>
                            {
                                delayCodes.map((code, index) => {
                                    return (
                                        <option className="test option" key={index} value={code.category}>{`${code.category} ${code.description}`}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="test input">
                        <Lable
                            title='Delay Code 2'
                        />
                        <select
                            id="options"
                            className="options test"
                            value={''}
                            name="delay_code_two"
                            onChange={() => { }}
                        >
                            <option>Select Delay Code Two</option>
                            {
                                delayCodes.map((code, index) => {
                                    return (
                                        <option className="test option" key={index} value={code.category}>{`${code.category} ${code.description}`}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="test input">
                        <Lable
                            title='Delay Code 3'
                        />
                        <select
                            id="options"
                            className="options test"
                            value={''}
                            name="delay_code_three"
                            onChange={() => { }}
                        >
                            <option>Select Delay Code Three</option>
                            {
                                delayCodes.map((code, index) => {
                                    return (
                                        <option className="test option" key={index} value={code.category}>{`${code.category} ${code.description}`}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>

                <hr className='test line' />

                {/* flight other details */}
                <div className="test add-flight-content-header">
                    <h3 className="test section-header">Other Details</h3>
                </div>
                <div className="test form-container">
                    <div className="test input">
                        <Lable
                            title='PIC'
                        />
                        <DashboardTextfield
                            type='text'
                            name='pic'
                            value={''}
                            placeholder='Enter PIC'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='PICus'
                        />
                        <DashboardTextfield
                            type='text'
                            name='pic_us'
                            value={''}
                            placeholder='Enter PICus'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='SIC'
                        />
                        <DashboardTextfield
                            type='text'
                            name='sic'
                            value={''}
                            placeholder='Enter SIC'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Dual'
                        />
                        <DashboardTextfield
                            type='text'
                            name='dual'
                            value={''}
                            placeholder='Enter Dual'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Instructor'
                        />
                        <DashboardTextfield
                            type='text'
                            name='instructor'
                            value={''}
                            placeholder='Enter Instructor'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Examiner'
                        />
                        <DashboardTextfield
                            type='text'
                            name='examinar'
                            value={''}
                            placeholder='Enter Examinar'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Relief'
                        />
                        <DashboardTextfield
                            type='text'
                            name='relief'
                            value={''}
                            placeholder='Enter Relief'
                            onChange={() => { }}
                        />
                    </div>
                </div>

                <hr className='test line' />

                <div className="test form-container">
                    <div className="test input">
                        <Lable
                            title='Night'
                        />
                        <DashboardTextfield
                            type='text'
                            name='night'
                            value={''}
                            placeholder='Enter Night'
                            onChange={() => {}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='IFR'
                        />
                        <DashboardTextfield
                            type='text'
                            name='ifr'
                            value={''}
                            placeholder='Enter IFR'
                            onChange={() => {}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Act.Instr'
                        />
                        <DashboardTextfield
                            type='text'
                            name='act_instr'
                            value={''}
                            placeholder='Enter Act.Instr'
                            onChange={() => {}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Sim.Instr'
                        />
                        <DashboardTextfield
                            type='text'
                            name='sim_instr'
                            value={''}
                            placeholder='Enter Sim.Instr'
                            onChange={() => {}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='XC'
                        />
                        <DashboardTextfield
                            type='text'
                            name='xc'
                            value={''}
                            placeholder='Select XC'
                            onChange={() => {}}
                        />
                    </div>
                </div>

                <hr className='test line' />

                <div className="test form-container">
                    <div className="test input">
                        <Lable
                            title='Task'
                        />
                        <select
                            id="options"
                            className="options test"
                            value={''}
                            name="task"
                            onChange={() => {}}
                        >
                            <option value=''>Select Task</option>
                            <option value='PM'>PM</option>
                            <option value='PF'>PF</option>
                        </select>
                    </div>
                    <div className="test input">
                        <Lable
                            title='T/O Day'
                        />
                        <DashboardTextfield
                            type='text'
                            name='TO_day'
                            value={''}
                            placeholder='Enter T/O Day'
                            onChange={() => {}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='T/O Night'
                        />
                        <DashboardTextfield
                            type='text'
                            name='TO_night'
                            value={''}
                            placeholder='Enter T/O Night'
                            onChange={() => {}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='LDG Day'
                        />
                        <DashboardTextfield
                            type='text'
                            name='LDG_day'
                            value={''}
                            placeholder='Enter LDG Day'
                            onChange={() => {}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='LDG Night'
                        />
                        <DashboardTextfield
                            type='text'
                            name='LDG_night'
                            value={''}
                            placeholder='Enter LDG Night'
                            onChange={() => {}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Lifts'
                        />
                        <DashboardTextfield
                            type='text'
                            name='lifts'
                            value={''}
                            placeholder='Enter Lifts'
                            onChange={() => {}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Holding'
                        />
                        <DashboardTextfield
                            type='text'
                            name='holding'
                            value={''}
                            placeholder='Enter Holding'
                            onChange={() => {}}
                        />
                    </div>
                </div>

                <hr className='test line' />

                {/* flight passengers and fuel details */}
                <div className="test add-flight-content-header">
                    <h3 className="test section-header">Passengers and Fuel</h3>
                </div>
                <div className="test form-container">
                    <div className="test input">
                        <Lable
                            title='Pax / Passengers'
                        />
                        <DashboardTextfield
                            type='text'
                            name='pax'
                            value={''}
                            placeholder='Enter Pax Amount'
                            onChange={() => {}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Fuel Total'
                        />
                        <DashboardTextfield
                            type='text'
                            name='fuel_total'
                            value={''}
                            placeholder='Enter Fuel Total'
                            onChange={() => {}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Fuel Plan'
                        />
                        <DashboardTextfield
                            type='text'
                            name='fuel_plan'
                            value={''}
                            placeholder='Enter Fuel Plan'
                            onChange={() => {}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Fuel Used'
                        />
                        <DashboardTextfield
                            type='text'
                            name='fuel_used'
                            value={''}
                            placeholder='Enter Fuel Used'
                            onChange={() => {}}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='De-Icing'
                        />
                        <input
                            type="checkbox"
                            className="test checkbox"
                            name="de_icing"
                            checked={false}
                            onChange={() => {}}
                        />
                    </div>
                </div>

                <Section marginTop='20px'>
                    <Lable title="* are required fields. You must fill all the required fields" />
                </Section>

            </div>

        </div>
    );

}

export default SingleFlight;