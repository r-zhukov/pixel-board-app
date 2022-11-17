import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Board, Button } from './components';

const App = () => {
  const [isSelectionActive, setIsSelectionActive] = useState(false);
  const [isShowSelected, setIsShowSelected] = useState(false);
  const [selectedPixels, setSelectedPixels] = useState<number[]>([]);

  const controlKeyListener = (e: KeyboardEvent) => {
    if (e.code === 'ControlLeft') {
      setIsSelectionActive((prevState) => !prevState);
    }
  };

  const onRevealBtnClick = () => {
    setIsShowSelected((prevState) => !prevState);
  };

  useEffect(() => {
    document.addEventListener('keydown', controlKeyListener);
    document.addEventListener('keyup', controlKeyListener);

    return () => {
      document.removeEventListener('keydown', controlKeyListener);
      document.removeEventListener('keyup', controlKeyListener);
    };
  });

  return (
    <main className={styles.container}>
      <Board
        isShowSelected={isShowSelected}
        selectedPixels={selectedPixels}
        updateSelectedPixels={setSelectedPixels}
        isSelectionActive={isSelectionActive}
        pixelsNumber={3000}
      />
      <span>{isSelectionActive ? 'CONTROL PRESSED' : '___'}</span>
      <Button onClick={onRevealBtnClick}>Reveal</Button>
    </main>
  );
};

export { App };
