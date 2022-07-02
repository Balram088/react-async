<h1>Difference between Props and State</h1>
<p>props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters).</p>
<h3><Component prop={prop}></h3>
</br><p> whereas state is managed within the component (similar to variables declared within a function) .</p><br/>
   <h3>const [state, setState] = useState(initialState);</h3>
<img src="https://static.wixstatic.com/media/3a60df_ecdf74102fd04ee0ab40c50ecee52020~mv2.png" alt="img"/>
<br/>
<br/>
<h1> useState API </h1>
<p>const [state, setState] = useState(initialState);</p>
<p>Returns a stateful value, and a function to update it.</p>

<p>During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).</p>

<p>The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.</p>

<h6>setState(newState);</h6>
<p>During subsequent re-renders, the first value returned by useState will always be the most recent state after applying updates</p>
<br/>
<br/>
<h1>map</h1>
<p>map mainly Reandering(access) multipale component or access element of array like loop </p>
<h6>const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);</h6>
<p> function Myarr(){
        this.length=0;
     }
//perform operations
     //push
     //pop
     //map
     //filter
     //reducer

 // Create Push functionality    
Myarr.prototype.push = function(e){
    this[this.length]=e;
    this.length++;
   return this.length;
}

let arr = new Myarr();
console.log(arr);
arr.push(8)
arr.push(5)
arr.push(3)
console.log(arr);

// Create Pop functionality  
Myarr.prototype.pop = function(){
    this.length--;
    let popEle=this[this.length];
    delete this[this.length];
   return popEle;
}
arr.pop();
console.log(arr);

//create map functionality
Myarr.prototype.map = function(cb){
    let res =new Myarr()
    for(index in this){
        if(this.hasOwnProperty(index)){
            res.push(cb(this[index],index,this))
        }
    }
    return res
}
var res=arr.map(function(value){
    return value;
})
console.log(res);

<p>
<br/>
<br/>



