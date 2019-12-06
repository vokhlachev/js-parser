window.addEventListener('DOMcontentLoaded', () => {
    const body = document.querySelector('body');
    let textNotes = [];
    function recursy (elenemt) {
        element.childNodes.forEach(node => {
           
            if (node.nodeName.match(/^H\d/)) {
                const obj = {
                    header: node.nodeName,
                    content: node.textContent
                };
                textNotes.push(obj);
            } else {
                recurcy(node);
            }
        });
    }

    recurcy(body);
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(textNodes)
    })
    .then(response => response.json())
    .then(json => console.log(json));
});