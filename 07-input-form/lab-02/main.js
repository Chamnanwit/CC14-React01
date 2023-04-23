function App () {

    const [text, setText] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');

    const handleCheckNumber = (e) => {
        // if(e.target.value === '') {
        //     setText('Phone Number is required');
        // } else if(isNaN(Number(e.target.value))) {
        //     setText('Phone Number is invalid');
        // } else if(e.target.value.length !== 10) {
        //     setText('Invalid length')
        // } else {
        //     alert('Your number is valid');
        //     setText('');
        // }
        if (phoneNumber === '') {
            setText('Phone Number is required');
          } else if (isNaN(phoneNumber)) {
            setText('Phone Number is invalid');
          } else if (phoneNumber.length !== 10) {
            setText('Invalid length');
          } else {
            alert('Your number is valid');
            setText('');
          }
    };

    return <div className='container'>
        <span><input type='text' placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} /> <button onClick={handleCheckNumber} >Check</button></span>
        {text && <p style={{ color: "red" }}>{text}</p>}
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);