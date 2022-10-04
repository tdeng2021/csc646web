import './App.css';

import UserBar from './user/UserBar'
import CreateTodoItem from './todo/CreateTodoItem'
import TodoList from './todo/TodoList.js'

function App(){

    const todos = [
	{
	    title:"Todo item #1", 
            description:"Description:  Some new todo description",
            dateCreated: "{dateCreated}",
            complete:"Completed todo item",
            dateCompleted:"{dateCompleted}"
	},

	{
	    title:"Todo item #2", 
            description:"Description:  Another new todo description",
            dateCreated: "{dateCreated}",
            complete:"Completed todo item",
            dateCompleted:"{dateCompleted}"
	},

	{
	    title:"Todo item #3", 
            description:"Description:  Still another new todo description",
            dateCreated: "{dateCreated}",
            complete:"Completed todo item",
            dateCompleted:"{dateCompleted}"
	}
    ]
   
    return (
       <div>
         <UserBar />
           <br/><br/><hr/><br/><br/>
	 <CreateTodoItem user="Ting Deng" />
	 <TodoList todos={todos} />  
       </div>
    )	    	
}


 
export default App;
