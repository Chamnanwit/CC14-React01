let fullName = 'Chamnanwit Emdit';
let birthYear = 1996;
let CURRENT_YEAR = 2023
let imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Prawit_Wongsuwan_%282018%29_cropped.jpg';

const App = (
    <>
        <h1>{fullName}</h1>
        <p>{CURRENT_YEAR - birthYear}</p>
        div
        <img src={imgSrc} />
    </>
);

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(App);