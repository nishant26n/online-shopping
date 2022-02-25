import { fetchApi, baseUrl } from "../utils/fetchApi";

export default function Home({ getProducts }) {
  return <div>{getProducts.map((product) => console.log(product))}</div>;
}

export async function getStaticProps() {
  const getProducts = await fetchApi(
    `${baseUrl}/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US`
  );
  return {
    props: {
      getProducts: getProducts?.products,
    },
  };
}
