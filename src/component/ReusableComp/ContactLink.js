
import React from 'react'

export default function ContactLink(props) {
  return (

        <div className="col-lg-4 my-2 mt-lg-0">
            <div className="info">
                <div className="address ms-2 pt-3">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location: {props.location}</h4>
                    <p>{props.address}</p>
                </div>
                <div className="email ms-2">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>{props.email}</p>
                </div>
                <div className="phone ms-2">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>{props.phoneNumber1}</p>
                    <p>{props.phoneNumber2}</p>
                </div>
            </div>
        </div>
            
  )
}
