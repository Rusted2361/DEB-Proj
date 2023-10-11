import { useEffect, useState } from "react";

var API_URL = "127.0.0.1:3005"
export default function Visitor() {
  const [count, setCount] = useState();
  useEffect (()=>{
    async function getCount() {
      var response = await fetch (`http://${API_URL}/visitors`);
      let data = await response.json();
      setCount(data);
    }

    getCount();
  },[]);
  return (
    <div>
      <p id="visitorCountTxt" className="font-semi-bold text-lg py-4">
        Visitor count: {count}
      </p>
    </div>
  );
}
