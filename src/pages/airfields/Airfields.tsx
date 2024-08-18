import React, { useEffect, useState } from 'react';
import './Airfields.scss';
import PageHeader from '../../components/page-header/PageHeader';
import axios from 'axios';
import { baseURL } from '../../api/baseURL';
import Airfield from '../../components/airfield/Airfield';
import { AirfieldProps } from '../../typescript/interfaces/interface';
import getAirFields from '../../api/airfield-endpoints/fetchAirfields';

const Airfields = () => {

  const [airfields, setAirfields] = useState<AirfieldProps[]>([]);
  const [filteredAirfields, setFilteredAirfields] = useState<AirfieldProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const fetchAirfields = async () => {
    getAirFields({
      setAirfields: setAirfields,
      setFilteredAirfields: setFilteredAirfields
    });
  };

  useEffect(() => {
    fetchAirfields();
  }, []);

  useEffect(() => {
    filterAirfields();
  }, [searchTerm, selectedCountry, airfields]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const filterAirfields = () => {
    const filtered = airfields.filter(airfield => {
      const matchesSearchTerm = airfield.airport_name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = selectedCountry === '' || airfield.country === selectedCountry;
      return matchesSearchTerm && matchesCountry;
    });
    setFilteredAirfields(filtered);
  };

  useEffect(() => {
    fetchAirfields();
  }, []);

  useEffect(() => {
    filterAirfields();
  }, [searchTerm, selectedCountry]);

  return (
    <div className='test airfields'>
      <PageHeader 
        title='Airfields List'
        subTitle='List down all the airfields and take your time to explore.'
      />
      <div className="test search-section">
        <div className="test searchbar">
          <input 
            type="text" 
            placeholder="Search for name of an airfield" 
            className="test search-input"
            value={searchTerm}
            onChange={handleSearchChange}
           />
          <img src="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722774870/icons8-search-480_msptia.png" alt="search-logo" className="test search-logo" />
        </div>
        <div className="test search-option-section">
          <select id="options" className='options test' value={selectedCountry} onChange={handleCountryChange}>
            <option value="USA" className='test option'>USA</option>
            <option value="UK" className='test option'>UK</option>
            <option value="Canada" className='test option'>Canada</option>
            <option value="Australia" className='test option'>Australia</option>
            <option value="Sri Lanka" className='test option'>Sri Lanka</option>
            <option value="Afghanistan" className='test option'>Afghanistan</option>
          </select>
        </div>
      </div>
      <div className="test search-results">
        <h6 className="test search-results-text">Search Results : <span className='test result-count'>{filteredAirfields.length}</span></h6>
      </div>
      <div className="test airfield-table">
        <div className="test table-header">
          <div className="test header">
            <h5 className="test header-text">Airfield Name</h5>
          </div>
          <div className="test header">
            <h5 className="test header-text">Country</h5>
          </div>
          <div className="test header">
            <h5 className="test header-text">Category</h5>
          </div>
          <div className="test header">
            <h5 className="test header-text">ICAO</h5>
          </div>
          <div className="test header">
            <h5 className="test header-text">IATA</h5>
          </div>
        </div>
        <div className="test table-body">
          {
            filteredAirfields.map((airfield, index) => {
              return (
                <Airfield
                  _id={airfield._id}
                  airfield_code={airfield.airfield_code}
                  airport_name={airfield.airport_name}
                  country={airfield.country}
                  airfield_category={airfield.airfield_category}
                  icao={airfield.icao}
                  iata={airfield.iata}
                  elevation={airfield.elevation}
                  timezone={airfield.timezone}
                  createdAt={airfield.createdAt}
                  updatedAt={airfield.updatedAt}
                  key={index}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );

}

export default Airfields;