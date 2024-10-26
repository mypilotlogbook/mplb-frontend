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
import deleteFlight from '../../api/flight-endpoints/deleteFlight';

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

    const handleDelete = () => {
        /* eslint-disable no-restricted-globals */
        const isConfirmed = confirm('Are you sure want to delete this aircraft record?');
        if(isConfirmed) {
            deleteFlight({
            flightId: flightId || null,
            setStatusCode: setStatusCode,
            setSuccess: setSuccess,
            setError: setError,
            setMessage: setMessage,
            navigate: navigate,
        });
        }
    }

    const handleUpdate = () => {
        
    }

    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;

        setFormData((prevData) => {
            if (!prevData) return prevData; 

            const isObjectWithId = (field: any): field is { _id: string } => {
            return field && typeof field === "object" && "_id" in field;
            };

            return {
            ...prevData,
            [name]: type === "checkbox" && e.target instanceof HTMLInputElement
                ? e.target.checked
                : isObjectWithId(prevData[name as keyof UpdateFlightProps])
                ? { _id: value } 
                : value, 
            };
        });
    };

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

    const formatDateForInput = (dateString: string) => {
        const date = new Date(dateString);
        return date.toISOString().split("T")[0]; 
    };

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
                            <button className="test save-button" onClick={handleUpdate}>Save Changes</button>
                        </Tooltip>
                        <Tooltip title="Delete Flight" arrow>
                            <button className="test delete-button" onClick={handleDelete}>Delete Flight</button>
                        </Tooltip>
                    </div>
                </div>

                <Section marginTop='20px'>
                    <Lable title="* are required fields. You must fill in all the required fields" />
                </Section>

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
                            value={formData?.date ? formatDateForInput(formData.date) : ""}
                            placeholder='Enter the date of flight'
                            onChange={handleChange}
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
                            value={
                                typeof formData?.aircraft === 'object' 
                                ? formData.aircraft._id 
                                : formData?.aircraft || ''
                            }
                            onChange={handleChange}
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
                            value={formData?.flight_nr || ""}
                            placeholder='Enter the flight nr'
                            onChange={handleChange}
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
                            value={
                                typeof formData?.arrival === 'object' 
                                ? formData.arrival._id 
                                : formData?.arrival || ''
                            }
                            onChange={handleChange}
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
                            value={
                                typeof formData?.departure === 'object' 
                                ? formData.departure._id 
                                : formData?.departure || ''
                            }
                            name="departure"
                            onChange={handleChange}
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
                            value={formData?.std || ""}
                            placeholder='Enter the STD'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Out'
                        />
                        <DashboardTextfield
                            type='text'
                            name='out_time'
                            value={formData?.out_time || ""}
                            placeholder='Enter the Out Time'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Takeoff'
                        />
                        <DashboardTextfield
                            type='text'
                            name='takeoff'
                            value={formData?.takeoff || ""}
                            placeholder='Enter the Takeoff'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Landing'
                        />
                        <DashboardTextfield
                            type='text'
                            name='landing'
                            value={formData?.landing || ""}
                            placeholder='Enter the Landing'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='In'
                        />
                        <DashboardTextfield
                            type='text'
                            name='in_time'
                            value={formData?.in_time || ""}
                            placeholder='Enter the In Time'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='STA'
                        />
                        <DashboardTextfield
                            type='text'
                            name='sta'
                            value={formData?.sta || ""}
                            placeholder='Enter the STA'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Total Time'
                        />
                        <DashboardTextfield
                            type='text'
                            name='total_time'
                            value={formData?.total_time || ""}
                            placeholder='Enter the total time'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Air'
                        />
                        <DashboardTextfield
                            type='text'
                            name='air'
                            value={formData?.air || ""}
                            placeholder='Enter the Air'
                            onChange={handleChange}
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
                            value={formData?.crew_list || ""}
                            placeholder='Enter Crew List'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Flight Log'
                        />
                        <DashboardTextfield
                            type='text'
                            name='flight_log'
                            value={formData?.flight_log || ""}
                            placeholder='Enter Flight Log'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Training'
                        />
                        <DashboardTextfield
                            type='text'
                            name='training'
                            value={formData?.training || ""}
                            placeholder='Enter Training'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Remarks'
                        />
                        <DashboardTextfield
                            type='text'
                            name='remarks'
                            value={formData?.remarks || ""}
                            placeholder='Enter Remarks'
                            onChange={handleChange}
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
                            value={formData?.delay_code_one || ""}
                            name="delay_code_one"
                            onChange={handleChange}
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
                            value={formData?.delay_code_two || ""}
                            name="delay_code_two"
                            onChange={handleChange}
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
                            value={formData?.delay_code_three || ""}
                            name="delay_code_three"
                            onChange={handleChange}
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
                            value={formData?.pic || ""}
                            placeholder='Enter PIC'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='PICus'
                        />
                        <DashboardTextfield
                            type='text'
                            name='pic_us'
                            value={formData?.pic_us || ""}
                            placeholder='Enter PICus'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='SIC'
                        />
                        <DashboardTextfield
                            type='text'
                            name='sic'
                            value={formData?.sic || ""}
                            placeholder='Enter SIC'
                            onChange={handleChange}
                        />
                        {formData?.sic}
                    </div>
                    <div className="test input">
                        <Lable
                            title='Dual'
                        />
                        <DashboardTextfield
                            type='text'
                            name='dual'
                            value={formData?.dual || ""}
                            placeholder='Enter Dual'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Instructor'
                        />
                        <DashboardTextfield
                            type='text'
                            name='instructor'
                            value={formData?.instructor || ""}
                            placeholder='Enter Instructor'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Examiner'
                        />
                        <DashboardTextfield
                            type='text'
                            name='examinar'
                            value={formData?.examinar || ""}
                            placeholder='Enter Examinar'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Relief'
                        />
                        <DashboardTextfield
                            type='text'
                            name='relief'
                            value={formData?.relief || ""}
                            placeholder='Enter Relief'
                            onChange={handleChange}
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
                            value={formData?.night || ""}
                            placeholder='Enter Night'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='IFR'
                        />
                        <DashboardTextfield
                            type='text'
                            name='ifr'
                            value={formData?.ifr || ""}
                            placeholder='Enter IFR'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Act.Instr'
                        />
                        <DashboardTextfield
                            type='text'
                            name='act_instr'
                            value={formData?.act_instr || ""}
                            placeholder='Enter Act.Instr'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Sim.Instr'
                        />
                        <DashboardTextfield
                            type='text'
                            name='sim_instr'
                            value={formData?.sim_instr || ""}
                            placeholder='Enter Sim.Instr'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='XC'
                        />
                        <DashboardTextfield
                            type='text'
                            name='xc'
                            value={formData?.xc || ""}
                            placeholder='Select XC'
                            onChange={handleChange}
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
                            value={formData?.task || ""}
                            name="task"
                            onChange={handleChange}
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
                            value={formData?.TO_day || ""}
                            placeholder='Enter T/O Day'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='T/O Night'
                        />
                        <DashboardTextfield
                            type='text'
                            name='TO_night'
                            value={formData?.TO_night || ""}
                            placeholder='Enter T/O Night'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='LDG Day'
                        />
                        <DashboardTextfield
                            type='text'
                            name='LDG_day'
                            value={formData?.LDG_day || ""}
                            placeholder='Enter LDG Day'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='LDG Night'
                        />
                        <DashboardTextfield
                            type='text'
                            name='LDG_night'
                            value={formData?.LDG_night || ""}
                            placeholder='Enter LDG Night'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Lifts'
                        />
                        <DashboardTextfield
                            type='text'
                            name='lifts'
                            value={formData?.lifts || ""}
                            placeholder='Enter Lifts'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Holding'
                        />
                        <DashboardTextfield
                            type='text'
                            name='holding'
                            value={formData?.holding || ""}
                            placeholder='Enter Holding'
                            onChange={handleChange}
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
                            value={formData?.pax || ""}
                            placeholder='Enter Pax Amount'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Fuel Total'
                        />
                        <DashboardTextfield
                            type='text'
                            name='fuel_total'
                            value={formData?.fuel_total || ""}
                            placeholder='Enter Fuel Total'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Fuel Plan'
                        />
                        <DashboardTextfield
                            type='text'
                            name='fuel_plan'
                            value={formData?.fuel_plan || ""}
                            placeholder='Enter Fuel Plan'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="test input">
                        <Lable
                            title='Fuel Used'
                        />
                        <DashboardTextfield
                            type='text'
                            name='fuel_used'
                            value={formData?.fuel_used || ""}
                            placeholder='Enter Fuel Used'
                            onChange={handleChange}
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
                            checked={formData?.de_icing}
                            onChange={handleChange}
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