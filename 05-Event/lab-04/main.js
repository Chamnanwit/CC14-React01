function App () {

    const handleClick = (et) => {
        let confirm = window.confirm('Leave for https://google.com?');
        if (!confirm) {
            et.preventDefault();
        }
    }

    return <div className='container'>
        <a href='https://www.google.com/' onClick={handleClick}>Google</a>
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);