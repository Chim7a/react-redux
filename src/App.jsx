import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreateNotes from "./components/CreateNotes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="grid place-items-center h-screen">
      <div className="w-[500px] shadow-lg rounded-lg p-3 border">
        <h1 className="text-red-600 text-2xl font-light">Note Keeper</h1>
        <CreateNotes />
      </div>
    </section>
  );
}

export default App;
