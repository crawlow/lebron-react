import { UserInfo } from "@features/user/userinfo";
import { Logo } from "@shared/logo/logo";
import s from "./header.module.scss";

interface HeaderProps {
  toggleMenu(): void;
}

export const Header = (props: HeaderProps) => {
  const { toggleMenu } = props;
  return (
    <header className={s.header_layout}>
      <div className={s.header_layout__hamburger} onClick={toggleMenu}></div>
      <Logo />
      <span className={s.header_layout__user}>
        <UserInfo />
      </span>
    </header>
  );
};
