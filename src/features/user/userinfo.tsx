import { UserProfileIcon } from "@assets/icons/UserProfileIcon";
import s from "./userinfo.module.scss";

export const UserInfo = () => {
  const userAvatar = "";

  return (
    <div className={s.user__info}>
      <div className={s.user__info__name}>UserName</div>
      {userAvatar ? (
        <img src={userAvatar} />
      ) : (
        <UserProfileIcon className={s.avatar} />
      )}
    </div>
  );
};
