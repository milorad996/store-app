import { useState } from "react";
import ProductsService from "../services/ProductsService";




function AppProducts() {

    const [product, setProduct] = useState('');

    const [products, setProducts] = useState(ProductsService.getAll())

    const [query, setQuery] = useState('');
    const search = (data) => {
        return data.filter(
            (item) =>
                item.name.toLowerCase().includes(query)
        )

    }
    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = products.filter((product) => {
                return product.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setProducts(results);
        } else {
            setProducts(products);
        }

        setProduct(keyword);
    };
    return (
        <div>

            <input
                type="search"
                value={product}
                onChange={filter}
                className="input"
                placeholder="Search"
            />
            {products && products.length > 0 ? (
                products.map((product, index) => (
                    <li key={index}>
                        <span>{product.name}</span>
                    </li>
                ))
            ) : (
                <h1>No results found!</h1>
            )}
        </div>
    )
}


export default AppProducts;