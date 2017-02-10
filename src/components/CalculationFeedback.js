import React from 'react'

const CalculationFeedback = () => (
    <div className="medium-6 columns">
        <div className="callout form-callout">
            <h5>We are calculating your result</h5>
            <p>
                Please wait or feel free to hammer the Submit button. You'll notice the system
                actually handles overlapping requests, though under real world circumstances,
                we'd probably just block the button.
            </p>
        </div>
    </div>
);

export default CalculationFeedback;