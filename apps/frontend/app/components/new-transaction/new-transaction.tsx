import { createPortal } from 'react-dom';
import { Modal } from '../modal/modal';
import { useState } from 'react';
import { Form } from '../form/form';
import { FormTransaction } from '@monorepo/shared-types';

interface NewTransactionProps {
  handleOnFormSubmit: (newTransaction: FormTransaction) => void;
}

export const NewTransaction = ({ handleOnFormSubmit }: NewTransactionProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = () => {
    setShowModal(true);
  };

  const handleOnClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (newTransaction: FormTransaction) => {
    handleOnClose();
    handleOnFormSubmit(newTransaction);
  };

  return (
    <>
      <button
        onClick={handleOnClick}
        className="font-bold py-2 px-4 rounded bg-blue-600 dark:bg-purple-700 text-white"
      >
        Add new
      </button>
      {showModal &&
        createPortal(
          <Modal handleOnClose={handleOnClose}>
            <Form handleOnFormSubmit={handleFormSubmit} />
          </Modal>,
          document.body
        )}
    </>
  );
};
