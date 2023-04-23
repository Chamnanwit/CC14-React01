function ProductItem ({product, price, description}) {
    return (
        <>
            <h1>Product : {product}</h1>
            <h2>Price : {price}</h2>
            <p>Description : {description}</p>
        </>
    );
}


function App () {
    return <div className='container'>
        <ProductItem product='Beer' price='250 ฿' description='DIPA 8.6%'/>
        <ProductItem product='Beer' price='230 ฿' description='STOUT 8.2%'/>
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);