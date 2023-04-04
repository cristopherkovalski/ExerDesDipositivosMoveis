'use strict';

var el = React.createElement;

function MeuElemento() {
    return el('h1', {}, 'ola mundo em react');
}

var domContainer = document.querySelector('#react');
ReactDOM.render(el(MeuElemento, null, null), domContainer);