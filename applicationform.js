var selectedtr = null;
var btn = document.querySelector('.button');
btn.addEventListener('click',emply);
function emply(){
    var transferdata = dataread();
    if (selectedtr == null){
        insertdata(transferdata);
    }
    else{
        update()
        selectedtr = null
    }
    reset();
    
}
function dataread(){
    var empy = {};
    empy.name = document.querySelector('.name').value;
    empy.lastname =document.querySelector('.last').value;
    empy.des = document.querySelector('.des').value;
    empy.sal = document.querySelector('.sal').value;
    return empy
    
}
function insertdata(x){
    
    var table = document.querySelector('.list');
    var tr = table.insertRow(table.length);
    var td = tr.insertCell(0);
    var td1 = tr.insertCell(1);
    var td2 = tr.insertCell(2);
    var td3 = tr.insertCell(3);
    var td4 = tr.insertCell(4);
    var td5 = tr.insertCell(5);
    
    td.innerHTML = table.rows.length-1;
    td1.innerHTML = x.name;
    td2.innerHTML = x.lastname;
    td3.innerHTML = x.des;
    td4.innerHTML = x.sal;
    td5.innerHTML = "<a class='edt' onClick='edit(this)'>Edit</a>/<a class='del' onClick='dlt(this)'>Delete</a>";
    
}

function reset(){
    document.querySelector('.name').value = '';
    document.querySelector('.last').value = '';
    document.querySelector('.des').value = '';
    document.querySelector('.sal').value = '';
}

function edit(y){
    selectedtr = y.parentElement.parentElement;
    document.querySelector('.name').value = selectedtr.cells[1].innerHTML ;
    document.querySelector('.last').value = selectedtr.cells[2].innerHTML;
    document.querySelector('.des').value = selectedtr.cells[3].innerHTML;
    document.querySelector('.sal').value = selectedtr.cells[4].innerHTML;
    
}

function update(){
    
    selectedtr.cells[1].innerHTML = document.querySelector('.name').value;
    selectedtr.cells[2].innerHTML = document.querySelector('.last').value;
    selectedtr.cells[3].innerHTML = document.querySelector('.des').value;
    selectedtr.cells[4].innerHTML = document.querySelector('.sal').value ;
}

function dlt(dt){
    var delrow = dt.parentElement.parentElement.remove();
    
}
