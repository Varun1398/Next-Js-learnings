import User from "@/components/user";

function Users({ users }) {
  return <><h1>List of Users</h1>;
  {
    users.map((user)=>{
        return(
            <div key={user.id}>
                <User users={user}/>
            </div>
        )
    })
  }
  </>
}
export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
