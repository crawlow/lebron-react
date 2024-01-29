import { Error } from "@shared/error/error";
import Error404 from "@assets/img/error/error404.svg";
import s from "./error-page.module.scss";

export const ErrorPage = () => {
  const initialError = {
    imageUrl: Error404,
    title: "Page not found",
    description: "Sorry, we can’t find what you’re looking for",
  };
  return (
    <div className={s.error_page}>
      <Error {...initialError} />
    </div>
  );
};
