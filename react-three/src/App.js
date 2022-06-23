
import './App.css';
import { PostMsg } from './Post/Post';


function App() {
  return (
    <div className="App">
       <PostMsg 
         img="https://avatars.githubusercontent.com/u/93612939?v=4"
         title="Balram Patidar"
         posts={["Hello guys", "Good Morning","Good Afternoon","Good Night"]}
      />

      <PostMsg/>

  
    </div>
  );
}

export default App;
