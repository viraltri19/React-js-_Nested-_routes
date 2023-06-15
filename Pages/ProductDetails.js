import { useParams ,Link} from "react-router-dom";

function ProductDetails(){

    const param= useParams()

    return(
        <>
            <h2>ProductDetails</h2>
            <p>{param.ProductId}</p>
            <Link to ='..' relative="path">Back</Link>
        </>
    )
}
export default ProductDetails;