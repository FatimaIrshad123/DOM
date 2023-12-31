function enter(){
    var list1 = document.querySelector('ul');
    var newname = document.getElementById('value').value;
    const item = document.createElement('li');
    item.className = 'dele';
    
    var but = document.createElement('input');
    but.setAttribute('type','button');
    but.setAttribute('value','DELETE');
    but.setAttribute('onclick','del(this)');

    var but1 = document.createElement('input');
    but1.setAttribute('type','button');
    but1.setAttribute('value','UPDATE');
    but1.setAttribute('onclick','update(this)');
    but1.className = 'upd';
    if (newname == ''){
        alert('Plz Enter Text');
    }
    else {
        item.innerHTML = newname;
        item.append(but);
        item.append(but1)
        list1.append(item);
    }
};


var dele = document.getElementsByClassName('dele');

function del(dele){
   dele.parentElement.remove(); 
}


function update(y){
    var input = document.getElementById('value').value;
    var node = document.createTextNode(input);
    if (input == ''){
        alert('Enter Text');
    }
    else{
        var z = y.parentElement.childNodes[0];
        z.parentNode.replaceChild(node,z);
        return 'text added';
    }
}