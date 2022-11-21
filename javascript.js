
var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);


//delete event
itemList.addEventListener('click',removeItem)

// add item
function addItem(e){
    e.preventDefault();
   
    //get input value
    var newItem= document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');
    //add class
    li.className='list-group-item';

    //add text node  with input value
    li.appendChild(document.createTextNode(newItem))
    
    //create del button element
    var deleteBtn=document.createElement('button');
    
    // add classes to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //append button to li
    li.appendChild(deleteBtn);


    //append li to list
    itemList.appendChild(li);
}

// remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
     if(confirm('Are You Sure?')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
     }
    }
}

