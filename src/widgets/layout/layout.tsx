import { ROUTES } from "@router/router";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "./ui/sidebar/sidebar";
import { Header } from "./ui/header/header";
import s from "./layout.module.scss";
import { useAppSelector } from "@entities/redux/store";
import { selectUser } from "@entities/redux/authSlice";

export const Layout = () => {
  const useUser = () => useAppSelector(selectUser);
  const user = useUser();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (user === undefined) {
      navigate(ROUTES.SignIn);
    } else if (pathname === "/") {
      navigate(ROUTES.Teams);
    }
  }, []);

  if (user === undefined) return null;

  const [isMenuActive, setIsMenuActive] = useState(false);
  const handleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <div className={s.default_layout}>
      <Header toggleMenu={handleMenu} />
      <div className={s.default_layout__wrapper}>
        <main className={s.main_container}>
          <Outlet />
        </main>
      </div>
      <Sidebar isOpen={isMenuActive} close={closeMenu} />
    </div>
  );
};
