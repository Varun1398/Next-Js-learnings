import { useRouter } from "next/router"

export default function ProductDetails(){
    const router = useRouter();
    const productId = router.query.productId
    return <h1>Deatils about Product {productId}</h1>
}