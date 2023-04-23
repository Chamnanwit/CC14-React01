function App () {

    const handleChange = (event) => {
        console.log('Name', event.target.name);
        console.log('Value', event.target.value);
        console.log('Status', event.target.checked);
    };

    return <div className='container'>
        <h1>Event Hander</h1>
        <input type='checkbox' name='phoneBrand' value='iPhone' onChange={handleChange}/>
        <label for="phoneBrand"> iPhone</label>
        <input type='checkbox' name='phoneBrand' value='Samsung' onChange={handleChange}/>
        <label for="phoneBrand"> Samsung</label>
        <input type='checkbox' name='phoneBrand' value='Nokie' onChange={handleChange}/>
        <label for="phoneBrand"> Nokie</label>
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);