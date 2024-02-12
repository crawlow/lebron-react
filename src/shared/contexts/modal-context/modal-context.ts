import { useContext } from "react";
import { ModalCloseCallbacksContext } from "./modal-context-provider";

// Создаем хук для использования контекста в компонентах
export const useModalContext = () => {
  const context = useContext(ModalCloseCallbacksContext);
  if (!context) {
    throw new Error(
      "useModalCloseCallbacks must be used within a ModalCloseCallbacksProvider"
    );
  }
  return context;
};
