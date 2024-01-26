import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import s from './button.module.scss'

interface IButtonProps extends PropsWithChildren {
	disabled?: boolean
	variant?: 'primary' | 'secondary'
	onClick?: () => void
	isLoading?: boolean
	type?: 'button' | 'reset' | 'submit'
	className?: string
}

export const Button = (props: IButtonProps) => {
	const {
		children,
		variant = 'primary',
		onClick,
		disabled = false,
		isLoading,
		type,
		className,
	} = props
	return (
		<button
			className={classNames(s.button, className, {
				[s.secondary]: variant === 'secondary',
				[s.loading]: isLoading,
			})}
			onClick={
				isLoading || disabled || onClick === undefined ? undefined : onClick
			}
			disabled={disabled}
			type={type}
		>
			{children}
		</button>
	)
}
