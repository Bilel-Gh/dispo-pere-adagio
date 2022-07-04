import Link from "next/link";
const Error = () => {
    return (
        <div className="container">
            <h1>404</h1>
            <p>Page not found</p>
            <Link href="/"><a>Back to Home</a></Link>
        </div>
    );
}
export default Error;