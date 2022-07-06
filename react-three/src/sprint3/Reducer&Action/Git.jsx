// import React, { useState } from 'react'
// import { useReducer } from 'react'


// const intValue ={
//     isLoading :false,
//     isError:false,
//     data:[],
//     token:""
// }
// //https://api.github.com/search/users?+%20`q=${query}
// export const Git = () => {
//     const [state,dispatch] = useReducer(gitReducer,intValue);
//     const [text,setText] =useState("");

//   return (
//     <div>
//        <div>
//         <input type="text"
//           value={text}
//           onChange={ (e)=> setText(e.target.value)}
//           placeholder="Add Some"
//         />
//         <button onClick={() => fetchUser(dispatch,text)}>search</button>
//        </div>
//          {
//             state.data.map((item)=>(
//               <div key={item.login}>{item.login}</div>
//             ))
//          }
//     </div>
//   )
// }
