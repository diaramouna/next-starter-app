import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <hr />
      <Link href="/Products">Products</Link>
      <br />
      <Link href="/About">About</Link>
      <br />
      <Link href="/api/movies">Movies</Link>
    </div>
  );
};