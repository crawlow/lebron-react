import { ROUTES } from "@router/router";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "./ui/sidebar/sidebar";
import { Header } from "./ui/header/header";
import s from "./layout.module.scss";

export const Layout = () => {
  const navigate = useNavigate();
  const user = null;
  useEffect(() => {
    if (user === undefined) {
      console.log("redirect here");
      navigate(ROUTES.SignIn);
    }
  }, []);

  const [isMenuActive, setIsMenuActive] = useState(false);
  const handleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className={s.default_layout}>
      <Header toggleMenu={handleMenu} />
      <div className={s.default_layout__wrapper}>
        <main className={s.main_container}>
          <Outlet />
        </main>
      </div>
      <Sidebar isOpen={isMenuActive} close={handleMenu} />
    </div>
  );
};
