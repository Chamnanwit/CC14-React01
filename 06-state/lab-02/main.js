function App () {

    const [isShow, setIsShow] = React.useState(true);
    //let isShow = true;

    const onHide = () =>  setIsShow(false);
    

    return <div className='container'>
        <button onClick={onHide}>Click me to hide TEXT</button>
        {isShow && <h1>TEXT</h1>}
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);