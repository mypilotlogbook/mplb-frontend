import React, { useContext, useEffect, useState } from 'react';
import './Pilots.scss';
import PageHeader from '../../components/page-header/PageHeader';
import { PilotProps } from '../../typescript/interfaces/interface';
import { Link } from 'react-router-dom';
import Pilot from '../../components/pilot/Pilot';
import { IdContext } from '../../context/UserIdContext';
import getPilotsByUserId from '../../api/pilot-endpoints/getPilotsByUserId';

const Pilots = () => {

    const [pilots, setPilots] = useState<PilotProps[]>([]);
    const [filteredPilots, setFilteredPilots] = useState<PilotProps[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const idContext = useContext(IdContext);
    if (!idContext) {
        throw new Error('Pilots Page must be used within a IdProvider');
    }
    const { id } = idContext;

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const getPilots = () => {
        getPilotsByUserId({
            userId: id,
            setPilots: setPilots,
        });
    }

    useEffect(()=> {
        getPilots();
    },[]);

    useEffect(() => {
        const results = pilots.filter((pilot) =>
            pilot.fname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pilot.lname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pilot.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pilot.company?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPilots(results);
    }, [searchTerm, pilots]);

    return (
        <div className='test pilots'>
            <PageHeader
                title='Pilots List'
                subTitle='Manage your pilots and their data.'
            />
            <div className="test search-section">
                <div className="test searchbar">
                    <input 
                        type="text" 
                        placeholder="Search pilots by name / company name / email address" 
                        className="test search-input"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722774870/icons8-search-480_msptia.png" alt="search-logo" className="test search-logo" />
                </div>
                <Link to='/dashboard/pilot/add-pilot' className='test add-pilot-btn-link'>
                    <button className='test add-pilot-btn'>
                        Add Pilot
                    </button>
                </Link>
            </div>
            <div className="test search-results">
                <h6 className="test search-results-text">Search Results : <span className='test result-count'>{filteredPilots.length}</span></h6>
            </div>
            <div className="test pilots-table">
                <div className="test table-header">
                    <div className="test header">
                        <h5 className="test header-text">Pilot Name</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Company</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Mobile</h5>
                    </div>
                    <div className="test header">
                        <h5 className="test header-text">Email Address</h5>
                    </div>
                </div>
                <div className="test table-body">
                    {
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

export default Pilots;