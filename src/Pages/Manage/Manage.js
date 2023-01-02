import React, { useEffect, useState } from 'react';

const Manage = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/service/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const filterData = services.filter(service => service._id !== id);
                    setServices(filterData);
                }
            })
    }

    return (
        <div className="container">
            <div className="row w-5 d-flex justify-content-center">
                <div className="col-md-6 ">
                    <h1 className='mb-5'>Manage Your Services.</h1>
                    {
                        services.map(service => <div className="d-flex p-2" key={service._id}>
                            <h1>{service.name.slice(0, 10) + '...'}</h1>
                            <button className="btn btn-primary me-2">
                                EDIT
                            </button>
                            <button onClick={() => handleDelete(service._id)} className="btn btn-primary">
                                X
                            </button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Manage;