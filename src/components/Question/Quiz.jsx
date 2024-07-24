import { useContext, useState } from 'react';
import PropsTypes from "prop-types"
import Result from './Result';
import { UserContext } from '../../contexts/UserContext';

const Quiz = ({ question, currentQuestionIndex, totalQuestions }) => {
  const { quizState, updateQuizState } = useContext(UserContext);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    console.log(selectedAnswer)
    setTimeout(() => {
      const isCorrect = answer === question.correct_answer;
      updateQuizState({
        ...quizState,
        currentQuestionIndex: currentQuestionIndex + 1,
        correctAnswers: isCorrect ? quizState.correctAnswers + 1 : quizState.correctAnswers,
        timer: quizState.timer,
      });
    }, 500);
  };

  if (currentQuestionIndex >= totalQuestions) {
    return <Result />;
  }

  return (
    <div>
      <div className="font-poppins">
        <h3 className="text-center font-semibold">Kategori : <span className="text-[#FF9400]">{question.category}</span></h3>
        <h3 className='font-bold text-center mt-4' dangerouslySetInnerHTML={{ __html: question.question }}></h3>
        <p className="font-bold text-[#FF9400] text-center">{`${currentQuestionIndex + 1} / ${quizState.totalQuestions}`}</p>
      </div>
      <div className="grid grid-cols-2 mx-auto gap-4 mt-7 ">
      {question.incorrect_answers.concat(question.correct_answer).sort().map((answer, idx) => (
        <div
          key={idx}
          onClick={() => handleAnswer(answer)}
          className='border-[#d88005] border-2 hover:border-[#FF9400] cursor-pointer rounded-sm px-2 py-1'
          dangerouslySetInnerHTML={{ __html:  answer  }}
        >
          
        </div>
      ))}
      </div>
    </div>
  );
};
Quiz.propTypes = {
  question: PropsTypes.any,
  currentQuestionIndex: PropsTypes.any,
  totalQuestions: PropsTypes.any,
}
export default Quiz;
