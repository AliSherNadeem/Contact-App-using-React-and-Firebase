import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="m-auto relative z-50 bg-white p-4 min-h-[200px] max-w-[80%] md:max-w-[30%] ">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="absolute top-0 z-40 backdrop-blur h-screen w-screen"
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};
export default Modal;
