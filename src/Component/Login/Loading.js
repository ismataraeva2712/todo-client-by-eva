import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loading = () => {
    return (
        <div>
            <div style={{ height: '40px' }} className='d-flex justify-content-center align-items-center'>
                <Spinner animation="border" variant="primary" />
            </div>
        </div>
    );
};

export default Loading;