import { Input, Button, message } from "antd";
import { useState } from "react";
import { addNewNote } from "../features/note/noteSlice";
import { useDispatch } from "react-redux";

function CreateNotes() {
  const [noteValue, setNoteValue] = useState("");
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  //   Add note function
  const handleCreateNote = (params) => {
    if (noteValue.trim() === "") {
      messageApi.error("Please enter a note content");
      return;
    }
    dispatch(addNewNote(noteValue.trim()));
  };
  return (
    <>
      {contextHolder}
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
    </>
  );
}

export default CreateNotes;
