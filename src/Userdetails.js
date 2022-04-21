
function Userdetails(props){

    return (<div>{props.array.map((name)=><div onClick={()=>{alert("Welcome "+name.name)}} className="center">{name.name}</div>)}</div>);
}
export default Userdetails;