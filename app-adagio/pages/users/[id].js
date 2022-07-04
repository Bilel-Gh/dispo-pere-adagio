
export const getStaticPaths = async () => {
    const users = await getUsers();
    const paths = users.map(user => ({
        params: { id: user.id.toString() }
    }));
    return { paths, fallback: false };
}
const Details = ({ user }) => {
    return (
        <div>
            <h1>Details</h1>
            <h2>{id}</h2>
        </div>
    );
}
export default Details;