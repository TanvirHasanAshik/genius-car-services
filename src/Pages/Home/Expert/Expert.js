import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className="card col-md-4 m-2" style={{ maxWidth: '540px' }}>
            <div className="row align-items-center">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;