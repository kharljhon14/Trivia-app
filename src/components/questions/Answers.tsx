interface Props {
  answers: string[];
}

export default function Answers({ answers }: Props) {
  const renderAnswers = answers.map((answer) => (
    <div key={answer} className="answer">
      <input type="radio" name="answer" id={answer} />
      <label htmlFor={answer}>{answer}</label>
    </div>
  ));

  return <div className="answers">{renderAnswers}</div>;
}
