import { useState } from 'react'

function ContactForm(props) {

    const [name, setName] = useState('');
    const [lastName, setLastname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    function saveName(e) {
        setName(e.target.value)
    }

    function saveLastName(e) {
        setLastname(e.target.value)
    }

    function savePhoneNumber(e) {
        setPhoneNumber(e.target.value)
    }

    function saveMessage(e) {
        setMessage(e.target.value)
    }


    return (
        <div className="contactform-div">
            <form id='kontakt_forma'>
                <div className="form-elm">
                    <label>Name: </label>
                    <input type={'text'} className="form-control mt-2 mb-2" value={name} onChange={saveName} />
                </div>
                <div className="form-elm">
                    <label>Lastname: </label>
                    <input type={'text'} className="form-control mt-2 mb-2" value={lastName} onChange={saveLastName} />
                </div>
                <div className="form-elm">
                    <label>Phone number: </label>
                    <input type={'text'} className="form-control mt-2 mb-2" value={phoneNumber} onChange={savePhoneNumber} />
                </div>
                <div className="form-elm">
                    <label>Message: </label>
                    <textarea className="form-control mt-2 mb-2" value={message} onChange={saveMessage} />
                </div>
                <button type="button" onClick={() => { props.showMessage(name, lastName, phoneNumber, message) }} className='btn btn-danger' >Send message</button>
            </form>
        </div >
    );
}

export default ContactForm