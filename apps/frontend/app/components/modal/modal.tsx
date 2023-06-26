import { ReactNode, useEffect } from 'react';

interface ModalProps {
  children: ReactNode;
  handleOnClose: () => void;
}

export const Modal = ({ children, handleOnClose }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <>
      <div className="absolute w-full h-full z-50 p-4 rounded-xl shadow-xl bg-white dark:bg-gray-700 sm:w-[32rem] sm:h-96 sm:left:1/2 sm:top-1/4">
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

      <div
        className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none cursor-pointer backdrop-blur-sm"
        onClick={handleOnClose}
      />
    </>
  );
};
