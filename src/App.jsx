import Homepage from './homepage'
import './App.css'
import Data from './data'
import List from './List'
import Button from './button'
import Img from './img'
import About from "./about";
import Counter from './counter'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
function App() {
  const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Grapes",
  "Pineapple",
  "Papaya",
  "Watermelon",
  "Guava",]
  return (
    <>
     <header>
      <h1>
        Hiii, I'm Back!!!
      </h1>
     </header>
    <BrowserRouter>
     <Homepage bio ={{name : "This is my first prop handling" , age: 19}}/>
      <Routes>
        <Route path='/about' element={<About/>}/>
      </Routes>
    
    </BrowserRouter>
    
     <h3>
      Other way of creating the props!
      <Data city="Ahmedabad" work={"Becoming the best in entire bloodline"} name ={"Sarinah"}>
      </Data>
     <h5>
      learning list rendering from here to the componenet using props:
      <List items ={fruits} category="Fruits"></List>
     </h5>
     </h3>
     <Button></Button>
      <Img></Img>
      <Counter></Counter>
    </>
  )
}

export default App
