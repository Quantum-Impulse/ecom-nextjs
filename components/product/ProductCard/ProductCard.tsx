import { Product } from "@common/types/product"
import Link from "next/link"
import Image from "next/image"

interface Props {
    product: Product
}
const placeholderImage="/product-image-placeholder.svg"
const ProductCard: React.FC<Props> = ({product}) => {

    
    return(
        <Link href={`/products/${product.slug}`}> 
            <a>
                <h3>
                    <span>
                        <div>{product.name}</div>
                    </span>
                </h3>
                <span>$13</span>
                {product.images && (
                    <Image 
                        alt={product.name} 
                        src={placeholderImage} 
                        height={540} 
                        width={540}
                        quality="85" 
                        layout="responsive"
                    />
                )
                }
                
            </a>
        </Link>
    )
}

export default ProductCard