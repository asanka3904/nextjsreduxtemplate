import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
} from "../slice/testSlice";
import { useState } from "react";

export default function Home() {
  const value = useSelector(selectCount);
  const dispatch = useDispatch();
  const [amount, setamount] = useState("");

  const incrementValue = Number(amount) || 0;

  return (
    <div className={styles.container}>
      <h1>value is {value}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>

      <button onClick={() => dispatch(decrement())}>decrement</button>

      <div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          addamount
        </button>
      </div>
    </div>
  );
}
