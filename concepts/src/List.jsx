function List(props){
    const category = props.category
    const l =  props.items

    const l1 = l.map((s , index )=> <li key={index}>
        {s}
    </li>)

    return (
        <>
            <ol>
                {l1}
            </ol>
        </>
    )
}
export default List