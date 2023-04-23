
function NikeCard ({ src, material='',name, type, data, price, price2=""}) {
    return (
        <>
        <div className='card'>
            <img src={src} />
            <p className='material__product'>{material}</p>
            <p className='name__product'>{name}</p>
            <p className='type__product'>{type}</p>
            <p className='data__product'>{data}</p>
            <p className='price__product'>{price} <span className='price2__product'>{price2}</span></p>
        </div>
        </>
    )
}

function App () {
    let link1 = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e1f74bfb-02b1-4d68-a024-244da49ff8ec/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-systm-x3Bgkf.png';
    let link2 = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3bc861e-d279-4fd8-85fa-3d80b869ec7b/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-max-90-K0Hf12.png';
    let link3 = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/531a610a-9317-4a1b-bbf6-325efb99e6e2/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.png';

    return <div className='container'>
        <NikeCard src={link1} material="วัสดุที่เป็นมิตรต่อสิ่งแวดล้อม" name="Nike Air Max SYSTM" type="รองเท้าทารก/เด็กวัยหัดเดิน" data="2 สี" price="฿2,100" />
        <NikeCard src={link2} name="Nike Air Max 90" type="รองเท้าผู้ชาย" data="2 สี" price="฿3,759" price2="฿4,700"/>
        <NikeCard src={link3} name="Nike Air Max 97" type="รองเท้าเด็กโต" data="2 สี" price="฿3,839" price2="฿4,800"/>
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);