import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { ContactCard } from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactList);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className="max-w-[375px] mx-auto px-4">
        <Navbar />
        <div className="flex items-center gap-2">
          <div className="flex flex-grow items-center relative ">
            <FaSearch className="text-white text-xl absolute ml-2" />
            <input
              type="text"
              className=" flex-grow bg-transparent border border-white rounded-md h-10 text-white pl-8"
            />
          </div>
          <div>
            <FaPlusCircle
              onClick={onOpen}
              className="text-3xl text-white cursor-pointer"
            />
          </div>
        </div>

        <div className=" flex flex-col gap-4 mt-6">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default App;
