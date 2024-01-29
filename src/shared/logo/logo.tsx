import { NavLink } from "react-router-dom";
import LogoUrl from "@assets/img/logo/logo.svg";
import s from "./logo.module.scss";

export const Logo = () => {
  return (
    <NavLink className={s.logoLink} to={"/"}>
      <img src={LogoUrl} className={s.logo} />
    </NavLink>
  );
};
