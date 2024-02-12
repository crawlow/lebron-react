import LogoUrl from "@assets/img/logo/logo.svg";
import s from "./logo.module.scss";
import { ROUTES } from "@router/router";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link className={s.logoLink} to={ROUTES.Teams}>
      <img src={LogoUrl} className={s.logo} />
    </Link>
  );
};
