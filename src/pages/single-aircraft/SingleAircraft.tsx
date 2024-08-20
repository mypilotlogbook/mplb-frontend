import React, { useContext, useState } from "react";
import "./SingleAircraft.scss";
import Alert from "../../components/alert/Alert";
import { IdContext } from "../../context/UserIdContext";
import { Link } from "react-router-dom";
import BackButton from "../../components/back-button/BackButton";
import Spline from "@splinetool/react-spline";
import { Skeleton, Tooltip } from "@mui/material";
import Lable from "../../components/lable/Lable";
import DashboardTextfield from "../../components/dashboard-textfield/DashboardTextfield";
import { autoLoadHorusData, categoryData, classData, defaultApproachData, defaultLaunchData, defaultOperationData, powerData, subClassData, typeData } from "../../utils/resources";

const SingleAircraft = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [message, setMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  const idContext = useContext(IdContext);
  const id = idContext?.id;
  if (!id) {
    throw new Error("Id context is not available");
  }

  return (
    <div className="test single-aircraft">
      {error && (
        <Alert type="error" statusCode={statusCode} message={message} />
      )}
      {success && (
        <Alert type="success" statusCode={statusCode} message={message} />
      )}

      <div className="test single-aircraft-header">
        <Link to="/dashboard/aircrafts">
          <BackButton image="https://res.cloudinary.com/dv9ax00l4/image/upload/v1722961275/arrow-small-left_llmk3x.png" />
        </Link>
        <h6 className="test page-subtitle">Back to Aircrafts</h6>
      </div>

      <div className="test single-aircraft-content">
        <div className="test single-aircraft-hero">
          {!loaded && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
            />
          )}
          <Spline
            onLoad={() => setLoaded(true)}
            className="test single-aircraft-spline"
            scene="https://prod.spline.design/y0XxBb0CqZJiYxnH/scene.splinecode"
          />
        </div>

        <div className="test section1">
          <div className="test section1-left">
            <h3 className="test lable">Edit Aircraft Details</h3>
            <h6 className="test sub-lable">Update aircraft details!</h6>
          </div>
          <div className="test section1-right">
            <Tooltip title="Click here to save your changes" arrow>
              <button className="test save-button" onClick={() => {}}>
                Save Changes
              </button>
            </Tooltip>
            <Tooltip title="Delete Pilot" arrow>
              <button className="test delete-button" onClick={() => {}}>
                Delete Aircraft
              </button>
            </Tooltip>
          </div>
        </div>

        <div className="test form-container">
          <div className="test search-option-section">
            <Lable title="Type" />
            <select id="options" className="options test" name="type">
                {
                    typeData.map((type, index) => {
                            return (
                            <option
                                value={type.value}
                                className="test option"
                                key={type.id}
                            >
                                {type.name}
                            </option>
                        );
                    })
                }
            </select>
          </div>
          <div className="test input">
            <Lable title="Company" />
            <DashboardTextfield
              type="text"
              name="company"
              placeholder="Enter aircraft company name"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="test input">
            <Lable title="Registration Number" />
            <DashboardTextfield
              type="text"
              name="registration_no"
              placeholder="Enter aircraft registration number"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="test input">
            <Lable title="Aircraft Image" />
            <DashboardTextfield
              type="text"
              name="image"
              placeholder="Enter aircraft image url"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="test input">
            <Lable title="Fin" />
            <DashboardTextfield
              type="text"
              name="fin"
              placeholder="Enter pilot first name"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="test input">
            <Lable title="Model" />
            <DashboardTextfield
              type="text"
              name="model"
              placeholder="Enter aircraft model"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="test input">
            <Lable title="Varient" />
            <DashboardTextfield
              type="text"
              name="varient"
              placeholder="Enter aircraft varient"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="test input">
            <Lable title="Manufacturer" />
            <DashboardTextfield
              type="text"
              name="manufacturer"
              placeholder="Enter aircraft manufacturer"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="test input">
            <Lable title="Type Rating" />
            <DashboardTextfield
              type="text"
              name="type_rating"
              placeholder="Enter aircraft type_rating"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="test input">
            <Lable title="Passenger" />
            <DashboardTextfield
              type="text"
              name="passenger"
              placeholder="Enter aircraft passenger count"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="test search-option-section">
            <Lable title="Class" />
            <select id="options" className="options test" name="aircraft_class">
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
            <select id="options" className="options test" name="sub_class">
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
            <select id="options" className="options test" name="category">
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
            <select id="options" className="options test" name="power">
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
              name="auto_load_hours"
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
              name="default_operation"
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
            <select id="options" className="options test" name="default_launch">
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
              name="default_approach"
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
              />
            </div>
            <div className="test input">
              <Lable title="High Performance" />
              <input
                type="checkbox"
                className="test checkbox"
                name="high_performance"
              />
            </div>
            <div className="test input">
              <Lable title="More than 5700 kg" />
              <input
                type="checkbox"
                className="test checkbox"
                name="more_than_weight"
              />
            </div>
            <div className="test input">
              <Lable title="Complex" />
              <input type="checkbox" className="test checkbox" name="complex" />
            </div>
          </div>
          <div className="test checkbox-section-one">
            <div className="test input">
              <Lable title="TM Glider" />
              <input
                type="checkbox"
                className="test checkbox"
                name="tm_glider"
              />
            </div>
            <div className="test input">
              <Lable title="Tail Wheel" />
              <input
                type="checkbox"
                className="test checkbox"
                name="tailwheel"
              />
            </div>
            <div className="test input">
              <Lable title="EFIS" />
              <input type="checkbox" className="test checkbox" name="efis" />
            </div>
            <div className="test input">
              <Lable title="Cross Country" />
              <input
                type="checkbox"
                className="test checkbox"
                name="cross_country"
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
              />
            </div>
            <div className="test input">
              <Lable title="IFR" />
              <input type="checkbox" className="test checkbox" name="ifr" />
            </div>
            <div className="test input">
              <Lable title="Actual Instrument" />
              <input
                type="checkbox"
                className="test checkbox"
                name="actual_instrument"
              />
            </div>
            <div className="test input">
              <Lable title="Sim Instrument" />
              <input
                type="checkbox"
                className="test checkbox"
                name="sim_instrument"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAircraft;
