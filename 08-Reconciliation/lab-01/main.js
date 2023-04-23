function App () {

    const arr = ['Tong', 'Tan', 'Zup'];
    const [friend, setFriend] = React.useState(arr);

    return <div className='container'>Lab</div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);