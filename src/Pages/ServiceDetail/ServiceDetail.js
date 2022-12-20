import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className="text-center">
            <h1 className="text-center mt-5">This is  service detail: {serviceId}</h1>
            <Link to="/checkout">
                <button className="btn btn-primary mt-5">Please Check Out</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;