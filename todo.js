let addButton = document.querySelector('input.add');
let ul = document.querySelector('ul');
let index = localStorage.length
console.log(index)

function addElementUl(){
    let item = document.createElement("li"); 
    let inputtext = document.createElement("input"); 
    inputtext.setAttribute("type", "text");
    inputtext.setAttribute("disabled", "disabled")
    inputtext.setAttribute("att", i)
    let deleteitem = document.createElement("input");
    deleteitem.value = 'DELETE';

    let updateitem = document.createElement("input");
    updateitem.value = 'UPDATE';
    updateitem.classList.add("update");
    updateitem.setAttribute("type", "button");
    
    deleteitem.setAttribute("type", "button");
    deleteitem.classList.add("del");
   
    ul.appendChild(item); 
    item.appendChild(inputtext);  
    item.appendChild(deleteitem);  
    item.appendChild(updateitem);  
    inputtext.value = localStorage.getItem(key)
}
for(let i=0; i<localStorage.length; i++) {
    
    let key = localStorage.key(i);
    console.log(key,' ','dd');
    
    let item = document.createElement("li"); 
    let inputtext = document.createElement("input"); 
    inputtext.setAttribute("type", "text");
    inputtext.setAttribute("disabled", "disabled")
    inputtext.setAttribute("att", key)
    let deleteitem = document.createElement("input");
    deleteitem.value = 'DELETE';

    let updateitem = document.createElement("input");
    updateitem.value = 'UPDATE';
    updateitem.classList.add("update");
    updateitem.setAttribute("type", "button");
    
    deleteitem.setAttribute("type", "button");
    deleteitem.classList.add("del");
   
    ul.appendChild(item); 
     
    item.appendChild(inputtext);  
    item.appendChild(deleteitem);  
    item.appendChild(updateitem);  
    inputtext.value = localStorage.getItem(key)

    deleteitem.addEventListener('click',(e)=>{
        e.target.parentElement.remove()
        console.log(e.target.parentElement.childNodes[0].getAttribute('att'))
        localStorage.removeItem(e.target.parentElement.childNodes[0].getAttribute('att'))
    });
    
    updateitem.addEventListener('click',(e)=>{
        let textUpdate = e.target.parentElement.childNodes[0];
        textUpdate.toggleAttribute('disabled');
       console.log( textUpdate.getAttribute('att'))

       localStorage.setItem(textUpdate.getAttribute('att'), textUpdate.value);
    
    });
    
  }

addButton.addEventListener('click',(e)=>{
    
    let item = document.createElement("li"); 
    let hr = document.createElement("hr"); 
    let inputtext = document.createElement("input"); 
    inputtext.setAttribute("type", "text");
    inputtext.setAttribute("disabled", "disabled")
    inputtext.setAttribute("att", ++index)
    let deleteitem = document.createElement("input");
    deleteitem.value = 'DELETE';

    let updateitem = document.createElement("input");
    updateitem.value = 'UPDATE';
    updateitem.classList.add("update");
    updateitem.setAttribute("type", "button");
    
    deleteitem.setAttribute("type", "button");
    deleteitem.classList.add("del");
   
    ul.appendChild(item);
   
    item.appendChild(inputtext);  
    item.appendChild(deleteitem);  
    item.appendChild(updateitem);  
    inputtext.value = document.querySelector('.value').value
    
    localStorage.setItem(inputtext.getAttribute('att'),inputtext.value);

    deleteitem.addEventListener('click',(e)=>{
    e.target.parentElement.remove()
    localStorage.removeItem(e.target.parentElement.childNodes[0].getAttribute('att'))
});

updateitem.addEventListener('click',(e)=>{
    let textUpdate = e.target.parentElement.childNodes[0];
    textUpdate.toggleAttribute('disabled');

});

});


