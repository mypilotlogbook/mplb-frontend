import React, { useContext, useEffect, useState } from 'react';
import './Aircarfts.scss';
import PageHeader from '../../components/page-header/PageHeader';
import { AircraftProps } from '../../typescript/interfaces/interface';
import Aircraft from '../../components/aircraft/Aircraft';
import getAircraftsByUserId from '../../api/aircraft-endpoints/getAircraftsByUserId';
import { IdContext } from '../../context/UserIdContext';
import { Link } from 'react-router-dom';
import NoData from '../../components/no-data/NoData';

const Aircarfts = () => {

    const [aircrafts, setAircrafts] = useState<AircraftProps[]>([]);
    const [filteredAircrafts, setFilteredAircrafts] = useState<AircraftProps[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const idContext = useContext(IdContext);
    if (!idContext) {
        throw new Error('AirCrafts Page must be used within a IdProvider');
    }
    const { id } = idContext;

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

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
            aircraft.model?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredAircrafts(results);
    }, [searchTerm, aircrafts]);

    return (
        <div className='test aircrafts'>
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
            </div>
        </div>
    );
}

export default Aircarfts;