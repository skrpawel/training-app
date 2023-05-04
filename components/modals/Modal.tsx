"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";

interface ModalProps {
  label: string;
}

const Modal: React.FC<ModalProps> = ({ label }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = useCallback(() => {
    setShowModal(!showModal);
  }, []);

  const handleSubmit = () => {
    console.log("elo");
  };

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden inset-0 z-50 fixed overflow-y-auto focus:outline-none">
        <div className="relative w-4/5 md:w-4/6 lg:w-3/6 xl:w-2/6 my-6 mx-auto lg:h-auto md:h-auto bg-white rounded-md shadow-md">
          <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
            <button className="p-1 border-0 hover:opacity-70 transition absolute left-9 hover:bg-slate-200 rounded-full">
              <AiOutlineClose />
            </button>
            {label}
          </div>
          <div className="">Content</div>
          <div className="">Footer</div>
          <div className="flex flex-col gap-2 p-6">
            <div className="flex items-center gap-4 w-full">
              <Button
                label="Submit"
                onClick={closeModal}
                onSubmit={handleSubmit}
              />
              <Button
                label="Submit"
                onClick={closeModal}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
