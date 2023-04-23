function App () {
    return <div className='container'>
        {/* <label>Province :</label>
        <select value={} onChange={} />
        <option value=''>-- Select a province --</option> */}
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);