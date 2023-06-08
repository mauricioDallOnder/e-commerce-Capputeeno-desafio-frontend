import { Product, addProducts, selectFilter, selectProducts, selectFilterCategory } from "@/redux/features/productSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { allProducts } from "@/utils/data";
import { useEffect } from "react";


export function ProductList() {
    const products = useAppSelector(selectProducts);
    const filter = useAppSelector(selectFilter);
    const filterCategory = useAppSelector(selectFilterCategory);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(addProducts(allProducts));
    }, [dispatch]);

    let filteredProducts = products;

    if (filterCategory !== 'all') {
        filteredProducts = filteredProducts.filter((product) => product.category === filterCategory);
    }
    
    if (filter) {
        const lowerCaseFilter = filter.toLowerCase();
        filteredProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(lowerCaseFilter));
    }

    return (
        <div>
            {filteredProducts.map((product, index) => (
                <div key={index}>
                    <h2>{product.name}</h2>
                   <p>{product.price_in_cents}</p>
                    <img src={product.image_url} alt={product.name} />
                </div>
            ))}
        </div>
    );
}