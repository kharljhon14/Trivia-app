interface Props {
  answers: string[];
  handleChange: (value: string) => void;
}

export default function Answers({ answers, handleChange }: Props) {
  const renderAnswers = answers.map((answer) => (
    <div key={answer} className="answer">
      <input onChange={(e) => handleChange(e.target.value)} type="radio" value={answer} name="answer" id={answer} />
      <label htmlFor={answer}>{answer}</label>
    </div>
  ));

  return <div className="answers">{renderAnswers}</div>;
}
