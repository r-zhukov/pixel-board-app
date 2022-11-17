import React, { Dispatch, SetStateAction, useState } from 'react';
import clsx from 'clsx';
import styles from './Pixel.module.css';

type TPixelProps = {
  isSelectionActive: boolean;
  id: number;
  updateSelectedPixels: Dispatch<SetStateAction<number[]>>;
  isSelected: boolean;
};

const Pixel = ({
  isSelectionActive,
  updateSelectedPixels,
  id,
  isSelected,
}: TPixelProps) => {
  const [mode, setMode] = useState<null | 'active' | 'shadow'>(null);

  const onMouseLeave = () => {
    if (!isSelectionActive) return;

    setMode('active');
    updateSelectedPixels((prevState) => {
      if (prevState.includes(id)) {
        return prevState;
      }
      return [...prevState, id];
    });
  };
  const onMouseMove = () => {
    if (!isSelectionActive) return;

    new Promise((resolve) => {
      setTimeout(() => {
        setMode('shadow');
        resolve('success');
      }, 500);
    }).then(() => {
      setTimeout(() => {
        setMode(null);
      }, 500);
    });
  };

  return (
    <div
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      className={clsx(
        styles.pixel,
        mode && styles[`pixel__${mode}`],
        isSelected && styles.pixel__selected
      )}
    />
  );
};

export { Pixel };
