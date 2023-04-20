let height = 1.75;
let weight = 90;

function BMI(h, w) {
    return w/(h**2)
}

const CalBmi = <h1>{BMI(height, weight)}</h1>

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(CalBmi);