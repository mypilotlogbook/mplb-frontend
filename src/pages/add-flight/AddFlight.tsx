import React, { useContext, useEffect, useState } from 'react';
import './AddFlight.scss';
import Alert from '../../components/alert/Alert';
import { AddFlightForm, AircraftProps, AirfieldProps, Approach, Operation, PilotProps } from '../../typescript/interfaces/interface';
import { Link } from 'react-router-dom';
import BackButton from '../../components/back-button/BackButton';
import Lable from '../../components/lable/Lable';
import DashboardTextfield from '../../components/dashboard-textfield/DashboardTextfield';
import { IdContext } from '../../context/UserIdContext';
import getAircraftsByUserId from '../../api/aircraft-endpoints/getAircraftsByUserId';
import getAirFields from '../../api/airfield-endpoints/fetchAirfields';
import getPilotsByUserId from '../../api/pilot-endpoints/getPilotsByUserId';
import addFlight from '../../api/flight-endpoints/addFlight';
import Section from '../../components/section/Section';

const AddFlight = () => {

  const [flight, setFlight] = useState<AddFlightForm>({
    date: '',
    aircraft: '',
    flight_nr: '',
    arrival: '',
    departure: '',
    std: '',
    out_time: '',
    takeoff: '',
    landing: '',
    in_time: '',
    sta: '',
    total_time: '',
    air: '',

    pilotOne: '',
    pilotTwo: '',
    pilotThree: '',
    pilotFour: '',
    approach: '',
    operation: '',

    crew_list: '',
    flight_log: '',
    training: '',
    remarks: '',

    delay_code_one: '',
    delay_code_two: '',
    delay_code_three: '',

    pic: '',
    pic_us: '',
    sic: '',
    dual: '',
    instructor: '',
    examinar: '',
    relief: '',

    night: '',
    ifr: '',
    act_instr: '',
    sim_instr: '',
    xc: '',

    task: '',
    TO_day: '',
    TO_night: '',
    LDG_day: '',
    LDG_night: '',
    lifts: '',
    holding: '',

    pax: '',
    fuel_plan: '',
    fuel_total: '',
    fuel_used: '',
    de_icing: false,
  });
  const [aircrafts, setAircrafts] = useState<AircraftProps[]>([]); 
  const [pilots, setPilots] = useState<PilotProps[]>([]); 
  const [airfields, setAirfileds] = useState<AirfieldProps[]>([]); 
  const [approaches, setApproaches] = useState<Approach[]>([
    {
      id: 1,
      category:"AL",
      description:"Autoland",
    },
    {
      id: 2,
      category:"ARA",
      description:"Airbone Radar Approaches",
    },
    {
      id: 3,
      category:"A-RNP",
      description:"Advance RNP",
    },
  ]); 
  const [operations, setOperations] = useState<Operation[]>([
    {
      id: 1,
      category:"ACRO",
      description:"Aerobatics",
    },
    {
      id: 2,
      category:"AEMS",
      description:"Aeroplane Emergency Medical System",
    },
    {
      id: 3,
      category:"AMBU",
      description:"Ambululance / HOSP",
    },
  ]); 
  const [delayCodes, setDelayCodes] = useState([
    {
      id: 1,
      category:"ACRO",
      description:"Aerobatics",
    },
    {
      id: 2,
      category:"AEMS",
      description:"Aeroplane Emergency Medical System",
    },
    {
      id: 3,
      category:"AMBU",
      description:"Ambululance / HOSP",
    },
  ]); 
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [message, setMessage] = useState('');

  const idContext = useContext(IdContext);
  if(!idContext) {
    throw new Error('IdContext must be used within a IdProvider');
  }
  const { id } = idContext; 

  const resetCredentials = () => {
    setFlight({
      date: '',
      aircraft: '',
      flight_nr: '',
      arrival: '',
      departure: '',
      std: '',
      out_time: '',
      takeoff: '',
      landing: '',
      in_time: '',
      sta: '',
      total_time: '',
      air: '',

      pilotOne: '',
      pilotTwo: '',
      pilotThree: '',
      pilotFour: '',
      approach: '',
      operation: '',

      delay_code_one: '',
      delay_code_two: '', 
      delay_code_three: '',

      pic: '',
      pic_us: '',
      sic: '',
      dual: '',
      instructor: '',
      examinar: '',
      relief: '',
    });
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
  
    setFlight((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" && e.target instanceof HTMLInputElement
          ? e.target.checked
          : value,
    }));
  };

  const handleSubmit = () => {
    const flightObj = {
      ...flight,
      userId: id,
    }
    console.log(flightObj);
    addFlight({
      flightObj: flightObj,
      setError: setError,
      setSuccess: setSuccess,
      setStatusCode: setStatusCode,
      setMessage: setMessage,
      resetCredentials: resetCredentials, 
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
    console.log(flight);
  }, [flight]);

  return (
    <div className='test add-flight'>

      {
        error && <Alert
          message={message}
          statusCode={statusCode}
          type='error'
        />
      }
      {
        success && <Alert
          message={message}
          statusCode={statusCode}
          type='success'
        />
      }

      <div className="test single-flight-header">
        <Link to='/dashboard/flights'>
            <BackButton image='https://res.cloudinary.com/dv9ax00l4/image/upload/v1722961275/arrow-small-left_llmk3x.png'/>
        </Link>
        <h6 className="test page-subtitle">Back to Flights</h6>
      </div>

      <div className="test add-flight-content">
        <h1 className="test header">Add New Flight</h1>
        <h5 className="test subheader">Fill the details for add a new flight</h5>

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
              value={flight?.date || ''}
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
              value={flight?.flight_nr || ''}
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
              value={flight.std || ''}
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
              value={flight.out_time || ''}
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
              value={flight.takeoff || ''}
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
              value={flight.landing || ''}
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
              value={flight.in_time || ''}
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
              value={flight.sta || ''}
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
              value={flight.total_time || ''}
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
              value={flight.air || ''}
              placeholder='Enter the Air'
              onChange={handleChange}
            />
          </div>
        </div>

        <hr className='test line'/>

        {/* flight cabin crew and pilots details */}
        <div className="test add-flight-content-header">
          <h3 className="test section-header">Pilots & Cabin Crew</h3>
        </div>
        <div className="test form-container">
          <div className="test input">
            <Lable
              title='Pilot 1 *'
            />
            <select
              id="options"
              className="options test"
              name="pilotOne"
              onChange={handleChange}
            >
              <option>Select Pilot One</option>
              {
                pilots.map((pilot, index) => {
                  return (
                    <option className="test option" key={index} value={pilot._id}>{`${pilot.fname} ${pilot.lname}`}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="test input">
            <Lable
              title='Pilot 2 *'
            />
            <select
              id="options"
              className="options test"
              name="pilotTwo"
              onChange={handleChange}
            >
              <option>Select Pilot Two</option>
              {
                pilots.map((pilot, index) => {
                  return (
                    <option className="test option" key={index} value={pilot._id}>{`${pilot.fname} ${pilot.lname}`}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="test input">
            <Lable
              title='Pilot 3 *'
            />
            <select
              id="options"
              className="options test"
              name="pilotThree"
              onChange={handleChange}
            >
              <option>Select Pilot Three</option>
              {
                pilots.map((pilot, index) => {
                  return (
                    <option className="test option" key={index} value={pilot._id}>{`${pilot.fname} ${pilot.lname}`}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="test input">
            <Lable
              title='Pilot 4 *'
            />
            <select
              id="options"
              className="options test"
              name="pilotFour"
              onChange={handleChange}
            >
              <option>Select Pilot Four</option>
              {
                pilots.map((pilot, index) => {
                  return (
                    <option className="test option" key={index} value={pilot._id}>{`${pilot.fname} ${pilot.lname}`}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="test input">
            <Lable
              title='Approach'
            />
            <select
              id="options"
              className="options test"
              value={flight.approach}
              name="approach"
              onChange={handleChange}
            >
              <option>Select Approach</option>
              {
                approaches.map((approach, index) => {
                  return (
                    <option className="test option" key={index} value={approach.category}>{`${approach.category} - ${approach.description}`}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="test input">
            <Lable
              title='Operation'
            />
            <select
              id="options"
              className="options test"
              value={flight.operation}
              name="operation"
              onChange={handleChange}
            >
              <option>Select Operation</option>
              {
                operations.map((operation, index) => {
                  return (
                    <option className="test option" key={index} value={operation.category}>{`${operation.category} - ${operation.description}`}</option>
                  )
                })
              }
            </select>
          </div>
        </div>

        <hr className='test line'/>

        <div className="test form-container-two">
          <div className="test input">
            <Lable
              title='Crew List'
            />
            <DashboardTextfield
              type='text'
              name='crew_list'
              value={flight.crew_list || ''}
              placeholder='Enter Crew List'
              onChange={handleChange}
              // isDescription={true}
            />
          </div>
          <div className="test input">
            <Lable
              title='Flight Log'
            />
            <DashboardTextfield
              type='text'
              name='flight_log'
              value={flight.flight_log || ''}
              placeholder='Enter Flight Log'
              onChange={handleChange}
              // isDescription={true}
            />
          </div>
          <div className="test input">
            <Lable
              title='Training'
            />
            <DashboardTextfield
              type='text'
              name='training'
              value={flight.training || ''}
              placeholder='Enter Training'
              onChange={handleChange}
              // isDescription={true}
            />
          </div>
          <div className="test input">
            <Lable
              title='Remarks'
            />
            <DashboardTextfield
              type='text'
              name='remarks'
              value={flight.remarks || ''}
              placeholder='Enter Remarks'
              onChange={handleChange}
              // isDescription={true}
            />
          </div>
        </div>
        
        <hr className='test line'/>

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
              value={flight.delay_code_one}
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
              value={flight.delay_code_two}
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
              value={flight.delay_code_three}
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

        <hr className='test line'/>

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
              value={flight.pic || ''}
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
              value={flight.pic_us || ''}
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
              value={flight.sic || ''}
              placeholder='Enter SIC'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Dual'
            />
            <DashboardTextfield
              type='text'
              name='dual'
              value={flight.dual || ''}
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
              value={flight.instructor || ''}
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
              value={flight.examinar || ''}
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
              value={flight.relief || ''}
              placeholder='Enter Relief'
              onChange={handleChange}
            />
          </div>
        </div>
        
        <hr className='test line'/>

        <div className="test form-container">
          <div className="test input">
            <Lable
              title='Night'
            />
            <DashboardTextfield
              type='text'
              name='night'
              value={flight.night || ''}
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
              value={flight.ifr || ''}
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
              value={flight.act_instr || ''}
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
              value={flight.sim_instr || ''}
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
              value={flight.xc || ''}
              placeholder='Select XC'
              onChange={handleChange}
            />
          </div>
        </div>

        <hr className='test line'/>

        <div className="test form-container">
          <div className="test input">
            <Lable
              title='Task'
            />
            <select
              id="options"
              className="options test"
              value={flight.task}
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
              value={flight.TO_day || ''}
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
              value={flight.TO_night || ''}
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
              value={flight.LDG_day || ''}
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
              value={flight.LDG_night || ''}
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
              value={flight.lifts || ''}
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
              value={flight.holding || ''}
              placeholder='Enter Holding'
              onChange={handleChange}
            />
          </div>
        </div>

        <hr className='test line'/>

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
              value={flight.pax || ''}
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
              value={flight.fuel_total || ''}
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
              value={flight.fuel_plan || ''}
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
              value={flight.fuel_used || ''}
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
                checked={flight.de_icing || false}
                onChange={handleChange}
            />
          </div>
        </div>

        <div className="test form-container">
          <div className="test input">
            <Lable title="Click here to add flight" />
            <button className="test add-btn" onClick={handleSubmit}>
              Add Flight
            </button>
          </div>
        </div>

      </div>

    </div>
  );

}

export default AddFlight;