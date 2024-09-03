'use client';
import { useTheme } from '@/lib/hooks/use-theme';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const DarkModeButton = ({
  className,
  onClick,
  ...rest
}: Props & MotionProps) => {
  const { isDarkMode, toggle } = useTheme();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick && onClick(e);
    toggle();
  };

  return (
    <motion.button
      className={`rounded-lg p-1 text-white hover:text-orange-700 hover:bg-white hover:rounded-2xl outline-none cursor-pointer w-fit ${className} duration-200`}
      onClick={clickHandler}
      {...rest}
    >
      <Icon
        icon={isDarkMode ? 'carbon:sun' : 'ph:moon'}
        width="26"
        height="26"
      />
    </motion.button>
  );
};

export default DarkModeButton;
