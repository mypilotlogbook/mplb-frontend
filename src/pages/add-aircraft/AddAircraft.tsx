import React, { useContext, useState } from "react";
import "./AddAircraft.scss";
import { IdContext } from "../../context/UserIdContext";
import { AircraftProps } from "../../typescript/interfaces/interface";
import Alert from "../../components/alert/Alert";
import { Link } from "react-router-dom";
import BackButton from "../../components/back-button/BackButton";
import DashboardTextfield from "../../components/dashboard-textfield/DashboardTextfield";
import Lable from "../../components/lable/Lable";
import {
  autoLoadHorusData,
  categoryData,
  classData,
  defaultApproachData,
  defaultLaunchData,
  defaultOperationData,
  powerData,
  subClassData,
  typeData,
} from "../../utils/resources";
import addAircraft from "../../api/aircraft-endpoints/addAircraft";

const AddAircraft = () => {
  const [aircraft, setAircraft] = useState<AircraftProps>({
    type: "",
    company: "",
    image: "",
    registration_no: "",
    fin: "",
    model: "",
    variant: "",
    manufacturer: "",
    type_rating: "",
    passenger: "",
    aircraft_class: "",
    sub_class: "",
    category: "",
    power: "",
    auto_load_hours: "",
    default_operation: "",
    default_approach: "",
    default_launch: "",
    aerobatic: false,
    high_performance: false,
    more_than_weight: false,
    complex: false,
    tm_glider: false,
    tailwheel: false,
    efis: false,
    cross_country: false,
    relief_pilot: false,
    ifr: false,
    actual_instrument: false,
    sim_instrument: false,
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [message, setMessage] = useState("");

  const idContext = useContext(IdContext);
  if (!idContext) {
    throw new Error("Add Aircarft must be used within a IdProvider");
  }
  const { id } = idContext;

  const resetCredentials = () => {
    setAircraft({
      type: "",
      company: "",
      image: "",
      registration_no: "",
      fin: "",
      model: "",
      variant: "",
      manufacturer: "",
      type_rating: "",
      passenger: "",
      aircraft_class: "",
      sub_class: "",
      category: "",
      power: "",
      auto_load_hours: "",
      default_operation: "",
      default_approach: "",
      default_launch: "",
      aerobatic: false,
      high_performance: false,
      more_than_weight: false,
      complex: false,
      tm_glider: false,
      tailwheel: false,
      efis: false,
      cross_country: false,
      relief_pilot: false,
      ifr: false,
      actual_instrument: false,
      sim_instrument: false,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setAircraft((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" && e.target instanceof HTMLInputElement
          ? e.target.checked
          : value,
    }));
  };

  const handleSubmit = () => {
    const aircraftObj = {
      ...aircraft,
      userId: id || undefined,
    }
    console.log(aircraft);
    addAircraft({
      userId: id,
      aircraft: aircraftObj,
      setError: setError,
      setSuccess: setSuccess,
      setStatusCode: setStatusCode,
      setMessage: setMessage,
      resetCredentials: resetCredentials,
    });
  };

  return (
    <div className="test add-aircraft">
      {error && (
        <Alert message={message} statusCode={statusCode} type="error" />
      )}
      {success && (
        <Alert message={message} statusCode={statusCode} type="success" />
      )}

      <div className="test single-aircraft-header">
        <Link to="/dashboard/aircrafts">
          <BackButton image="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722961275/arrow-small-left_llmk3x.png" />
        </Link>
        <h6 className="test page-subtitle">Back to Aircrafts</h6>
      </div>

      <div className="test add-aircraft-content">
        <h1 className="test header">Add New Aircraft</h1>
        <h5 className="test subheader">
          Fill the details for add a new aircraft
        </h5>
        <div className="test form-container">
          <div className="test search-option-section">
            <Lable title="Type" />
            <select
              id="options"
              className="options test"
              value={aircraft?.type}
              name="type"
              onChange={handleChange}
            >
              {typeData.map((type, index) => {
                return (
                  <option
                    value={type.value}
                    className="test option"
                    key={type.id}
                  >
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="test input">
            <Lable title="Company" />
            <DashboardTextfield
              type="text"
              name="company"
              value={aircraft?.company || ""}
              placeholder="Enter aircraft company name"
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Registration Number" />
            <DashboardTextfield
              type="text"
              name="registration_no"
              value={aircraft?.registration_no || ""}
              placeholder="Enter aircraft registration number"
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Aircraft Image" />
            <DashboardTextfield
              type="text"
              name="image"
              value={aircraft?.image || ""}
              placeholder="Enter aircraft image url"
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Fin" />
            <DashboardTextfield
              type="text"
              name="fin"
              value={aircraft?.fin || ""}
              placeholder="Enter pilot first name"
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Model" />
            <DashboardTextfield
              type="text"
              name="model"
              value={aircraft?.model || ""}
              placeholder="Enter aircraft model"
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Varient" />
            <DashboardTextfield
              type="text"
              name="variant"
              value={aircraft?.variant || ""}
              placeholder="Enter aircraft varient"
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Manufacturer" />
            <DashboardTextfield
              type="text"
              name="manufacturer"
              value={aircraft?.manufacturer || ""}
              placeholder="Enter aircraft manufacturer"
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Type Rating" />
            <DashboardTextfield
              type="text"
              name="type_rating"
              value={aircraft?.type_rating || ""}
              placeholder="Enter aircraft type_rating"
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Passenger" />
            <DashboardTextfield
              type="text"
              name="passenger"
              value={aircraft?.passenger || ""}
              placeholder="Enter aircraft passenger count"
              onChange={handleChange}
            />
          </div>
          <div className="test search-option-section">
            <Lable title="Class" />
            <select
              id="options"
              className="options test"
              value={aircraft?.aircraft_class}
              name="aircraft_class"
              onChange={handleChange}
            >
              {classData.map((type, index) => {
                return (
                  <option
                    value={type.value}
                    className="test option"
                    key={type.id}
                  >
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="test search-option-section">
            <Lable title="Sub Class" />
            <select
              id="options"
              className="options test"
              value={aircraft?.sub_class}
              name="sub_class"
              onChange={handleChange}
            >
              {subClassData.map((type, index) => {
                return (
                  <option
                    value={type.value}
                    className="test option"
                    key={type.id}
                  >
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="test search-option-section">
            <Lable title="Category" />
            <select
              id="options"
              className="options test"
              value={aircraft?.category}
              name="category"
              onChange={handleChange}
            >
              {categoryData.map((type, index) => {
                return (
                  <option
                    value={type.value}
                    className="test option"
                    key={type.id}
                  >
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="test search-option-section">
            <Lable title="Power" />
            <select
              id="options"
              className="options test"
              value={aircraft?.power}
              name="power"
              onChange={handleChange}
            >
              {powerData.map((type, index) => {
                return (
                  <option
                    value={type.value}
                    className="test option"
                    key={type.id}
                  >
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="test search-option-section">
            <Lable title="Auto load Hours" />
            <select
              id="options"
              className="options test"
              value={aircraft?.auto_load_hours}
              name="auto_load_hours"
              onChange={handleChange}
            >
              {autoLoadHorusData.map((type, index) => {
                return (
                  <option
                    value={type.value}
                    className="test option"
                    key={type.id}
                  >
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="test search-option-section">
            <Lable title="Defualt Operation" />
            <select
              id="options"
              className="options test"
              value={aircraft?.default_operation}
              name="default_operation"
              onChange={handleChange}
            >
              {defaultOperationData.map((type, index) => {
                return (
                  <option
                    value={type.value}
                    className="test option"
                    key={type.id}
                  >
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="test search-option-section">
            <Lable title="Defualt Launch" />
            <select
              id="options"
              className="options test"
              value={aircraft?.default_launch}
              name="default_launch"
              onChange={handleChange}
            >
              {defaultLaunchData.map((type, index) => {
                return (
                  <option
                    value={type.value}
                    className="test option"
                    key={type.id}
                  >
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="test search-option-section">
            <Lable title="Defualt Approach" />
            <select
              id="options"
              className="options test"
              value={aircraft?.default_approach}
              name="default_approach"
              onChange={handleChange}
            >
              {defaultApproachData.map((type, index) => {
                return (
                  <option
                    value={type.value}
                    className="test option"
                    key={type.id}
                  >
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <hr className="line" />

        <div className="test checkbox-section">
          <div className="test checkbox-section-one">
            <div className="test input">
              <Lable title="Aerobatic" />
              <input
                type="checkbox"
                className="test checkbox"
                name="aerobatic"
                checked={aircraft.aerobatic}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="High Performance" />
              <input
                type="checkbox"
                className="test checkbox"
                name="high_performance"
                checked={aircraft.high_performance}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="More than 5700 kg" />
              <input
                type="checkbox"
                className="test checkbox"
                name="more_than_weight"
                checked={aircraft.more_than_weight}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="Complex" />
              <input
                type="checkbox"
                className="test checkbox"
                name="complex"
                checked={aircraft.complex}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="test checkbox-section-one">
            <div className="test input">
              <Lable title="TM Glider" />
              <input
                type="checkbox"
                className="test checkbox"
                name="tm_glider"
                checked={aircraft.tm_glider}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="Tail Wheel" />
              <input
                type="checkbox"
                className="test checkbox"
                name="tailwheel"
                checked={aircraft.tailwheel}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="EFIS" />
              <input
                type="checkbox"
                className="test checkbox"
                name="efis"
                checked={aircraft.efis}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="Cross Country" />
              <input
                type="checkbox"
                className="test checkbox"
                name="cross_country"
                checked={aircraft.cross_country}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="test checkbox-section-one">
            <div className="test input">
              <Lable title="Relief Pilot" />
              <input
                type="checkbox"
                className="test checkbox"
                name="relief_pilot"
                checked={aircraft.relief_pilot}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="IFR" />
              <input
                type="checkbox"
                className="test checkbox"
                name="ifr"
                checked={aircraft.ifr}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="Actual Instrument" />
              <input
                type="checkbox"
                className="test checkbox"
                name="actual_instrument"
                checked={aircraft.actual_instrument}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="Sim Instrument" />
              <input
                type="checkbox"
                className="test checkbox"
                name="sim_instrument"
                checked={aircraft.sim_instrument}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="test form-container">
          <div className="test input">
            <Lable title="Click here to add aircraft" />
            <button className="test add-btn" onClick={handleSubmit}>
              Add Aircraft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAircraft;
