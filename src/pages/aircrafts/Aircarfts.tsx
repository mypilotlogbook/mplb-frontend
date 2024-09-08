import React, { useContext, useEffect, useState } from 'react';
import './Aircarfts.scss';
import PageHeader from '../../components/page-header/PageHeader';
import { AircraftProps } from '../../typescript/interfaces/interface';
import Aircraft from '../../components/aircraft/Aircraft';
import getAircraftsByUserId from '../../api/aircraft-endpoints/getAircraftsByUserId';
import { IdContext } from '../../context/UserIdContext';
import { Link } from 'react-router-dom';
import NoData from '../../components/no-data/NoData';
import Alert from '../../components/alert/Alert';
import AuthButton from '../../components/auth-button/AuthButton';
import generateAllAircraftsPdf from '../../api/report-endpoints/generateAllAircraftsReport';
import generateSelectedAircraftsPdf from '../../api/report-endpoints/generateSelectedAircrafts';

const Aircarfts = () => {

    const [aircrafts, setAircrafts] = useState<AircraftProps[]>([]);
    const [filteredAircrafts, setFilteredAircrafts] = useState<AircraftProps[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [statusCode, setStatusCode] = useState(0);
    const [message, setMessage] = useState('');

    const idContext = useContext(IdContext);
    if (!idContext) {
        throw new Error('AirCrafts Page must be used within a IdProvider');
    }
    const { id } = idContext;

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const generateAllAircraftsReportFunction = () => {
      const isConfirmed = window.confirm('Are you sure want to export your all the aircraft document? ');
      if(isConfirmed) {
        generateAllAircraftsPdf({
            userId: id,
            setSuccess: setSuccess,
            setError: setError,
            setStatusCode: setStatusCode,
            setMessage: setMessage
        });
      }else {
        alert('Document export process was cancelled');
      }
    }
  
    const generateSelectedAircraftsReportFunction = () => {
      const isConfirmed = window.confirm('Are you sure want to export selected aircrafts document? ');
      if(isConfirmed) {
        if(filteredAircrafts.length > 0) {
          generateSelectedAircraftsPdf({
            aircraftsList: filteredAircrafts,
            setSuccess: setSuccess,
            setError: setError,
            setStatusCode: setStatusCode,
            setMessage: setMessage
          });
        }else {
          alert('Aircraft table is empty. Please select a aircraft or search in the textfield.');
        }
      } else {
        alert('Document export process was cancelled');
      }
      
    }

    const getAircrafts = async () => {
        getAircraftsByUserId({
            userId: id,
            setAircrafts: setAircrafts,
        });
    }

    useEffect(() => {
        getAircrafts();
    }, []);

    useEffect(() => {
        const results = aircrafts.filter((aircraft) =>
            aircraft.manufacturer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            aircraft.type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            aircraft.model?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredAircrafts(results);
    }, [searchTerm, aircrafts]);

    return (
        <div className='test aircrafts'>

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

            <PageHeader
                title='Aircrafts List'
                subTitle='List down all the aircarfts and manage them.'
            />

            <div className="test search-section">
                <div className="test searchbar">
                    <input 
                        type="text" 
                        placeholder="Search for model / Manufacturer of an aircraft" 
                        className="test search-input"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722774870/icons8-search-480_msptia.png" alt="search-logo" className="test search-logo" />
                </div>
                <Link to='/dashboard/aircraft/add-aircraft' className='test add-aircraft-btn-link'>
                    <button className='test add-aircraft-btn'>
                        Add Aircraft
                    </button>
                </Link>
            </div>

            <div className="test search-results">
                <h6 className="test search-results-text">Search Results : <span className='test result-count'>{filteredAircrafts.length}</span></h6>
            </div>

            <div className="test aircraft-table">
                <div className="test table-header">
                    <div className="test header">
                        <h5 className="test header-text">Type</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Manufacturer</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Model - Varient</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Class</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Category</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Power</h5>
                    </div>
                </div>
                <div className="test table-body">
                    {
                        filteredAircrafts.length === 0 ? <NoData message='No aircrafts data available'/>:
                        filteredAircrafts.map((aircraft, index) => {
                        return (
                            <Aircraft 
                                key={index}
                                {...aircraft}
                            />
                        )
                        })
                    }
                </div>

                <hr className='test hard-line'/>

                {/* report section */}
                <div className="test report-section">
                    <h3 className="test section-header">Aircrafts Reports</h3>
                    <h5 className="test section-subheader">Generate reports according to all the aircrafts / selected aircrafts</h5>
                    <hr className='test line'/>
                    <div className="test report-content-section">
                        <div className="r-section test">
                            <h5 className="test section-subheader">Export all the aircrafts in our database. In here you can export all the aircrafts data What you added to this system.</h5>
                            <AuthButton 
                                title='All Aircraft Report'
                                backgroundColor='black'
                                textColor='white'
                                onClick={generateAllAircraftsReportFunction}
                            />
                        </div>
                        <div className="r-section test">
                            <h5 className="test section-subheader">Export selected aircrafts according to your choice. In here Please selected a country or search the pilots you wanted to export.</h5>
                            <AuthButton 
                                title='Selected Aircrafts Report'
                                textColor='black'
                                borderColor='black'
                                onClick={generateSelectedAircraftsReportFunction}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Aircarfts;