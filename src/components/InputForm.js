import React, { PropTypes } from 'react'
import CalculationFeedback from './CalculationFeedback'
import FormDescription from './FormDescription'

const InputForm = ({input, calculating, onSubmit, onChange, valid}) => {
    let feedback = calculating ? (
        <CalculationFeedback />
    ) : null;
    return (
        <form onSubmit={e => {
            e.preventDefault();
            onSubmit();
        }}>
            <div className="row form-body">
                <div className="medium-6 columns">
                    <FormDescription />
                    <label>Input value
                        <input type="text" maxLength="10" value={input} onChange={e => onChange(e.target.value)} />
                    </label>
                </div>
                {feedback}
            </div>
            <div className="row form-footer">
                <div className="medium-12 columns">
                    <button disabled={!valid} className="button primary" type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}


InputForm.propTypes = {
    input: PropTypes.string.isRequired,
    calculating: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired
}

export default InputForm;