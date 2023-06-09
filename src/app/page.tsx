"use client";
import { FilterBar } from "@/components/filter-bar/filter-bar";
import { ProductList } from "@/components/product-list";


export default function Home() {
  

  return (
    <main style={{ maxWidth: 1300, marginInline: "auto", padding: 20 }}>
     
     <FilterBar/>
    <ProductList/>

    </main>
  );
}
// <button onClick={() => dispatch(reset())}>reset</button>
// <button onClick={() => dispatch(increment())}>aumenta item 2</button>
//  <button onClick={() => dispatch(decrement())} style={{ marginInline: 16 }} > diminui item 2</button>