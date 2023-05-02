import { Layout } from "@components/common"
import { getConfig } from "@framework/api/config"
import getAllProducts from "@framework/product/get-all-products"
import { get } from "http"
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next"

// fetch all of the products slugs
export const getStaticPaths: GetStaticPaths = async () => {

  const config = getConfig()
  const { products } = await getAllProducts(config)

  return {
    paths: products.map(p => ( {params: {slug: p.slug} } )),
    fallback: false
  }
}

// provide product spefici data to the page
export const getStaticProps = async ({
  params }: GetStaticPropsContext<{slug: string}>
) => {
  return {
    props: {
      product: {
        slug: params?.slug
      }
    }
  }
}

export default function ProductSlug({
  product }: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <div>
      {product.slug}
    </div>
  )
}


ProductSlug.Layout = Layout