import { ROUTES } from "@router/router";
import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import s from "./sidebar.module.scss";
import { GroupPersonIcon } from "@assets/icons/GroupPersonIcon";
import { PersonIcon } from "@assets/icons/PersonIcon";
import { LogoutIcon } from "@assets/icons/LogoutIcon";
import { UserInfo } from "@features/user/userinfo";
import { ReactNode, useEffect, useMemo, useRef } from "react";
import { CSSTransition } from "react-transition-group";

interface MenuProps {
  close: () => void;
  isOpen: boolean;
}

interface Menu {
  link: string;
  name: string;
  icon: ReactNode;
  active: string;
}

export const Sidebar = (props: MenuProps) => {
  const { close, isOpen } = props;
  const nodeRef = useRef(null);const { pathname } = useLocation()

	const page = useMemo(() => pathname.slice(1).split('/')[0].toLowerCase(), [pathname])
  const menu: Menu[] = [
    {
      link: ROUTES.Teams,
      icon: <GroupPersonIcon />,
      name: "Teams",
      active: 'team'
    },
    {
      link: ROUTES.Players,
      icon: <PersonIcon />,
      name: "Players",
      active: 'player'
    },
  ];
  const onResize = () => {
    if(!isOpen) {
      return;
    }
    if(window.innerWidth < 1024) {
      close();
    }
  }
  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return (
    <nav className={classNames(s.sidebar, { [s.active]: isOpen })}>
      <ul>
        <li className={s.sidebar__user}>
          <UserInfo />
        </li>
        {menu.map((item, key) => {
          return (
            <li className={s.menu__item} key={key.toString()}>
              <NavLink
                onClick={close}
                to={item.link}
                className={({ isActive }) =>
                  classNames(s.link, { [s.active]: isActive || page.includes(item.active) })
                }
              >
                {item.icon}
                <span className={s.menu__item__name}>{item.name}</span>
              </NavLink>
            </li>
          );
        })}
        <li className={classNames(s.menu__item, s.logout)}>
          <span>
            <LogoutIcon />
            <span className={s.menu__item__name}>Sign Out</span>
          </span>
        </li>
      </ul>
      <CSSTransition
        nodeRef={nodeRef}
        unmountOnExit
        in={isOpen}
        timeout={300}
        classNames={{
          enterActive: s.fade_enter,
          enterDone: s.fade_enter_active,
          exitActive: s.fade_exit_active,
          exitDone: s.fade_exit
        }}
      >
        <div className={s.sidebar__overlay} ref={nodeRef} onClick={close}></div>
      </CSSTransition>
    </nav>
  );
};
