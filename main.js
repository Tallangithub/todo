

function addTodo(){
    const inputElement=document.querySelector('input');
    const value=inputElement.value;

    const  todocontainer=document.createElement('div');
    todocontainer.className=  'flex  justify-between items-center';
    
    const todoTitle=document.createElement('h4');
    todoTitle.textContent=value;

    const doneButton=document.createElement('button');
    doneButton.className='bg-green-500 p-2  rounded-lg';
    doneButton.textContent='Done';

    todocontainer.appendChild(todoTitle);
    todocontainer.appendChild(doneButton);

    const allTodosContainer=document.querySelector('#todosContainer');
    allTodosContainer.appendChild(todocontainer);
    inputElement.value='';
}

