function App () {

    // #1 Do Logic
    // const handleChange = (event) => {
    //     console.log('Click');
    // };

    const handleChange = (event) => {
        console.log(event.target.value);
    };

    return <div className='container'>
        <h1>Event Hander</h1>
        <input onChange={handleChange} />
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);