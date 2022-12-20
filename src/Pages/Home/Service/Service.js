import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { name, id, img, description, price } = service;
    const navigate = useNavigate();
    const handleService = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className=" col-md-3 col-sm-6 col-12 mb-3">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" title={name}>{name.slice(0, 20)}</h5>
                    <h5>Price - ${price}</h5>
                    <p className="card-text">{description.slice(0, 50)}</p>
                    <button onClick={() => handleService(id)} className="btn btn-primary" title={name}>Book:{name.length > 20 ? name.slice(0, 20) + '...' : name}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;