interface Props {
  question: string;
}
export default function QuestionTitle({ question }: Props) {
  return <h2 className="question_title">{question}</h2>;
}
