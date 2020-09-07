const ProductDetail = ({ product }) => {
    return (
        <h1>{product.name}</h1>
    )
}

export async function getStaticPaths(){
    const res = await fetch('http://localhost:3000/api/products');
    const products = await res.json();

    const paths = products.list.map(prod => `/product/${prod.id}`);

    return { paths, fallback: false}
}

export async function getStaticProps({ params }){
    const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
    const product = await res.json()

    return {
        props: {
            product
        }
    }
}

export default ProductDetail;