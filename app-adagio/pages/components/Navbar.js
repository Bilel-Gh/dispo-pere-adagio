import {useRouter} from 'next/router';
import Link from 'next/link';
const Navbar = () => {
    const router = useRouter();
    console.log(router.pathname);
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/users">Users</Link>

        </div>
    )
}

export default Navbar