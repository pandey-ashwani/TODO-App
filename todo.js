let todoInput=[{item:'Buy Milk',
               dueDate:'8/2/2024'
              }];
todoPrint();

function addTodo(){
  let inputElement = document.querySelector('.todo-input');
  let inputElementValue= inputElement.value;

  let inputDate = document.querySelector('.todo-date');
  let inputDateValue= inputDate.value;
  
  todoInput.push({item:inputElementValue, dueDate:inputDateValue});
  inputElement.value='';
  inputDate.value='';
  todoPrint();
}

function todoPrint(){
    let i;
    let inputvalue=document.querySelector('.todo-container');
    let newHTML ='';
  for(i=0;i< todoInput.length;i++){
    let {item,dueDate}=todoInput[i];
    newHTML+=`
    <span>${item}</span>
    <span>${dueDate}</span>
    <button id="dlt-btn" onclick=" todoInput.splice(${i},1); todoPrint();">Delete</button>
    `;
  }
  inputvalue.innerHTML=newHTML;
}