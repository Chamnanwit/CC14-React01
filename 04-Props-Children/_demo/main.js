function MyComponent({ title, age, isAdmin}) {
    // Child รับ Prop
    // console.log(props);

    //สิ่งที่ห้ามทำคือการแก้ Prop
    // props.title = 'tong' ห้ามแก้

    // prop destructuring
    //const {title, age, isAdmin} = props;

    //return <h6>My-Component</h6>;

    return (
        <div>
            <h6>{title}</h6>
            <p>{age}</p>
            {isAdmin && <button>Click for delete</button>}
        </div>
    )
}


function MyLists () {

    return (
        <ul>
            <li></li>
            <li></li>
        </ul>
    )
}


// Parent
function App() {
    // เรียก Render == Call Function Component
    // Pass Prop == pass ที่ App (Parent)

    // ตัวอย่าง --->  ให้ดูการที่ Add ส่ง Prop
    let name = 'jobs';
    let age = 27;
    let isAdmin = true;

    // Child
    return (
        <div className='container'>
            <MyComponent title='pavit' age={20} isAdmin={true} />
            <MyComponent title={name} age={age} isAdmin={isAdmin} />
            <MyComponent title='max' age={23} isAdmin={false} />
            <MyComponent title='bung' age={27} isAdmin={false} />
        </div>
    );
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);