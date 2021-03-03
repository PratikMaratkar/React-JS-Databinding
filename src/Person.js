
function Person(props) {
return(
    <div>
        <h1>Welcome:{props.myName}</h1>
        <button onClick={props.PersonButton}>Click Here</button>
    </div>
)
    
    }
    
    export default Person;