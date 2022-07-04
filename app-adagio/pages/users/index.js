import UserCard from "../components/UserCard";

const Users = () => {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'JohnDoe@gmail.com',   
      avatar: 'img_avatar.png'
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'JaneDoe@gmail.com',
        avatar: 'img_avatar.png'
    },
    ]
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <UserCard key={user.id} user = {user}/>
                ))}
            </ul>
        </div>
    )
}
export default Users;