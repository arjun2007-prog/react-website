import logo from './logo.svg';
import './App.css';
import Navbar from "./reactComponents/navbar.js"
import {Todo} from "./reactComponents/todo.js"
import {Footer} from "./reactComponents/footer.js"

function Delete(clickedTodo){
  
}

function Display() {
  //Whatever html we write must be returned on the function call so that the html can be used and display. 
  //Theyfore, it is written inside the return function
  let todoItems = [
    {
      sno:1,
      title:"Go to Market",
      desc:"Buy vegitables and fruits"
    },
    {
      sno:2,
      title:"Go to Mall",
      desc:"Buy vegitables and fruits"
    },
    {
      sno:3,
      title:"Go to office",
      desc:"Buy vegitables and fruits"
    }
  ]
  return (
    <>
    <Navbar title={"Todo List"} searchBar={true}/>
    <Todo todos={todoItems} onDelete={Delete}/>
    <Footer />
    </>
  );
}

// This tells what to be exported when the file is imported and currently it 
//refers to the function Display
export default Display;
