import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.replace("/product")
  };
  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog">
        <h2>Blog</h2>
      </Link>
      <Link href="/product">
        <h2>Product</h2>
      </Link>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
}

export default Home;
