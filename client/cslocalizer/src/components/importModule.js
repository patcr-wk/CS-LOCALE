import React, { Fragment, useState } from 'react';
import Message from './Message';

const LocalizeEntry = () => {
    const [message, setMessage] = useState('');
    // importEntry();
    const onSubmit = async e => {
        e.preventDefault();
        const url = 'http://localhost:5000/localize'
        fetch(url).then(response => {
            if (response.status === 500) {
                setMessage("There was a problem with the server");
            } else if (response.status === 200) {
                setMessage('Entry localized successfully');
            }
        }).catch(err => {
            setMessage('Error: ' + err.message);
            console.log(err);
        });

    };


    return (
        <Fragment>
            {message ? <Message msg={message} /> : null}
            <form>
                <input
                    type='button'
                    onClick={onSubmit}
                    value='Localize Entry'
                    className='btn btn-primary btn-block mt-4'
                />
            </form>
        </Fragment>
    );

};
export default LocalizeEntry;
