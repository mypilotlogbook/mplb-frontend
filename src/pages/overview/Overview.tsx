import React, { useContext, useEffect, useState } from 'react';
import './Overview.scss';
import DashboardHeader from '../../components/dashboard-header/DashboardHeader';
import OverviewCard from '../../components/overview-card/OverviewCard';
import getPilotsByUserId from '../../api/pilot-endpoints/getPilotsByUserId';
import { AircraftProps, AirfieldProps, FlightProps, PilotProps } from '../../typescript/interfaces/interface';
import { IdContext } from '../../context/UserIdContext';
import { Link } from 'react-router-dom';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import Spline from '@splinetool/react-spline';
import { Skeleton } from '@mui/material';
import getAirFields from '../../api/airfield-endpoints/fetchAirfields';
import getAircraftsByUserId from '../../api/aircraft-endpoints/getAircraftsByUserId';
import getFlightsByUserId from '../../api/flight-endpoints/getFlightsByUserId';
import getMonthlyFlightAnalytics from '../../api/analytics/getMonthlyFlightAnalytics';

type ChartData = {
    name: string;
    value: number;
}[];

const Overview = () => {

    const [monthlyAnalytics, setMonthlyAnalytics] = useState([
        { name: 'Jan', value: 0 },
        { name: 'Feb', value: 0 },
        { name: 'Mar', value: 0 },
        { name: 'Apr', value: 0 },
        { name: 'May', value: 0 },
        { name: 'Jun', value: 0 },
        { name: 'Jul', value: 0 },
        { name: 'Aug', value: 0 },
        { name: 'Sep', value: 0 },
        { name: 'Oct', value: 0 },
        { name: 'Nov', value: 0 },
        { name: 'Dec', value: 0 },
    ]);

    const [pilots, setPilots] = useState<PilotProps[]>([]);
    const [airfields, setAirfields] = useState<AirfieldProps[]>([]);
    const [aircrafts, setAircrafts] = useState<AircraftProps[]>([]);
    const [flights, setFlights] = useState<FlightProps[]>([]);

    const [loaded, setLoaded] = useState(false);

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
        getAirFields({
            setAirfields: setAirfields
        });
        getAircraftsByUserId({
            userId: id,
            setAircrafts: setAircrafts
        });
        getFlightsByUserId({
            userId: id || null,
            setFlights: setFlights
        });
    }

    const getAnalyticsData = () => {
        getMonthlyFlightAnalytics({
            userId: id,
            setMonthlyAnalytics: setMonthlyAnalytics,
        });
    }

    useEffect(() => {
        getAnalyticsData();
        getCardDetails();
    }, []);

    return (
        <div className='test overview'>
            <DashboardHeader />

            <div className="test dashboard-content">

                <div className="test analytics-section">
                    <h3 className="test section-header">Analytics</h3>
                    <h5 className="test section-subheader">Your data visualization</h5>
                    <hr className="test line" />
                    <div className="test chart-container">
                        <div className="test left">
                            <Link to='/dashboard/analytics'>
                                <ResponsiveContainer width="100%" height={200} className='chart'>
                                    <LineChart data={monthlyAnalytics}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip /> 
                                        <Legend />
                                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </Link>
                        </div>
                        <div className="test right">
                            {
                                !loaded && (
                                    <Skeleton variant="rectangular" width='100%' height='100%' animation="wave" />
                                )
                            }
                            <Spline
                                onLoad={() => setLoaded(true)}
                                scene="https://prod.spline.design/vZRSIb8UwLt9SNCz/scene.splinecode" 
                            />
                        </div>
                    </div>
                </div>

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
                                count={flights.length}
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