import { Input, Button } from "antd";
import { useState } from "react";

function CreateNotes() {
  const [noteValue, setNoteValue] = useState("");
  const handleCreateNote = (params) => {
    console.log(noteValue);
  };
  return (
    <form className="grid gap-4 border-b pb-2">
      <Input
        onChange={(event) => setNoteValue(event.target.value)}
        size="large"
        placeholder="Start typing..."
      />
      <Button onClick={handleCreateNote} type="primary" block>
        Add note
      </Button>
    </form>
  );
}

export default CreateNotes;
