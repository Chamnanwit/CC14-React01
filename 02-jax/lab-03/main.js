const CalBmi = (
    <>
        <label htmlFor="username">Username</label>
        <input type="text" className="username" id="username" name="username" />
    </>
);


// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(reactEl);