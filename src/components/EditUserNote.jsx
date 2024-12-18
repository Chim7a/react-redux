import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { editNoteContent } from "../features/note/noteSlice";

const { TextArea } = Input;

function EditUserNote(props) {
  const [value, setValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (value.trim() === "") {
      return;
    }
    dispatch(
      editNoteContent({
        note_to_editId: props.note_id,
        content_to_update: value.trim(),
      })
    );
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button icon={<AiFillEdit />} type="primary" onClick={showModal} />
      <Modal
        title="Note Editor"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1>Editing for note {props.note_id}</h1>
        <TextArea
          onChange={(e) => setValue(e.target.value)}
          rows={5}
        ></TextArea>
      </Modal>
    </>
  );
}

export default EditUserNote;
