import React from 'react'

const initState = {
    name: "",
    // address: "",
    email: "",
    // password: ""
    country: ""
  }
  
  export function Form(){
    const [formData, setFormData] = React.useState(initState)

    const handleChange = (e) => {

      const {name, value , type , checked} = e.target    //Destructuring

      setFormData( { ...formData, [name]: value} )    //Call setformData

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    }
     
   

    return (
      <div>
         <h1>For Filds</h1>
          <div>
            <input type="text" name="name" placeholder="name" value={formData.name} onChange={handleChange} />
          </div>
          {/* <div>
            <input type="text" name="address" placeholder="address" value={state.address} onChange={handleChange} />
          </div> */}
          <div>
            <input type="text" name="email" placeholder="email" value={formData.email} onChange={handleChange} />
          </div>
          {/* <div>
            <input type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} />
          </div> */}
          <div>
            <select name="country" id="">
                <option value="India" key="india">India</option>
                <option value="US" key="Us">US</option>
            </select>
          </div>
          <div><input type="submit" onClick={handleSubmit} /></div>
          <div><h1>Show Data</h1></div>
          
          <p>{formData.name}</p>
          <p>{formData.email}</p>
          <p>{formData.country}</p>
      </div>
    )
  
  }
