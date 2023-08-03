export default function User({users}){
    return(
        <>
        <p>{users.name}</p>
        <p>{users.email}</p>
        </>
    )
}