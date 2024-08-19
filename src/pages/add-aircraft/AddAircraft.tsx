import React, { useContext, useState } from 'react';
import './AddAircraft.scss';
import { IdContext } from '../../context/UserIdContext';
import { AircraftProps } from '../../typescript/interfaces/interface';
import Alert from '../../components/alert/Alert';
import { Link } from 'react-router-dom';
import BackButton from '../../components/back-button/BackButton';
import DashboardTextfield from '../../components/dashboard-textfield/DashboardTextfield';
import Lable from '../../components/lable/Lable';

const AddAircraft = () => {

  const [aircraft, setAircraft] = useState<AircraftProps>({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [message, setMessage] = useState('');

  const idContext = useContext(IdContext);
  if(!idContext) {
    throw new Error('Add Aircarft must be used within a IdProvider');
  }
  const { id } = idContext; 

  const resetCredentials = () => {
    setAircraft({});
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAircraft((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='test add-aircraft'>

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

      <div className="test single-aircraft-header">
        <Link to='/dashboard/aircrafts'>
            <BackButton image='https://res.cloudinary.com/dv9ax00l4/image/upload/v1722961275/arrow-small-left_llmk3x.png'/>
        </Link>
        <h6 className="test page-subtitle">Back to Aircrafts</h6>
      </div>

      <div className="test add-aircraft-content">
        <h1 className="test header">Add New Aircraft</h1>
        <h5 className="test subheader">Fill the details for add a new aircraft</h5>
        <div className="test form-container">

          <div className="test search-option-section">
            <Lable
              title='Type'
            />
            <select id="options" className='options test'>
              <option value="USA" className='test option'>USA</option>
              <option value="UK" className='test option'>UK</option>
              <option value="Canada" className='test option'>Canada</option>
              <option value="Australia" className='test option'>Australia</option>
              <option value="Sri Lanka" className='test option'>Sri Lanka</option>
              <option value="Afghanistan" className='test option'>Afghanistan</option>
            </select>
          </div>
          <div className="test input">
            <Lable
              title='Company'
            />
            <DashboardTextfield
              type='text'
              name='company'
              value={aircraft?.company || ''}
              placeholder='Enter aircraft company name'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Registration Number'
            />
            <DashboardTextfield
              type='text'
              name='registration_no'
              value={aircraft?.registration_no || ''}
              placeholder='Enter aircraft registration number'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Fin'
            />
            <DashboardTextfield
              type='text'
              name='fin'
              value={aircraft?.fin || ''}
              placeholder='Enter pilot first name'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Model'
            />
            <DashboardTextfield
              type='text'
              name='model'
              value={aircraft?.model || ''}
              placeholder='Enter aircraft model'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Varient'
            />
            <DashboardTextfield
              type='text'
              name='varient'
              value={aircraft?.varient || ''}
              placeholder='Enter aircraft varient'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Manufacturer'
            />
            <DashboardTextfield
              type='text'
              name='manufacturer'
              value={aircraft?.manufacturer || ''}
              placeholder='Enter aircraft manufacturer'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Type Rating'
            />
            <DashboardTextfield
              type='text'
              name='type_rating'
              value={aircraft?.type_rating || ''}
              placeholder='Enter aircraft type_rating'
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable
              title='Passenger'
            />
            <DashboardTextfield
              type='text'
              name='passenger'
              value={aircraft?.passenger || ''}
              placeholder='Enter aircraft passenger count'
              onChange={handleChange}
            />
          </div>
          <div className="test search-option-section">
            <Lable
              title='Class'
            />
            <select id="options" className='options test'>
              <option value="USA" className='test option'>USA</option>
              <option value="UK" className='test option'>UK</option>
              <option value="Canada" className='test option'>Canada</option>
              <option value="Australia" className='test option'>Australia</option>
              <option value="Sri Lanka" className='test option'>Sri Lanka</option>
              <option value="Afghanistan" className='test option'>Afghanistan</option>
            </select>
          </div>
          <div className="test search-option-section">
            <Lable
              title='Sub Class'
            />
            <select id="options" className='options test'>
              <option value="USA" className='test option'>USA</option>
              <option value="UK" className='test option'>UK</option>
              <option value="Canada" className='test option'>Canada</option>
              <option value="Australia" className='test option'>Australia</option>
              <option value="Sri Lanka" className='test option'>Sri Lanka</option>
              <option value="Afghanistan" className='test option'>Afghanistan</option>
            </select>
          </div>
          <div className="test search-option-section">
            <Lable
              title='Category'
            />
            <select id="options" className='options test'>
              <option value="USA" className='test option'>USA</option>
              <option value="UK" className='test option'>UK</option>
              <option value="Canada" className='test option'>Canada</option>
              <option value="Australia" className='test option'>Australia</option>
              <option value="Sri Lanka" className='test option'>Sri Lanka</option>
              <option value="Afghanistan" className='test option'>Afghanistan</option>
            </select>
          </div>
          <div className="test search-option-section">
            <Lable
              title='Power'
            />
            <select id="options" className='options test'>
              <option value="USA" className='test option'>USA</option>
              <option value="UK" className='test option'>UK</option>
              <option value="Canada" className='test option'>Canada</option>
              <option value="Australia" className='test option'>Australia</option>
              <option value="Sri Lanka" className='test option'>Sri Lanka</option>
              <option value="Afghanistan" className='test option'>Afghanistan</option>
            </select>
          </div>
          <div className="test search-option-section">
            <Lable
              title='Auto load Hours'
            />
            <select id="options" className='options test'>
              <option value="USA" className='test option'>USA</option>
              <option value="UK" className='test option'>UK</option>
              <option value="Canada" className='test option'>Canada</option>
              <option value="Australia" className='test option'>Australia</option>
              <option value="Sri Lanka" className='test option'>Sri Lanka</option>
              <option value="Afghanistan" className='test option'>Afghanistan</option>
            </select>
          </div>
          <div className="test search-option-section">
            <Lable
              title='Defualt Operation'
            />
            <select id="options" className='options test'>
              <option value="USA" className='test option'>USA</option>
              <option value="UK" className='test option'>UK</option>
              <option value="Canada" className='test option'>Canada</option>
              <option value="Australia" className='test option'>Australia</option>
              <option value="Sri Lanka" className='test option'>Sri Lanka</option>
              <option value="Afghanistan" className='test option'>Afghanistan</option>
            </select>
          </div>
          <div className="test search-option-section">
            <Lable
              title='Defualt Approach'
            />
            <select id="options" className='options test'>
              <option value="USA" className='test option'>USA</option>
              <option value="UK" className='test option'>UK</option>
              <option value="Canada" className='test option'>Canada</option>
              <option value="Australia" className='test option'>Australia</option>
              <option value="Sri Lanka" className='test option'>Sri Lanka</option>
              <option value="Afghanistan" className='test option'>Afghanistan</option>
            </select>
          </div>
          
        </div>

        <hr className='line'/>
        
        <div className="test checkbox-section">
          <div className="test checkbox-section-one">
            <div className="test input">
              <Lable
                title='Aerobatic'
              />
              <input type="checkbox" className="test checkbox" />
            </div>
            <div className="test input">
              <Lable
                title='High Performance'
              />
              <input type="checkbox" className="test checkbox" />
            </div>
            <div className="test input">
              <Lable
                title='More than 5700 kg'
              />
              <input type="checkbox" className="test checkbox" />
            </div>
            <div className="test input">
              <Lable
                title='Complex'
              />
              <input type="checkbox" className="test checkbox" />
            </div>
          </div>
          <div className="test checkbox-section-one">
            <div className="test input">
              <Lable
                title='TM Glider'
              />
              <input type="checkbox" className="test checkbox" />
            </div>
            <div className="test input">
              <Lable
                title='Tail Wheel'
              />
              <input type="checkbox" className="test checkbox" />
            </div>
            <div className="test input">
              <Lable
                title='EFIS'
              />
              <input type="checkbox" className="test checkbox" />
            </div>
            <div className="test input">
              <Lable
                title='Cross Country'
              />
              <input type="checkbox" className="test checkbox" />
            </div>
          </div>
          <div className="test checkbox-section-one">
            <div className="test input">
              <Lable
                title='Relief Pilot'
              />
              <input type="checkbox" className="test checkbox" />
            </div>
            <div className="test input">
              <Lable
                title='IFR'
              />
              <input type="checkbox" className="test checkbox" />
            </div>
            <div className="test input">
              <Lable
                title='Actual Instrument'
              />
              <input type="checkbox" className="test checkbox" />
            </div>
            <div className="test input">
              <Lable
                title='Sim Instrument'
              />
              <input type="checkbox" className="test checkbox" />
            </div>
          </div>
        </div>

        <div className="test form-container">
          <div className="test input">
              <Lable
                title='Click here to add aircraft'
              />
              <button className="test add-btn" onClick={() => {}}>Add Aircraft</button>
            </div>
        </div>

      </div>

    </div>
  );

}

export default AddAircraft;
