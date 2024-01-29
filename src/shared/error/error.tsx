import s from "./error.module.scss";

export interface ErrorProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const Error = (props: ErrorProps) => {
  const { imageUrl, title, description } = props;
  return (
    <div className={s.error}>
      <img className={s.error__img} src={imageUrl} />
      <h1 className={s.error__title}>{title}</h1>
      <span className={s.error__description}>{description}</span>
    </div>
  );
};
