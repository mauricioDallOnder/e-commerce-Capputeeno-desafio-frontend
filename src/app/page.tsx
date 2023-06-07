"use client";

import { useGetUsersQuery } from "@/redux/services/userApi";
import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";


export default function Home() {
  
  const dispatch = useAppDispatch();
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
     
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <button onClick={() => dispatch(increment())}>aumenta item 1</button>
        <p>item 1</p>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          diminui item 1
        </button>
       
      </div>

      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <button onClick={() => dispatch(increment())}>aumenta item 2</button>
        <p>item 1</p>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          diminui item 2
        </button>
       
      </div>


    </main>
  );
}
// <button onClick={() => dispatch(reset())}>reset</button>