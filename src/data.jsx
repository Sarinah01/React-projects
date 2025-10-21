function Data(props){
    const lst =[
    { id: 1, name: "Aisha", age: 18 },
    { id: 2, name: "Rahul", age: 19 },
    { id: 3, name: "Meena", age: 17 }
        
    ]

    const s= lst.map(st => <li key={st.id}>{st.name}</li>)
    const y = lst.filter(lst => lst.age >18)
    const x = y.map(s => <li key={s.id}>
        {s.name} &nbsp; {s.age} 
    </li>)
    return(
        <>
      <ol>
        {s}
      </ol>
      <h5>
        Age greater than 18
        <ol>
            {x}
        </ol>
      </h5>
        <h3>
            Hiii, I am {props.name} from {props.city} and I am working on my goal which is <br />
            becoming the {props.work}
        </h3>
        </>
    )
}
export default Data