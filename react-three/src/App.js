
import './App.css';
import Login from './sprint1/AuthTurnery/Login';
import FirstTodo from './sprint1/Todo/FirstTodo';



function App() {
  return (
    <div className="App">
       <FirstTodo/>
       <Login isAuth={false}/>
     {/* <PostMsg/>  usewithout props and use destructuring method */}
    
   
    </div>
  );
}

export default App;
