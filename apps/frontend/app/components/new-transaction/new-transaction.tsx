import { createPortal } from 'react-dom';
import { Modal } from '../modal/modal';
import { useState } from 'react';
import { Form } from "../form/form";
import { Transaction } from "@monorepo/shared-types";

interface NewTransactionProps {
  handleOnFormSubmit: (newTransaction: Transaction) => void;
  setBlurryBackground: (blurBackground: boolean) => void;
}

export const NewTransaction = ({setBlurryBackground, handleOnFormSubmit}: NewTransactionProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = () => {
    setShowModal(true)
    setBlurryBackground(true)
  }

  const handleOnClose = () => {
    setShowModal(false)
    setBlurryBackground(false)
  }

  const handleFormSubmit = (newTransaction: Transaction) => {
    handleOnClose();
    handleOnFormSubmit(newTransaction);
  }

  return (
    <>
      <button
        onClick={handleOnClick}
        className="font-bold py-2 px-4 rounded bg-blue-500 text-white"
      >
        Add new
      </button>
      {showModal &&
        createPortal(<Modal handleOnClose={handleOnClose}><Form handleOnFormSubmit={handleFormSubmit} /></Modal>, document.body)}
    </>
  );
};
