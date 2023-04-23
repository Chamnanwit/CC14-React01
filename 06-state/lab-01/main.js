function App () {

    const [show, setShow] = React.useState(true);
    //let isShow = true;

    const handleClickToHide = () => {
        setShow(!show);
        console.log(show);
    };

    return <div className='container'>
        <div>{show && <button onClick={handleClickToHide}>Click to hide me</button>}</div>
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);