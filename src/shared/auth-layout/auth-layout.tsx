import s from "./auth-layout.module.scss";

interface IAuthLayoutProps {
	title: string,
    img: string,
    children: React.ReactNode
}

export const AuthLayout = ({title, img, children}: IAuthLayoutProps) => {
    return (
        <div className={s.auth}>
            <div className={s.auth__actions}>
                <div className={s['auth__actions-wrap']}>
                    {title && <h1 className={s['auth__actions-title']}>{ title }</h1>}
                    {children}
                </div>
            </div>
            { img &&
                <div className={s.auth__placeholder}>
                    <img className={s['auth__placeholder-image']} src={img} />
                </div>
            }
	    </div>
    )
}