// parent          
import React from 'react'
import DoList from './Do'
import DoneList from './Done'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//get data
let todoarr=[{
    "userId": 1,
    "id": 1,
    "title": "one",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "two",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "three",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "four",
    "completed": true,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 5,
    "title": "five",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "six",
    "completed": false,"deleted":false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "seven",
    "completed": false,"deleted":false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "eight",
    "completed": true,"deleted":false
  },
  {
    "userId": 1,
    "id": 9,
    "title": "nine",
    "completed": false,"deleted":false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "ten",
    "completed": true,"deleted":false
  }]
class Todo extends React.Component{
        constructor(props)
        {
            super()
        this.state={
            todoarr:todoarr
        }
        
        }
getDoItem=()=>{
  return todoarr.filter((todo)=>todo.completed===false)
}
getDoneItem=()=>{
  return todoarr.filter((todo)=>todo.completed===true)
}

toggletodo=(todoId)=>{
          // copy of an array 
          const temparr=[...todoarr] 
          // find the object based on the id
        const todo=temparr.find((todo)=>todo.id===todoId)
          // change the completed between true or false
              todo.completed=!todo.completed
              this.setState({todos:temparr})

}

deleteTodo=(todoId)=>{
   // copy of an array 
   const temparr=[...todoarr] 
   // find the object based on the id
 const todo=temparr.find((todo)=>todo.id===todoId)
   // change the value to true 
       todo.deleted=true;
       this.setState({todos:temparr})
       console.log(this.state.todos)
}
    render(){
        return(<>
        <div className='container'>
        <h1 className='text-center'>Todo List</h1><hr></hr>
       <div className='row'>
       <div className='col'> <DoList doitem={this.getDoItem()}  toggletodo={this.toggletodo} deletedTodo={this.deleteTodo}></DoList></div>
       <div className='col'> <DoneList doneitem={this.getDoneItem()} toggletodos={this.toggletodo} deletedTodos={this.deleteTodo}></DoneList></div>
       </div>
       </div>
      
        </>)
    }
}


export default Todo