function ProductItem ({obj : {product, price, description}}) {
    return (
        <>
            <h1>Product : {product}</h1>
            <h2>Price : {price}</h2>
            <p>Description : {description}</p>
        </>
    );
}


function App () {

    let pro1 = {product:'Beer' ,price:'250 ฿' ,description:'DIPA 8.6%'};
    let pro2 = {product:'Beer' ,price:'230 ฿' ,description:'STOUT 8.2%'};

    return <div className='container'>
        <ProductItem obj={pro1}/>
        <ProductItem obj={pro2}/>
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);