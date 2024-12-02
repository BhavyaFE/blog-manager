import Link from 'next/link';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
    <>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/posts/add">Add Post</Link>
        </nav>
        <Component {...pageProps} />
    </>
);

export default MyApp;
