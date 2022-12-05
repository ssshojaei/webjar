import React from 'react'
import styles from './styles.module.scss'

export interface TButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const Button = ({ children, ...props }: TButtonProps) => {
  const className = props?.className || ''
  return <button className={`${styles.btn} ${className}`}>{children}</button>
}

export default Button
