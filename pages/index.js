import Layout from '../modules/common/components/Layout/index'
;

const HomePage = ({ products }) => {

  const { list } = products;

  return (
    <Layout>

      <div>
      {
        list.map(list => {
          return (
          <p>{ list.name }</p>
          )
        })
      }
    </div>
    </Layout>
    

  )
}

export async function getStaticProps (){
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  return {
    props: {
      products
    }
  }
}

export default HomePage;