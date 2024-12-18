import React from "react";
// useDispatch to dispach an action eg, a function. useSelector for getting values of the initial state
import { useDispatch, useSelector } from "react-redux";
import EditUserNote from "./EditUserNote";
import { MdDelete } from "react-icons/md";
import { Button } from "antd";
import { deleteUserNote } from "../features/note/noteSlice";

function DisplayNotes() {
  const { userNotes } = useSelector((state) => state.note);

  const dispatch = useDispatch();
  return (
    <div>
      {userNotes.map((item) => {
        return (
          <div
            className="flex justify-between items-center border-b pb-2"
            key={item.note_id}
          >
            <div>
              <p className="text-lg">{item.note_content}</p>
              <h3 className=" text-gray-500 font-semibold text-sm">
                Date added: {item.note_createdAt}
              </h3>
            </div>
            <div className="flex gap-2">
              <EditUserNote note_id={item.note_id} />
              <Button
                onClick={() => dispatch(deleteUserNote(item.note_id))}
                icon={<MdDelete />}
                danger
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayNotes;
