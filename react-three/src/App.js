
import './App.css';
import { Form } from './sprint2/Form/Form';
import Timer from './sprint2/Useref/Timer/Timer';
   //SPRINT-1
// import Login from './sprint1/AuthTurnery/Login';
// import { SecoundTodo } from './sprint1/SecoundTodo.jsx/SecoundTodo';
// import FirstTodo from './sprint1/Todo/FirstTodo';

//SPRINT-2
// import { CartCantainer } from './sprint2/Cart/Components/CartCantainer';
// import { Todouseeffect } from './sprint2/useEffectTodo/Todouseeffect';  //with disabled and pagination
// import { UseEffectWorking } from './sprint2/useEffect/UseEffectWorking';



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
       {/* <UseEffectWorking/> */}
       {/* <Form/> */}
       <Timer/>
    </div>
  );
}

export default App;
