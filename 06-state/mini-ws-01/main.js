function App () {

    const [show, setShow] = React.useState(true);

    const handleShow = () =>  setShow(!show);
    let textInButton = show ? 'Hide' : 'Show';
    
    return <div className='container'>
        <button onClick={handleShow}>{textInButton}</button>
        {show && <h1>TEXT</h1>}
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

