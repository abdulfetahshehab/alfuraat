
import React from 'react'  


export default function FeaturesLink(props) {
  return (

        <div className="col-md-6 d-flex align-items-stretch my-2" data-aos={props.animation} data-aos-delay={props.delay}>
            <div className="card" style={{backgroundImage:`url(${props.images})`}}>
            <div className="card-body">
                <h5 className="card-title">{props.head}</h5>
                <p className="card-text">{props.info}</p>
            </div>
            </div>
        </div>
  )
}

