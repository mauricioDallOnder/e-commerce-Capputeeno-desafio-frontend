import { addProducts, selectFilter, selectProducts, selectFilterCategory } from "@/redux/features/productSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/Reduxhooks";
import { useEffect, useState } from "react";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useProducts } from "../../hooks/useProductsHook";



export function ProductList() {
    const products = useAppSelector(selectProducts);
    const filter = useAppSelector(selectFilter);
    const filterCategory = useAppSelector(selectFilterCategory);
    
    const productsList = useProducts(); // usar o hook aqui
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(addProducts(productsList));
      }, [dispatch, productsList]);
  
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
                    <img src={product.image_url} alt={product.name} />
                    <p>{product.price_in_cents}</p>
                </div>
            ))}
        </div>
    );
  }
  