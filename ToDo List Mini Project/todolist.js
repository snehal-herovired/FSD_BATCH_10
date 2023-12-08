var itemCounter=0
function addlist() {
    const inp = document.getElementById("todolist").value;
    const newl = document.querySelector(".task-list");
    const elemen = document.createElement('li');

    let itemid = 'item-' + itemCounter++;
    var completedid = 'completed-'+itemCounter++;
    elemen.id = itemid;
    elemen.setAttribute('class','task');
    elemen.innerHTML = '<p id="taskname">' + inp + '<br/><span class="pending" id="'+completedid+'">(Pending)</span></p>';
   
    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    const markAsDoneButton = document.createElement('button');
    markAsDoneButton.id = 'done';
    markAsDoneButton.textContent = 'Mark as Done';
    markAsDoneButton.setAttribute('onclick','completed("'+completedid+'")')

    const deleteButton = document.createElement('button');
    deleteButton.id = 'del';
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('onclick','delet("'+itemid+'")');

    taskActions.appendChild(markAsDoneButton);
    taskActions.appendChild(deleteButton);
    
    elemen.appendChild(taskActions);

    newl.appendChild(elemen);
}
function completed(completedid)
{
   
   const comp= document.getElementById(completedid);
  
   comp.textContent="Completed"; 
   comp.className="completed"
}
function delet(itemid)
{
    const ab = document.getElementById(itemid);
    const ull= document.querySelector(".task-list");
    ull.removeChild(ab);
}
function deleteall()
{
    const ull= document.querySelector(".task-list");
    ull.innerHTML="";  
}