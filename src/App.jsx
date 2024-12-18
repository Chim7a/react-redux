import "./App.css";
import CreateNotes from "./components/CreateNotes";
import DisplayNotes from "./components/DisplayNotes";

function App() {
  return (
    <section className="grid place-items-center h-screen">
      <div className="w-[500px] shadow-lg rounded-lg p-3 border">
        <h1 className="text-red-600 text-2xl font-light">Note Keeper</h1>
        <CreateNotes />
        <DisplayNotes />
      </div>
    </section>
  );
}

export default App;
