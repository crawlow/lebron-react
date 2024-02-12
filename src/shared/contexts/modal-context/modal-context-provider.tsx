import { createContext, FC, useEffect, useState } from "react";

// Создаем тип для колбэка закрытия модального окна
export type ModalCloseCallback = () => void;

// Создаем контекст для хранения списка колбэков
export const ModalCloseCallbacksContext = createContext<
  | {
      addCloseCallback: (callback: ModalCloseCallback) => void;
      closeModal: () => void;
      closeAllModals: () => void;
    }
  | undefined
>(undefined);

// Создаем Provider для контекста
export const ModalCloseCallbacksProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [closeCallbacksStack, setCloseCallbacksStack] = useState<
    ModalCloseCallback[]
  >([]);

  // Функция для добавления колбэка в стек
  const addCloseCallback = (callback: ModalCloseCallback) => {
    setCloseCallbacksStack((prevStack) =>
      prevStack.find((x) => x === callback)
        ? prevStack
        : [...prevStack, callback]
    );
  };

  // Функция для удаления последнего колбэка из стека
  const closeModal = () => {
    setCloseCallbacksStack((prevStack) => {
      prevStack.pop()?.();
      return prevStack;
    });
  };

  useEffect(() => {
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal?.();
      }
    };
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [closeModal]);

  // Функция для вызова всех колбэков из стека
  const closeAllModals = () => {
    closeCallbacksStack.forEach((callback) => callback());
    setCloseCallbacksStack([]);
  };

  return (
    <ModalCloseCallbacksContext.Provider
      value={{ addCloseCallback, closeModal, closeAllModals }}
    >
      {children}
    </ModalCloseCallbacksContext.Provider>
  );
};
