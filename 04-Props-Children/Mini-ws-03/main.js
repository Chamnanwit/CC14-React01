// Render
function KeyPress({ content, additionClass, radius}) {
    // let styleObj = {
    //     borderRadius: '20px',
    // };
    return (
        <div className={`keypress ${additionClass} ${radius}`}>
            <p> {content}</p>
        </div>
    );
}

function App() {
    return (
        <div className='container'>
            <div className='calculator'>
                <div className='item--1'>0</div>
                <KeyPress content='C' additionClass='bg--gray'/>
                <KeyPress content='+/-' additionClass='bg--gray'/>
                <KeyPress content='%' additionClass='bg--gray'/>
                <KeyPress content='/' additionClass='bg--orange'/>
                <KeyPress content='7' additionClass=''/>
                <KeyPress content='8' additionClass=''/>
                <KeyPress content='9' additionClass=''/>
                <KeyPress content='X' additionClass='bg--orange'/>
                <KeyPress content='4' additionClass=''/>
                <KeyPress content='5' additionClass=''/>
                <KeyPress content='6' additionClass=''/>
                <KeyPress content='-' additionClass='bg--orange'/>
                <KeyPress content='3' additionClass=''/>
                <KeyPress content='2' additionClass=''/>
                <KeyPress content='1' additionClass=''/>
                <KeyPress content='+' additionClass='bg--orange' />
                <KeyPress content='0' additionClass='' radius='radiusL'/>
                <KeyPress content='.' additionClass=''/>
                <KeyPress content='&larr;' additionClass=''/>
                <KeyPress content='=' additionClass='bg--orange2' radius='radiusR'/>
            </div>
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);