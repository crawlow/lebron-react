import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEventHandler } from "react";

import Portal, { createContainer } from "../portal/portal";

import s from "./modal.module.scss";
import { useModalContext } from "@shared/contexts/modal-context/modal-context";
import { ModalCloseCallback } from "@shared/contexts/modal-context/modal-context-provider";
import { CrossIcon } from "@assets/icons/CrossIcon";
import classNames from "classnames";

const MODAL_CONTAINER_ID = "modal-container-id";

type Props = {
  title: string;
  onClose?: () => void;
  children: React.ReactNode | React.ReactNode[];
};

const Modal = (props: Props) => {
  const { title, onClose, children } = props;

  const { addCloseCallback, closeModal } = useModalContext();

  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
    setTimeout(() => {
      setOpen(true);
    }, 50);
    addCloseCallback(onClose as ModalCloseCallback);
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        closeModal?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
    };
  }, [closeModal]);

  const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> =
    useCallback(() => {
      closeModal?.();
    }, [closeModal]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div
        className={classNames(s.wrap, { [s.isActive]: isOpen })}
        ref={rootRef}
        data-testid="wrap"
      >
        <div className={s.content}>
          <button
            type="button"
            className={s.closeButton}
            onClick={handleClose}
            data-testid="modal-close-button"
          >
            <CrossIcon className={s.closeIcon} />
          </button>
          <p className={s.title}>{title}</p>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
