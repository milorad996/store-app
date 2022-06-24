import { useState } from "react";
import ProductsService from "../services/ProductsService";




function AppProducts() {

    const [products, setProducts] = useState(ProductsService.getAll())
    return (
        <div>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name}</li>
                ))}
            </ul>
        </div>
    )
}


export default AppProducts;