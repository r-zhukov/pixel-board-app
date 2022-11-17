import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.css';

type TButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button = ({ children, type, onClick }: TButtonProps) => {
  return (
    <button className={styles.button} type={type || 'button'} onClick={onClick}>
      {children}s
    </button>
  );
};

export { Button };
