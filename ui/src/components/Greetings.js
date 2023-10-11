import { useEffect, useState } from "react";

var API_URL = "127.0.0.1:3005";

export default function Greeting() {
  const [greetings,setgreetings]= useState();
  const[greetingsList,setgreetingsList]= useState();
  
  useEffect(() => {
    async function getGreetings(){
      var response = await fetch (`http://${API_URL}/greetings`);
      let data = await response.json();
      setgreetingsList(data)
      setgreetings(data[0])
    }
    getGreetings();
  }, []);

  function changeGreeting(){
    const randomIndex = Math.floor(Math.random() * greetingsList.length);
    setgreetings(greetingsList[randomIndex])
  }
  return (
    <div>
      <p id="greetingTxt" className="font-bold text-2xl py-4">
        {greetings}
      </p>
      <button
        onclick="changeGreeting()"
        className="bg-blue-500 hover: bg-blue-700 text-white font-bold py-4 px-6 rounded" onClick = {changeGreeting}
      >
        change greetings
      </button>
    </div>
  );
}
