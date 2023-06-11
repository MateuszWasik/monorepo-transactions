import { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  handleOnClose: () => void;
}

export const Modal = ({ children, handleOnClose }: ModalProps) => {
  return (
    <div className="absolute top-1/4 w-[32rem] min-h-80 p-4 rounded-xl shadow-xl bg-white dark:bg-gray-700 ">
      <div className="flex justify-end">
        <button
          type="button"
          className="text-black dark:text-white"
          onClick={handleOnClose}
        >
          Close
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};
