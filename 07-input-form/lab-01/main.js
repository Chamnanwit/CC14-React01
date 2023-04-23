function App () {

    const [text, setText] = React.useState(0);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return <div className='container'>
        <span>Enter Dollar : <input type='text' onChange={handleChange} value={text}/></span>
        <p>Convert to Bath : {text*30} Bath</p>
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);