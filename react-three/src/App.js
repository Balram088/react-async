
import './App.css';
import { UseEffectWorking } from './sprint1/useEffect/UseEffectWorking';
// import Login from './sprint1/AuthTurnery/Login';
// import { SecoundTodo } from './sprint1/SecoundTodo.jsx/SecoundTodo';
// import FirstTodo from './sprint1/Todo/FirstTodo';

import { CartCantainer } from './sprint2/Cart/Components/CartCantainer';
import { Todouseeffect } from './sprint2/useEffectTodo/Todouseeffect';



function App() {
  return (
    <div className="App">
       {/* <FirstTodo/> */}
      {/* <div className='stodo'>
         <SecoundTodo/>
       </div> */}
       {/* <Login isAuth={true}/> */}
     {/* <PostMsg/>  usewithout props and use destructuring method */}
    
       {/* <CartCantainer/> */}
       {/* <Todouseeffect/> */}
       <UseEffectWorking/>
    </div>
  );
}

export default App;
