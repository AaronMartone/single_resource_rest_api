'use strict';

function updatePage() {
    var p = document.createElement('p');
    p.appendChild(document.createTextNode('The most REST-tacular Notes App Known to Mankind'));
    document.body.appendChild(p);  
}

module.exports = updatePage;
updatePage();