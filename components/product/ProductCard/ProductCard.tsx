import { Product } from "@common/types/product"

interface Props {
    product?: Product
}

const ProductCard: React.FC<Props> = ({product}) => {

    
    return(
        <div>{product.name}</div>
    )
}

export default ProductCard