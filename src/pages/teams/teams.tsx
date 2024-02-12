import { Button } from "@shared/button/button";
import Modal from "@shared/modal/modal";
import { useState } from "react";

export interface TeamsProps {}

export const Teams = () => {
  const onClick = () => {
    handleModalOpen();
  };
  const [isModalActive, setModalActive] = useState(false);
  const [isModalSecondActive, setModalSecondActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  const handleModalSecondOpen = () => {
    setModalSecondActive(true);
  };
  const handleModalSecondClose = () => {
    setModalSecondActive(false);
  };
  return (
    <>
      <div>
        <Button onClick={onClick}>Test Modal</Button>
        {isModalActive && (
          <Modal title="some modal title any beny weo" onClose={handleModalClose}>
            Hello world
            <Button variant="secondary" onClick={handleModalSecondOpen}>
              Test Modal
            </Button>
            {isModalSecondActive && (
              <Modal title="some modal title" onClose={handleModalSecondClose}>
                Second modal
              </Modal>
            )}
          </Modal>
        )}
      </div>
    </>
  );
};
