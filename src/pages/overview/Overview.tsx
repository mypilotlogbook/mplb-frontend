import React, { useContext, useEffect, useState } from 'react';
import './Overview.scss';
import DashboardHeader from '../../components/dashboard-header/DashboardHeader';
import OverviewCard from '../../components/overview-card/OverviewCard';
import getPilotsByUserId from '../../api/pilot-endpoints/getPilotsByUserId';
import { AircraftProps, AirfieldProps, PilotProps } from '../../typescript/interfaces/interface';
import { IdContext } from '../../context/UserIdContext';
import { Link } from 'react-router-dom';

const Overview = () => {

    const [pilots, setPilots] = useState<PilotProps[]>([]);
    const [airfields, setAirfields] = useState<AirfieldProps[]>([]);
    const [aircrafts, setAircrafts] = useState<AircraftProps[]>([]);

    const idContext = useContext(IdContext);
    if(!idContext) {
        throw new Error('IdContext not found');
    }
    const { id } = idContext;

    const getCardDetails = () => {
        getPilotsByUserId({
            userId: id,
            setPilots: setPilots,
        });
    }

    useEffect(() => {
        getCardDetails();
    }, []);

    return (
        <div className='test overview'>
            <DashboardHeader />

            <div className="test dashboard-content">

                <div className="test analytics-section"></div>

                <div className="test overview-section">
                    <h3 className="test section-header">Overview</h3>
                    <h5 className="test section-subheader">Overview of your all the data</h5>
                    <hr className="test line" />
                    <div className="test overview-cards-section">
                        <Link to='/dashboard/pilots'>
                            <OverviewCard 
                                count={pilots.length}
                                description='Manage Your Pilots Data'
                                image="https://res.cloudinary.com/dv9ax00l4/image/upload/v1723899461/megaphone-dynamic-premium_1_rlxjfb.png"
                                title="Pilots"
                            />
                        </Link>
                        <Link to='/dashboard/airfields'>
                            <OverviewCard 
                                count={airfields.length}
                                description='System default airfields'
                                image="https://res.cloudinary.com/dv9ax00l4/image/upload/v1723986300/sheild-dynamic-premium_1_rxioh4.png"
                                title="Airfields"
                            />
                        </Link>
                        <Link to='/dashboard/aircrafts'>
                            <OverviewCard 
                                count={aircrafts.length}
                                description='Manage Your Aircrafts Data'
                                image="https://res.cloudinary.com/dv9ax00l4/image/upload/v1723899484/rocket-dynamic-premium_ansikm.png"
                                title="Aircrafts"
                            />
                        </Link>
                        <Link to='/dashboard/flights'>
                            <OverviewCard 
                                count={pilots.length}
                                description='Manage Your Flights Data'
                                image="https://res.cloudinary.com/dv9ax00l4/image/upload/v1723986303/calender-dynamic-premium_zfxnpp.png"
                                title="Flights"
                            />
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    );

}

export default Overview;