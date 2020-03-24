import React from 'react';

const Alert = props => {
    const { alert } = props
    return (
        <>
            {alert && (
                <div className={`alert alert-${alert.type}`}>
                    <i className="fas fa-info-circle"></i> {alert.msg}
                </div>
            )}
        </>
    );
}

export default Alert;
