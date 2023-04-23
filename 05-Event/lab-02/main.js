function App () {

    const handleChange = (event) => {
        console.log(event.target.value);
    };

    return <div className='container'>
        <h1>Event Hander</h1>
        <select onChange={handleChange}>
            <option value=''>Select a country</option>
            <option value='Thailand'>Thailand</option>
            <option value='English'>England</option>
            <option value='Switzerland'>Switzerland</option>
            <option value='Neterlands'>Netherlands</option>
            <option value='United states'>United states</option>
        </select>
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);