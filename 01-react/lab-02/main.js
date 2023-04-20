
let list1 = React.createElement('li', null, 'How to create and nest components');
let list2 = React.createElement('li', null, 'How to add markup and styles');
let list3 = React.createElement('li', null, 'How to display data');
let list4 = React.createElement('li', null, 'How to render conditions and lists');
let list5 = React.createElement('li', null, 'How to respond to events and update the screen');
let list6 = React.createElement('li', null, 'How to share date between components');
let lists = React.createElement('ul', { className: 'lists' }, list1, list2, list3, list4, list5, list6);

const header2 = React.createElement('h2', { className: 'heard2' }, 'You will learn');
const boxContent = React.createElement('div', { className: 'box' }, header2, lists)
const content = React.createElement('p', {}, 'Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.');
const header = React.createElement('h1', { className: 'heard' }, 'Quick Start');
let learn = React.createElement('a', { className: 'learn', href: 'https://www.google.com/' }, 'LEARN  REACT >');
const card = React.createElement('div', { className: 'card' }, learn, header, content, boxContent);


//ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(card);

