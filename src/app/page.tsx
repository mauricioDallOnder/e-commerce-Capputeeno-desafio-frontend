"use client";

import { useGetUsersQuery } from "@/redux/services/userApi";
import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FilterBar } from "@/components/filter-bar/filter-bar";


export default function Home() {
  
  const dispatch = useAppDispatch();
  return (
    <main style={{ maxWidth: 1300, marginInline: "auto", padding: 20 }}>
     
     <FilterBar/>


    </main>
  );
}
// <button onClick={() => dispatch(reset())}>reset</button>
// <button onClick={() => dispatch(increment())}>aumenta item 2</button>
//  <button onClick={() => dispatch(decrement())} style={{ marginInline: 16 }} > diminui item 2</button>