import React, { useContext, useEffect, useState } from 'react';
import './Flights.scss';
import PageHeader from '../../components/page-header/PageHeader';
import { Link } from 'react-router-dom';
import NoData from '../../components/no-data/NoData';
import { FlightProps } from '../../typescript/interfaces/interface';
import { IdContext } from '../../context/UserIdContext';
import getFlightsByUserId from '../../api/flight-endpoints/getFlightsByUserId';
import Flight from '../../components/flight/Flight';
import AuthButton from '../../components/auth-button/AuthButton';
import Alert from '../../components/alert/Alert';
import generateSelectedFlightsPdf from '../../api/report-endpoints/generateSelectedFlightsReport';
import generateAllFlightsPdf from '../../api/report-endpoints/generateAllFlightsReport';

const Flights = () => {

    const [flights, setFlights] = useState<FlightProps[]>([]);
    const [filteredFlights, setFilteredFlights] = useState<FlightProps[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [statusCode, setStatusCode] = useState(0);
    const [message, setMessage] = useState('');

    const idContext = useContext(IdContext);
    if (!idContext) {
        throw new Error('Flights Page must be used within a IdProvider');
    }
    const { id } = idContext;

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const generateAllTheFlightsReportFunction = () => {
      const isConfirmed = window.confirm('Are you sure want to export pilots document? ');
      if(isConfirmed) {
        generateAllFlightsPdf({
          setSuccess: setSuccess,
          setStatusCode: setStatusCode,
          setMessage: setMessage,
          setError: setError,
          userId: id
        });
      }else {
        alert('Document export process was cancelled');
      }
    }
  
    const generateSelectedFlightsReportFunction = () => {
      const isConfirmed = window.confirm('Are you sure want to export pilots document? ');
      if(isConfirmed) {
        if(filteredFlights.length > 0) {
            generateSelectedFlightsPdf({
                flightsList: filteredFlights,
                setSuccess: setSuccess,
                setStatusCode: setStatusCode,
                setMessage: setMessage,
                setError: setError,
            });
        }else {
          alert('Pilots table is empty. Please select a pilot or search in the textfield.');
        }
      } else {
        alert('Document export process was cancelled');
      }
      
    }

    const getFlights = () => {
        getFlightsByUserId({
            userId: id,
            setFlights: setFlights,
        });
    }

    useEffect(()=> {
        getFlights();
    },[]);

    useEffect(() => {
        const results = flights.filter((flight) =>
            flight.arrival.airport_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            flight.departure.airport_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            flight.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
            flight.flight_nr?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFlights(results);
    }, [searchTerm, flights]);

    return (
        <div className='test flights'>

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
                title='Flights List'
                subTitle='Manage all the flights and track their data.'
            />

            <div className="test search-section">
                <div className="test searchbar">
                    <input 
                        type="text" 
                        placeholder="Search flights by arrival / departure / flight registration number" 
                        className="test search-input"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722774870/icons8-search-480_msptia.png" alt="search-logo" className="test search-logo" />
                </div>
                <Link to='/dashboard/flight/add-flight' className='test add-flight-btn-link'>
                    <button className='test add-flight-btn'>
                        Add Flight
                    </button>
                </Link>
            </div>
            <div className="test search-results">
                <h6 className="test search-results-text">Search Results : <span className='test result-count'>{filteredFlights.length}</span></h6>
            </div>.
            <div className="test flights-table">
                <div className="test table-header">
                    <div className="test header">
                        <h5 className="test header-text">Date</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Flight Number</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Arrival</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Departure</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">In</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Out</h5>
                    </div>
                </div>
                <div className="test table-body">
                    {
                        filteredFlights.length === 0 ? <NoData message='No flights data available'/> :
                        filteredFlights.map((flight, index) => {
                        return (
                            <Flight
                                key={index}
                                {...flight}
                            />
                        )
                        })
                    }
                </div>

                <hr className='test hard-line'/>

                {/* report section */}
                <div className="test report-section">
                    <h3 className="test section-header">Flight Reports</h3>
                    <h5 className="test section-subheader">Generate reports according to all the flights / selected flights</h5>
                    <hr className='test line'/>
                    <div className="test report-content-section">
                        <div className="r-section test">
                            <h5 className="test section-subheader">Export all the flights in our database. In here you can export all the flights data What you added to this system.</h5>
                            <AuthButton 
                                title='All Flights Report'
                                backgroundColor='black'
                                textColor='white'
                                onClick={generateAllTheFlightsReportFunction}
                            />
                        </div>
                        <div className="r-section test">
                            <h5 className="test section-subheader">Export selected pilots according to your choice. In here Please selected a country or search the pilots you wanted to export.</h5>
                            <AuthButton 
                                title='Selected Flights Report'
                                textColor='black'
                                borderColor='black'
                                onClick={generateSelectedFlightsReportFunction}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Flights;