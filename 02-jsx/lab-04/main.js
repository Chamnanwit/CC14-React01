const app = (
    <div className='main'>
        <div className='main__left'>
            <img src='./food-lab04.png' className='main__left--img'/>
        </div>
        <div className='main__right'>
            <div className='main__right--content'>
                <h1>Discover authentic Japanese cuisine in LA. Opening Soon!</h1>
                <p>Welcome to Hensui, the newest addition to the vibrant Los Angeles dining scene! Our restaurant is dedicated to bringing you the most authentic and delicious Japanese cuisine.</p>
                <br></br>
                <p>Stay tuned for our grand opening date, sign up with your e-mail address to get notified.</p>
                <form>
                    <input type='text' placeholder='e-mail' className='email'></input>
                    <input type='submit' value='SUBMIT' className='submit'></input>
                </form>
            </div>
        </div>
    </div>
);

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(app);