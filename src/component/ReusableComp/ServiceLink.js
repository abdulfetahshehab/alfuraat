
import React, { Component } from 'react';

class ServiceLink extends Component {
    render() {
        const { delay, ICN, head, info, LCN, list1, list2, list3, list4 } = this.props;
        return (
            
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch my-2" data-aos="zoom-in" data-aos-delay={delay}>
                    <div className="icon-box">
                    <div className="icon"><i className={ICN}></i></div>
                    <h4>{head}</h4>
                    <p>{info}</p>
                    <div className="text-black ">
                        <ul className="lists">
                            {list1 && (<li><i className={LCN}></i> {list1}</li>)}
                            {list2 && (<li><i className={LCN}></i> {list2}</li>)}
                            {list3 && (<li><i className={LCN}></i> {list3}</li>)}
                            {list4 && (<li><i className={LCN}></i> {list4}</li>)}
                        </ul>
                    </div>
                    </div>
                
            </div>
        );
    }
}

export default ServiceLink;
