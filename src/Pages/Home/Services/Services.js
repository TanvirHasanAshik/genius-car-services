import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container" >
            <h2 className="text-center text-primary mt-5 mb-3" id="services">Our Services</h2>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;