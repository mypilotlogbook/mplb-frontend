import React, { useContext, useEffect, useState } from "react";
import "./SingleAircraft.scss";
import Alert from "../../components/alert/Alert";
import { IdContext } from "../../context/UserIdContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackButton from "../../components/back-button/BackButton";
import Spline from "@splinetool/react-spline";
import { Skeleton, Tooltip } from "@mui/material";
import Lable from "../../components/lable/Lable";
import DashboardTextfield from "../../components/dashboard-textfield/DashboardTextfield";
import { autoLoadHorusData, categoryData, classData, defaultApproachData, defaultLaunchData, defaultOperationData, powerData, subClassData, typeData } from "../../utils/resources";
import { AircraftProps, UpdateAircraft } from "../../typescript/interfaces/interface";
import deleteAircraft from "../../api/aircraft-endpoints/deleteAircraft";
import updateAircraft from "../../api/aircraft-endpoints/updateAircraft";
import getAircraft from "../../api/aircraft-endpoints/getAircraft";

const SingleAircraft = () => {
    const [aircraft, setAircraft] = useState<AircraftProps | undefined>(undefined);
    const [formData, setFormData] = useState<UpdateAircraft>();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [statusCode, setStatusCode] = useState(0);
    const [message, setMessage] = useState("");
    const [loaded, setLoaded] = useState(false);

    const { aircraftId } = useParams();
    const navigate = useNavigate();

    const idContext = useContext(IdContext);
    const id = idContext?.id;
    if (!id) {
        throw new Error("Id context is not available");
    }

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const { name, value, type } = e.target;
  
      setFormData((prevData) => ({
        ...prevData,
        [name]:
          type === "checkbox" && e.target instanceof HTMLInputElement
            ? e.target.checked
            : value,
      }));
      console.log(formData);
    };

    const handleUpdate = () => {
        updateAircraft({
          aircraftId: aircraftId || null,
          formData: formData || undefined,
          getAircraft: getAircraft,
          setError: setError,
          setSuccess: setSuccess,
          setStatusCode: setStatusCode,
          setMessage: setMessage,
          setAircraft: setAircraft,
          setFormData: setFormData,
        });
    }
    
    const handleDelete = () => {
        /* eslint-disable no-restricted-globals */
        const isConfirmed = confirm('Are you sure want to delete this aircraft record?');
        if(isConfirmed) {
            deleteAircraft({
                aircraftId: aircraftId || null,
                setStatusCode: setStatusCode,
                setSuccess: setSuccess,
                setError: setError,
                setMessage: setMessage,
                navigate: navigate,
            });
        }
    }

    const getSingleAircraft = () => {
      getAircraft({
        aircraftId: aircraftId || null,
        setFormData: setFormData, 
        setAircraft: setAircraft,
      });
    }
    
    useEffect(() => {
      getSingleAircraft();
    }, []);

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
              <button className="test save-button" onClick={handleUpdate}>
                Save Changes
              </button>
            </Tooltip>
            <Tooltip title="Delete Pilot" arrow>
              <button className="test delete-button" onClick={handleDelete}>
                Delete Aircraft
              </button>
            </Tooltip>
          </div>
        </div>

        <div className="test form-container">
          <div className="test search-option-section">
            <Lable title="Type" />
            <select id="options" className="options test" name="type" value={formData?.type} onChange={handleChange}>
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
              value={formData?.company || ""}
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Registration Number" />
            <DashboardTextfield
              type="text"
              name="registration_no"
              placeholder="Enter aircraft registration number"
              value={formData?.registration_no || ""}
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Aircraft Image" />
            <DashboardTextfield
              type="text"
              name="image"
              placeholder="Enter aircraft image url"
              value={formData?.image || ""}
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Fin" />
            <DashboardTextfield
              type="text"
              name="fin"
              placeholder="Enter pilot first name"
              value={formData?.fin || ""}
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Model" />
            <DashboardTextfield
              type="text"
              name="model"
              placeholder="Enter aircraft model"
              value={formData?.model || ""}
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Varient" />
            <DashboardTextfield
              type="text"
              name="variant"
              placeholder="Enter aircraft varient"
              value={formData?.variant || ""}
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Manufacturer" />
            <DashboardTextfield
              type="text"
              name="manufacturer"
              placeholder="Enter aircraft manufacturer"
              value={formData?.manufacturer || ""}
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Type Rating" />
            <DashboardTextfield
              type="text"
              name="type_rating"
              placeholder="Enter aircraft type rating"
              value={formData?.type_rating || ""}
              onChange={handleChange}
            />
          </div>
          <div className="test input">
            <Lable title="Passenger" />
            <DashboardTextfield
              type="text"
              name="passenger"
              placeholder="Enter aircraft passenger seat count"
              value={formData?.passenger || ""}
              onChange={handleChange}
            />
          </div>
          <div className="test search-option-section">
            <Lable title="Class" />
            <select id="options" className="options test" name="aircraft_class" value={formData?.aircraft_class} onChange={handleChange}>
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
            <select id="options" className="options test" name="sub_class" value={formData?.sub_class} onChange={handleChange}>
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
            <select id="options" className="options test" name="category" value={formData?.category} onChange={handleChange}>
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
            <select id="options" className="options test" name="power" value={formData?.power} onChange={handleChange}>
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
              value={formData?.auto_load_hours} onChange={handleChange}
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
              value={formData?.default_operation} onChange={handleChange}
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
            <select id="options" className="options test" name="default_launch" value={formData?.default_launch} onChange={handleChange}>
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
              value={formData?.default_approach} onChange={handleChange}
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
                checked={formData?.aerobatic}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="High Performance" />
              <input
                type="checkbox"
                className="test checkbox"
                name="high_performance"
                checked={formData?.high_performance}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="More than 5700 kg" />
              <input
                type="checkbox"
                className="test checkbox"
                name="more_than_weight"
                checked={formData?.more_than_weight}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="Complex" />
              <input 
                type="checkbox" 
                className="test checkbox" 
                name="complex" 
                checked={formData?.complex}
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
                checked={formData?.tm_glider}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="Tail Wheel" />
              <input
                type="checkbox"
                className="test checkbox"
                name="tailwheel"
                checked={formData?.tailwheel}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="EFIS" />
              <input 
                type="checkbox" 
                className="test checkbox" 
                name="efis" 
                checked={formData?.efis}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="Cross Country" />
              <input
                type="checkbox"
                className="test checkbox"
                name="cross_country"
                checked={formData?.cross_country}
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
                checked={formData?.relief_pilot}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="IFR" />
              <input 
                type="checkbox" 
                className="test checkbox" 
                name="ifr" 
                checked={formData?.ifr}
                onChange={handleChange}/>
            </div>
            <div className="test input">
              <Lable title="Actual Instrument" />
              <input
                type="checkbox"
                className="test checkbox"
                name="actual_instrument"
                checked={formData?.actual_instrument}
                onChange={handleChange}
              />
            </div>
            <div className="test input">
              <Lable title="Sim Instrument" />
              <input
                type="checkbox"
                className="test checkbox"
                name="sim_instrument"
                checked={formData?.sim_instrument}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAircraft;
