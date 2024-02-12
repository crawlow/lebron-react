import { api } from "@entities/api/common/api";
import { logoutAction } from "@entities/redux/authSlice";
import { useAppDispatch } from "@entities/redux/store";
import { ROUTES } from "@router/router";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return () => {
    dispatch(logoutAction());
    dispatch(api.util.resetApiState());
    navigate(ROUTES.SignIn);
  };
};
