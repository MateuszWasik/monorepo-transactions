import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  handleOnClose: () => void;
}

export const Modal = ({ children, handleOnClose }: ModalProps) => {

  return (
    <div className="absolute top-1/4 w-[32rem] h-80 p-4 rounded-xl bg-gray-50 shadow-xl ">
      <div className="flex justify-between">
        <button type="button" className="" onClick={handleOnClose}>
          Close
        </button>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};
