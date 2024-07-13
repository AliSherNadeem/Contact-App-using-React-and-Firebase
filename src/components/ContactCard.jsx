import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export const ContactCard = ({ contact }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      key={contact.id}
      className="flex justify-between items-center bg-yellow p-2 rounded-lg"
    >
      <div className="flex items-center gap-1">
        <HiOutlineUserCircle className="text-3xl text-orange" />
        <div className="">
          <h2 className="text-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
      </div>
      <div className="flex text-3xl">
        <RiEditCircleLine />
        <IoMdTrash
          onClick={() => deleteContact(contact.id)}
          className="text-orange"
        />
      </div>
    </div>
  );
};
