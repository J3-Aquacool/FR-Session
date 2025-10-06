function UserCheck(props)
{

    // traditonal way
/*if(props.status)
{
return (<h1>Welcome User</h1>)
}
else
{
return (<h1>Please Login</h1>)

}*/



// second way
//return (<h1>{props.status ? "Welcome User": "Please Login"}</h1>)

// more conside way
const welcomeUser=<h1>Welcome:{props.username}</h1>
const invalidUser=<font color="red">Please Login Again:</font>

return (props.status ?welcomeUser:invalidUser)


}


UserCheck.defaultProps={
status:false,
username:"Guest"

}
export default UserCheck;