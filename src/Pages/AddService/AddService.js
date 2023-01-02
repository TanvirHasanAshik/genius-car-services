import React, { useState } from 'react';

const AddService = () => {
    const [service, setService] = useState({
        name: '',
        description: '',
        price: '',
        img: ''
    })

    const handleBlur = (e) => {
        service[e.target.name] = e.target.value;
        setService(service);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:4000/services', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 mt-5">
                    <h1 className="border-bottom text-center">Added service.</h1>
                    <form >
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Service Name</label>
                            <input onBlur={handleBlur} type="text" name="name" class="form-control" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Service Description</label>
                            <input onBlur={handleBlur} type="text" name="description" class="form-control" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Service Price</label>
                            <input onBlur={handleBlur} type="number" name="price" class="form-control" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Service Photo Url</label>
                            <input onBlur={handleBlur} type="text" name="img" class="form-control" />
                        </div>
                        <button onClick={handleSubmit} class="btn btn-primary">Add Service</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddService;