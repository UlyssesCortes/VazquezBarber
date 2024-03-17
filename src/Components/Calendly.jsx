import React from 'react';

const Calendly = ({ showCalendly }) => {
    return (
        <div style={{ display: showCalendly ? 'block' : 'none' }}>
            <div className="calendly-inline-widget" data-url="https://calendly.com/ulyssescortesp" style={{ width: '100vw', height: '100vh' }}>
                <div class="calendly-inline-widget" data-url="https://calendly.com/ulyssescortesp"></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </div>
        </div>
    );
};

export default Calendly;
