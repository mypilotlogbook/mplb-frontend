import React, { useState } from 'react';
import './Flights.scss';
import PageHeader from '../../components/page-header/PageHeader';
import { Link } from 'react-router-dom';
import Pilot from '../../components/pilot/Pilot';
import NoData from '../../components/no-data/NoData';
import { PilotProps } from '../../typescript/interfaces/interface';

const Flights = () => {

    const [pilots, setPilots] = useState<PilotProps[]>([]);
    const [filteredPilots, setFilteredPilots] = useState<PilotProps[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

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
                        // value={searchTerm}
                        // onChange={handleSearchChange}
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
                <h6 className="test search-results-text">Search Results : <span className='test result-count'>{filteredPilots.length}</span></h6>
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
                        filteredPilots.length === 0 ? <NoData message='No flights data available'/> :
                        filteredPilots.map((pilot, index) => {
                        return (
                            <Pilot
                                key={index}
                                {...pilot}
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