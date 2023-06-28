import React, { useEffect } from "react";
import Link from "next/link";
import { ProductCard } from "./productCard";
import { Pagination } from "./Pagination";
import { useAppSelector, useAppDispatch } from "../hooks/Reduxhooks";
import { useProducts } from "../hooks/useProductsHook";
import {
  selectProducts,
  selectFilter,
  selectFilterCategory,
  addProducts,
} from "../redux/features/productSlice";

export function ProductList() {
  const products = useAppSelector(selectProducts);
  const filter = useAppSelector(selectFilter);
  const filterCategory = useAppSelector(selectFilterCategory);

  const fetchedProducts = useProducts();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addProducts(fetchedProducts));
  }, [dispatch, fetchedProducts]);

  let productsAfterFilters = products;

  if (filterCategory !== "all") {
    productsAfterFilters = productsAfterFilters.filter(
      (product) => product.category === filterCategory
    );
  }

  if (filter) {
    const lowerCaseFilter = filter.toLowerCase();
    productsAfterFilters = productsAfterFilters.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseFilter)
    );
  }

  const productsPerPage = 12;

  return (
    <Pagination
      products={productsAfterFilters}
      itemsPerPage={productsPerPage}
      renderProduct={(product) => (
        <Link
          href={`/ProductDescriptionPage/${product.id}`}
          key={product.id}
          prefetch={false}
          style={{ textDecoration: "none" }}
        >
          <ProductCard
            data-cy="product-card"
            key={product.id}
            id={product.id}
            name={product.name}
            image_url={product.image_url}
            price_in_cents={product.price_in_cents}
            category={product.category}
            created_at={product.created_at}
            sales={product.sales}
          />
        </Link>
      )}
    />
  );
}
