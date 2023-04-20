let linkEl = React.createElement('a', { className: 'card__link', href: 'https://www.google.com/' }, 'More Information...');
let text ='This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.';
const content = React.createElement('p', {}, text);
const header = React.createElement('h1', { className: 'card__content' }, 'Example Domain');
const card = React.createElement('div', { className: 'card' }, header, content, linkEl);


//ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(card);