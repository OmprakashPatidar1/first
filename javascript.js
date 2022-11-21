
var form=document.getElementById('addForm');
var itemList=document.getElementById('items');   
var filter=document.getElementById('filter')
//form submit event
form.addEventListener('submit',addItem);


//delete event
itemList.addEventListener('click',removeItem)

//filter event
filter.addEventListener('keyup',filterItems)
// add item
function addItem(e){
    e.preventDefault();
    
    //get input value
    var newItem= document.getElementById('item').value;
    var newItem1= document.getElementById('item1').value;
    
    // create new li element
    var li = document.createElement('li');
    //add class
    li.className='list-group-item';

    //add text node  with input value
    li.appendChild(document.createTextNode(newItem))
    
    li.appendChild(document.createTextNode(newItem1))
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


// filter item
function filterItems(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
    //get list
    var items=itemList.getElementsByTagName('li');

    //convert to an array
    Array.from(items).forEach(function(item) {
        var itemName=item.firstChild.textContent;
        var description=item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 || description.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';     
        }else{
            item.style.display='none';
        }
    })
}