function createDOMElement(data){
    var parentElement = document.getElementById('mainArea')
            parentElement.innerHTML = '';
    for (var i=0; i < data.length; i++){
        var childElement = document.createElement('div');        
        //childElement.innerHTML = data[i].title;
        
        var grandChildElement1 = document.createElement('span')
        grandChildElement1.innerHTML = data[i].title;
                
        var grandChildElement2 = document.createElement('span')
        grandChildElement2.innerHTML = data[i].description;

        var grandChildElement3 = document.createElement('button')
        grandChildElement3.setAttribute('onclick','deletetodo('+data[i].id+')')
        grandChildElement3.innerHTML = 'delete';

        childElement.appendChild(grandChildElement1);
        childElement.appendChild(grandChildElement2);
        childElement.appendChild(grandChildElement3);
                
        parentElement.appendChild(childElement)
    }
}

window.setInterval(() => {
let todos = []
    for (let i = 0; i < Math.floor(Math.random()*100); i++){
        todos.push({
            id : i+1,
            title : 'Cooking',
            description : 'Cooking food'
        })
    }
    createDOMElement(todos)
},1000)
