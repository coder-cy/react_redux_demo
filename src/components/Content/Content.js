import React from 'react';
import './Content.css';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return state;
};

const Content = ({titles, currIndex}) => {
    return (
        <div className="content">
        {
            titles.map((title, index) => {
                return <div style={{display: currIndex === index ? 'block' : 'none'}} key={index}>{title}</div>
            })
        }
        </div>
    );
};

export default connect(mapStateToProps)(Content);