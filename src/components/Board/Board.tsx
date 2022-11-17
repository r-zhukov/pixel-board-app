import React, { Dispatch, memo, SetStateAction, useMemo } from 'react';
import styles from './Board.module.css';
import { Pixel } from '../Pixel';
import { pixelsArrBuilder } from '../../utils';

type TBoardProps = {
  pixelsNumber: number;
  isSelectionActive: boolean;
  updateSelectedPixels: Dispatch<SetStateAction<number[]>>;
  selectedPixels: number[];
  isShowSelected: boolean;
};

const Board = memo(
  ({
    pixelsNumber,
    isSelectionActive,
    updateSelectedPixels,
    selectedPixels,
    isShowSelected,
  }: TBoardProps) => {
    const pixels = useMemo(() => {
      return pixelsArrBuilder(pixelsNumber);
    }, [pixelsNumber]);

    return (
      <div className={styles.board}>
        {pixels.map((pixel) => (
          <Pixel
            isSelected={isShowSelected && selectedPixels.includes(pixel)}
            updateSelectedPixels={updateSelectedPixels}
            id={pixel}
            isSelectionActive={isSelectionActive}
            key={pixel}
          />
        ))}
      </div>
    );
  }
);

export { Board };
