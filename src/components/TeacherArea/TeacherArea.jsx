import React from 'react';
import SocialButtons from '../SocialButtons/SocialButtons.jsx';
import PropTypes from 'prop-types';

export default function TeacherArea(props) {
    return (
        <div className="teacher-area pt-130 pb-100">
            <div className="container">
                <div className="section-title mb-75">
                    <h2>Best <span>Teacher</span></h2>
                    <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
                </div>
                <div className="custom-row">
                    {
                        props.list && props.list.map((teacher) => {
                            return (
                                <div className="custom-col-5" key={teacher.empId}>
                                    <div className="single-teacher mb-30">
                                        <div className="teacher-img">
                                            <img src={require(`./../../assets/img/teacher/${teacher.image}`)} alt="" />
                                        </div>
                                        <div className="teacher-content-visible">
                                            <h4>{teacher.name}</h4>
                                            <h5>{teacher.designation}</h5>
                                        </div>
                                        <div className="teacher-content-wrap">
                                            <div className="teacher-content">
                                                <h4>{teacher.name}</h4>
                                                <h5>{teacher.designation}</h5>
                                                <p>{teacher.description}</p>
                                                <div className="teacher-social">
                                                    <SocialButtons
                                                        title={teacher.name}
                                                        sharedUrl={teacher.designation}
                                                        description={teacher.description}
                                                        sourceName={teacher.name}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

TeacherArea.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            empId: PropTypes.number,
            name: PropTypes.string,
            designation: PropTypes.string,
            description: PropTypes.string,
            image: PropTypes.string,
        })
    )
}