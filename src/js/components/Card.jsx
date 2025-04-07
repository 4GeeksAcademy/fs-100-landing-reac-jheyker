import React from "react"


export const Card = () => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
        <div className="card" style={{ width: '18rem' }} >
            <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <button type="button" className="btn btn-primary">Find out More!</button>
            </div>
            </div>  
        </div>
    )
}