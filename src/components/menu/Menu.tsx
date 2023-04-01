import { useAppDispatch, useAppSelector } from '../../store';
import { start } from '../../store/action';

export default function Menu() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.mainReducer.state);

  const handleStart = () => {
    dispatch(start(true));
  };

  return (
    <div className={`menu ${state.started ? 'hidden' : ''}`}>
      <div className="menu__header">
        <h1 className="menu__header-title">Triva Game</h1>
        <p className="menu__header-subtitle">Are you ready to put your knowledge to the test?</p>
      </div>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}
