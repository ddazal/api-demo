import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState([]);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true)
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });
    const data = await response.json();
    setResult(data.result);
    setInput("");
    setIsLoading(false)
  }

  return (
    <div>
      <Head>
        <title>API Demo</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        {/* <img src="/dog.png" className={styles.icon} /> */}
        <h3>Generate an image</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="input"
            placeholder="Please, describe..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
          />
          <input
            type="submit"
            value={isLoading ? "Loading" : "Generate"}
            disabled={isLoading}
            required
          />
        </form>
        <div className={styles.result}>
          {
            result.map((item, index) => (
              <div key={index} style={{ width: 300, height: 300 }}>
                <img src={item.url} />
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}
