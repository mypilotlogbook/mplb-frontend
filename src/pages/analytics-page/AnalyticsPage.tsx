import React, { useContext, useEffect } from 'react';
import './AnalyticsPage.scss';
import PageHeader from '../../components/page-header/PageHeader';
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
import { IdContext } from '../../context/UserIdContext';

type ChartData = {
  name: string;
  value: number;
}[];

const AnalyticsPage = () => {

  const idContext = useContext(IdContext);
  if(!idContext) {
      throw new Error('IdContext not found');
  }
  const { id } = idContext;

  const data: ChartData = [
      { name: 'Jan', value: 4 },
      { name: 'Feb', value: 3 },
      { name: 'Mar', value: 2 },
      { name: 'Apr', value: 2 },
      { name: 'May', value: 17 },
      { name: 'Jun', value: 30 },
      { name: 'Jul', value: 5 },
      { name: 'Aug', value: 20 },
      { name: 'Sep', value: 11 },
      { name: 'Oct', value: 16 },
      { name: 'Nov', value: 19 },
      { name: 'Dec', value: 10 },
  ];

  useEffect(() => {

  }, []);

  return (
    <div className='test analytics'>

      <PageHeader 
        title='Analytics'
        subTitle='Visualize your all the pilots, aircrafs and flights data.'
      />

      <div className="test analytics-section">
        
        {/* flights analytics section */}
        <div className="test single-section">
            <h3 className="test section-header">Flights Analytics</h3>
            <h5 className="test section-subheader">Visualize your Flights Data</h5>
            <hr className="test line" />
            <div className="test single-content-section">
                <div className="test upper-section">
                  <h2 className='test graph-text'>Daily Flights</h2>
                  <ResponsiveContainer width="100%" height={200} className="chart">
                      <LineChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip /> 
                          <Legend />
                          <Line type="monotone" dataKey="value" stroke="#8884d8" />
                      </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="test lower-section">
                  <div className="test left-section">
                    <h2 className='test graph-text'>Monthly Flights</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip /> 
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="test right-section">
                    <h2 className='test graph-text'>Yearly Flights</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip /> 
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
            </div>
        </div>

        <hr className='test hard-line'/>

        {/* flights analytics section */}
        <div className="test single-section">
            <h3 className="test section-header">Aircrafts Analytics</h3>
            <h5 className="test section-subheader">Visualize your Aircrafts Data</h5>
            <hr className="test line" />
            <div className="test single-content-section">
                <div className="test upper-section">
                  <h2 className='test graph-text'>Daily Aircrafts</h2>
                  <ResponsiveContainer width="100%" height={200} className="chart">
                      <LineChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip /> 
                          <Legend />
                          <Line type="monotone" dataKey="value" stroke="#8884d8" />
                      </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="test lower-section">
                  <div className="test left-section">
                    <h2 className='test graph-text'>Monthly Aircrafts</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip /> 
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="test right-section">
                    <h2 className='test graph-text'>Yearly Aircrafts</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip /> 
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
            </div>
        </div>

        <hr className='test hard-line'/>

        {/* pilots analytics section */}
        <div className="test single-section">
            <h3 className="test section-header">Pilots Analytics</h3>
            <h5 className="test section-subheader">Visualize your Pilots Data</h5>
            <hr className="test line" />
            <div className="test single-content-section">
                <div className="test upper-section">
                  <h2 className='test graph-text'>Daily Pilots</h2>
                  <ResponsiveContainer width="100%" height={200} className="chart">
                      <LineChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip /> 
                          <Legend />
                          <Line type="monotone" dataKey="value" stroke="#8884d8" />
                      </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="test lower-section">
                  <div className="test left-section">
                    <h2 className='test graph-text'>Monthly Pilots</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip /> 
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="test right-section">
                    <h2 className='test graph-text'>Yearly Pilots</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip /> 
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
            </div>
        </div>

        <hr className='test hard-line'/>

      </div>

    </div>
  );

}

export default AnalyticsPage;