
import './App.css';
import { PostMsg } from './sprint1/Post/Post';
import FirstTodo from './sprint1/Todo/FirstTodo';



function App() {
  return (
    <div className="App">
       <FirstTodo/>
       <PostMsg 
         img="https://avatars.githubusercontent.com/u/93612939?v=4"
         title="Balram Patidar"
         posts={["Hello guys", "Good Morning","Good Afternoon","Good Night"]}
      />
     {/* <PostMsg/>  usewithout props and use destructuring method */}
    
   
    </div>
  );
}

export default App;
