"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([{ id: 0, name: "" }]);

  useEffect(() => {
    console.log("useEffect run");
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/data");
      console.log("res", response.data);

      setData(response.data.data);
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Docker Learning</h1>
      <div>hello world</div>

      <div>
        {data?.map((item, index) => {
          return (
            <div key={index}>
              {item.id} - {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
