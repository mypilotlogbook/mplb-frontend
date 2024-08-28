import React, { useContext, useEffect, useState } from 'react';
import './Flights.scss';
import PageHeader from '../../components/page-header/PageHeader';
import { Link } from 'react-router-dom';
import NoData from '../../components/no-data/NoData';
import { FlightProps } from '../../typescript/interfaces/interface';
import { IdContext } from '../../context/UserIdContext';
import getFlightsByUserId from '../../api/flight-endpoints/getFlightsByUserId';
import Flight from '../../components/flight/Flight';

const Flights = () => {

    const [flights, setFlights] = useState<FlightProps[]>([]);
    const [filteredFlights, setFilteredFlights] = useState<FlightProps[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const idContext = useContext(IdContext);
    if (!idContext) {
        throw new Error('Flights Page must be used within a IdProvider');
    }
    const { id } = idContext;

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

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
            flight.flight_nr?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFlights(results);
    }, [searchTerm, flights]);

    return (
        <div className='test flights'>
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
            </div>
        </div>
    );

}

export default Flights;