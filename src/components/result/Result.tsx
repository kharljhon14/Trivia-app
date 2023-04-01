import { useAppDispatch, useAppSelector } from '../../store';
import { end, reset, setCurrentQuestion, setQuestions, start } from '../../store/action';

interface Props {
  handleRefetch: () => void;
}

export default function Result({ handleRefetch }: Props) {
  const { score } = useAppSelector((state) => state.mainReducer.score);
  const { ended } = useAppSelector((state) => state.mainReducer.state);

  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(end(false));
    dispatch(start(false));
    dispatch(setQuestions([]));
    dispatch(setCurrentQuestion(undefined));
    dispatch(reset());
    handleRefetch();
  };

  return (
    <div className={`result ${ended ? '' : 'hidden'}`}>
      <div className="result__header">
        <h2 className="result__header-title">Your score is</h2>
        <p className="result__header-subtitle">{`${score}/10`}</p>
      </div>
      <button onClick={handleReset}>Menu</button>
    </div>
  );
}
