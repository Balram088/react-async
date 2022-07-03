import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Todolist from "./Todolist";

export default function TodowithServer() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [iserror, setError] = useState(false);
  const [page,setPage] = useState(1)

  //Feating data from here

  
  const getTodos = (p=1) => {
    setLoading(true);
    // setError(false)
    return fetch(`http://localhost:3000/todos?&_page=${p}&_limit=${3}`)
      .then((res) => res.json())
      .then((res) => {
        setTodos(res);
       
      })
      .catch((err) => {
        setError(true);
        console.log("error aai hai please cheack", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //Add Todo (POST)
  const addTodos = (title, status) => {
    const payload = {
      title,
      status:false,
    };
    return fetch(`http://localhost:3000/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        return getTodos();
      })
      .catch((err) => {
        setError(true);
        console.log("error aai hai please cheack", err);
      })
  };

  useEffect(() => {
    getTodos(page);
  }, [page]);

   
  //Put request for status
const PutTodos = (id) => {
    let  payload ={
        
          status:true
  }
    return fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => {
        return getTodos();
      })
      .catch((err) => {
        console.log("error aai hai please cheack", err);
      })
  
  };

  //Complete to Uncomplete PATCH request
  const PutTodo = (id) => {
    let  payload ={
        
          status:false
  }
    return fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => {
        return getTodos();
      })
      .catch((err) => {
        console.log("error aai hai please cheack", err);
      })
  
  };
  const DeleteTodos = (id) => {
    return fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        return getTodos();
      })
      .catch((err) => {
        console.log("error aai hai please cheack", err);
      })
  
  };

  return loading ? (
    <div>
      <img
        src="https://cutewallpaper.org/21/loading-gif-transparent-background/My-Principal-Lifestyle.gif"
        alt=""
      />
    </div>
  ) : iserror ? (
    <div>
      <img
        src="https://media.istockphoto.com/vectors/window-system-error-vector-id1199669890?k=20&m=1199669890&s=612x612&w=0&h=NVEHec9P1DIM9dNaoN718pAmz3JqigcPKQGTfSkmbSY="
        alt=""
      />
    </div>
  ) : (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        width: "70%",
        height: "1000px",
        marginLeft: "15%",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h1>TODO</h1>
      <AddTodo addTodos={addTodos} />
     
  <div>
       <Todolist
        todos={todos.filter((item) => !item.status)}
        handleToggle={PutTodos}
        handleDelet={DeleteTodos}
      />

  </div> 
  <div>
       <Todolist
        todos={todos.filter((item) => item.status)}
        handleToggle={PutTodo}
        handleDelet={DeleteTodos}
      />
  </div>  
  
      <div style={{display:"flex",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <div> <button className="buttons" onClick={() =>setPage((page)=>page-1)} disabled={page==1}>  Pre  </button></div>
        <div> <p className="buttons">{page}</p></div>
        <div> <button  className="buttons" onClick={() =>setPage((page)=>page+1) } disabled={page==3}>  Next  </button></div>
        </div>
    </div>
  );
}
