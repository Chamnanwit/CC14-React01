
function NikeTop ({name}) {
    return (
        <span>{name}</span>
    );
}


function NikeBottom (props) {
    return (
        <>
        <h6>{props.listName}</h6>
        {props.children}
        </>
    );
}

function App () {
    return <div className='container'>
        <div className='head'>
            <NikeTop className='now' name='ใหม่และโดดเด่น'/>
            <NikeTop name='ผู้ชาย' />
            <NikeTop name='ผู้หญิง' />
            <NikeTop name='เด็ก' />
            <NikeTop name='ลดราคา' />
            <NikeTop name='SNKRS' />
        </div>
        <div className='main'>
            <div className='box'>
            <NikeBottom listName='ใหม่และโดดเด่น'>
                <p>สินค้ามาใหม่</p>
                <p>รองเท้ารุ่นใหม่ล่าสุด</p>
                <p>เสื้อผ้าสไตล์ใหม่ล่าสุด</p>
                <p>ปฎิทินเปิดตัว SNKRS</p>
                <p>เป็นเจ้าของได้แล้วที่ SNKRS</p>
                <p>ออกแบบเองกับ Nike By You</p>
                <p>พิเศษเฉพาะบน Nike App</p>
                <p>สินค้าขายดี</p>
                <p>พิเศษสำหรับ Member</p>
                <p>ลดสูงสุด 30% ในสินค้าที่กำหนด*</p>
            </NikeBottom>
            </div>
            <div className='box'>
            <NikeBottom listName='ซื้อสินค้าไอคอน'>
                <p>Air Force 1</p>
                <p>Air Jordan 1</p>
                <p>Air Max</p>
                <p>Dunk</p>
                <p>Blazer</p>
                <p>Pegasus</p>
            </NikeBottom>
            </div>
            <div className='box'>
            <NikeBottom listName='สินค้าใหม่สำหรับผู้ชาย'>
                <p>รองเท้า</p>
                <p>เสื้อผ้า</p>
                <p>อุปกรณ์และอุปกรณ์เสริม</p>
                <p>ซื้อสินค้าใหม่ทั้งหมด</p>
            </NikeBottom>
            </div>
            <div className='box'>
            <NikeBottom listName='สินค้าใหม่สำหรับผู้หญิง'>
                <p>รองเท้า</p>
                <p>เสื้อผ้า</p>
                <p>อุปกรณ์และอุปกรณ์เสริม</p>
                <p>ซื้อสินค้าใหม่ทั้งหมด</p>
            </NikeBottom>
            </div>
            <div className='box'>
            <NikeBottom listName='สินค้าใหม่สำหรับเด็ก'>
                <p>รองเท้า</p>
                <p>เสื้อผ้า</p>
                <p>อุปกรณ์และอุปกรณ์เสริม</p>
                <p>ซื้อสินค้าใหม่ทั้งหมด</p>
            </NikeBottom>
            </div>
        </div>
    </div>
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);