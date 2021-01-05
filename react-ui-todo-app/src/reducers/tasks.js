const initialTasks = {
    todos: [
     {
         id: "1",
         title: "Learn Programming Concepts",
         description : "This is the basic concept that you need to understand to start coding",
         status: 1
     }, {
         id: "2",
         title: "Learn Mathematics",
         description : "This is very much needed for problem solving skills",
         status: 0
     }, {
         id:"5",
         title: "Then Learn Any Programming Language",
         description : "In programming languages I like Java and Javascript",
         status: 1
     }, {
         id:"3248623",
         title: "Something Else",
         description : "Something Else,Something Else Something Else Something Else Something Else Something Else",
         status: 0
     }
 ]
 }
 
 const tasks = (state = initialTasks, action) => {
     switch (action.type) {
         case "ADD": {
             let task = action.payload;
             let tasks = state.todos;
             tasks.unshift(task);
             return {
                 ...state,
                 todos: tasks
             }
         }
 
         case "UPDATE": {
             let task = action.payload;
             let tasks = state.todos;
             for(let i = 0; i < tasks.length; i++ ){
                 if(tasks[i]["id"] === task.id){
                     tasks[i] = task;
                     break;
                 }
             }
             return {
                 ...state,
                 todos: tasks
             }
         }
         case "DELETE":{ 
             let task = action.payload;
             let tasks = state.todos;
             let index;
             for(let i = 0; i < tasks.length; i++ ){
                 if(tasks[i]["id"] === task.id){
                     index = i;
                     break;
                 }
             }
             tasks.splice(index, 1);
             return {
                 ...state,
                 todos: tasks
             }
         }
         default:
             return {
                 ...state,
                 user: null
             }
     }
 }
 
 export default tasks;