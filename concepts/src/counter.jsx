
import React , {useState , useEffect , useRef, useCallback} from "react"
import Button from "./button"

function Counter(){
    const[counter, setCount] = useState(0)
    const[initial, newname] = useState("Sarinahh")
    const[fruits, setnew]  = useState(["Apple", "Mango"])
    const [user, setUser] = useState({ name: "Sarina", age: 18 });
    const birthday = () => setUser({ ...user, age: user.age + 1 });
    useEffect(() =>{
                    document.title = `Count : ${counter}`
                }, []);
    const myref = useRef(0)
    myref.current +=1

    const iref= useRef(null)

    function handleClick(){
        iref.current.focus();
        iref.current.style.backgroundColor="pink"
    }
    
    const [count, setCount1] = useState(0);

  const increment = useCallback(() => {
        setCount1(prev => prev + 1);
    }, []);

    return(
        <>
        <h1>
            {counter}
        </h1>
        <button onClick={()=> setCount(prev => prev +1)}>Add</button>
        <br /><br />
        <h3>
            {initial}
        </h3>
        <button onClick={()=> newname("Unstoppable Sarinahhh!")}>Change</button>
        <br /><br />
        <ul>
            {
                fruits.map((s,index) => (<li key={index}>{s} </li>))
            }
        </ul>
        <button onClick={()=> setnew([...fruits, "Orange" ,"Peaches","Lichi"])}>Add More</button>
        <br /><br />
        <p>{user.name} - {user.age}</p>
      <button onClick={birthday}>Birthday 🎂</button>
            <br /><br />
            <button onClick={() => {handleClick()}}>Ref btn</button>
            <input type="text" ref={iref}/>

            <h1>{count}</h1>
      <button onClick={increment}>Callback try!</button>
        </>
    )
}

export default Counter;