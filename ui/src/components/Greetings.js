export default function Greeting() {
  return (
    <div>
      <p id="greetingTxt" className="font-bold text-2xl py-4">
        hello world
      </p>
      <button
        onclick="changeGreeting()"
        className="bg-blue-500 hover: bg-blue-700 text-white font-bold py-4 px-6 rounded"
      >
        change greetings
      </button>
    </div>
  );
}
