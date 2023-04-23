function Profile ({name, age}) {
    //console.log(props);
    //const {name, age} = props;
    return (
        <>
            <h1>Name : {name}</h1>
            <h2>Age : {age}</h2>
        </>
    );
}

function App () {
    return <div className='container'>
        <Profile name='John Doe' age={27}/>
        {/* <Profile name='Mark Ruffalo' age={30}/>
        <Profile name='Chuwit K.' age={49}/> */}
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);