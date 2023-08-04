import { useRouter } from "next/router";

export default function Product({ product }) {
  console.log('pr', product)
  
    const router = useRouter();
    if(router.isFallback){
        return <div>Loading....</div>
    }
    return (
      <>
        <h2>
          {product.id} {product.title} {product.price}
        </h2>
        <p>{product.description}</p>
      </>
    );
  }
  
  export async function getStaticPaths() {
    // const response = await fetch(
    //   `https://jsonplaceholder.typicode.com/posts`
    // );
    // const data = await response.json();
    // const paths = data.map((post)=>{
    //   return{
    //     params:{
    //     postId: `${post.id}`
    //     }
    //   }
    // })
    return {
      // paths,
      paths: [
        {
          params: { productId: "1" },
        },
        {
          params: { productId: "2" },
        },
        {
          params: { productId: "3" },
        },
      ],
      fallback: true,
    };
  }
  
  export async function getStaticProps(context) {
    const { params } = context;
    console.log('Regenerating product Id page')
    
    const response = await fetch(
      `http://localhost:4000/products/${params.productId}`
    );
    const data = await response.json();
  
    if (!data.id) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        product: data,
      },
      revalidate: 10,
    };
  }
  