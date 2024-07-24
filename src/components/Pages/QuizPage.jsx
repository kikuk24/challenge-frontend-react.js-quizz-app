import MainLayouts from "../MainLayouts"
import { useContext, useEffect, useState } from 'react';
import Quiz from "../Question/Quiz";
import { UserContext } from "../../contexts/UserContext";
import { fetchQuestions } from "../../services/quizService";
import Result from "../Question/Result";

const QuizPage = () => {
  const { quizState, updateQuizState } = useContext(UserContext);
  const [timer, setTimer] = useState(() => {
    const savedTimer = localStorage.getItem('quizTimer');
    return savedTimer ? parseInt(savedTimer, 10) : quizState.timer || 60;
  });

  useEffect(() => {
    const loadQuestions = async () => {
      const storedQuestions = localStorage.getItem('questions');
      if (storedQuestions) {
        const questions = JSON.parse(storedQuestions);
        updateQuizState((prevState) => ({
          ...prevState,
          questions,
          totalQuestions: questions.length,
        }));
      } else {
        try {
          const questions = await fetchQuestions();
          localStorage.setItem('questions', JSON.stringify(questions));
          updateQuizState((prevState) => ({
            ...prevState,
            questions,
            totalQuestions: questions.length,
          }));
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      }
    };

    if (quizState.questions.length === 0) {
      loadQuestions();
    }
  }, [quizState.questions.length, updateQuizState]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prev) => {
        const newTime = prev - 1;
        if (newTime <= 0) {
          clearInterval(timerInterval);
          updateQuizState((prevState) => ({
            ...prevState,
            timer: 0,
          }));
          return 0;
        }
        localStorage.setItem('quizTimer', newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [updateQuizState]);

  if (timer <= 0 || quizState.currentQuestionIndex >= quizState.totalQuestions) {
    return <Result />;
  }

  return (
    <MainLayouts>
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="font-semibold">Waktu Tersisa: {timer} detik</h2>
        <div className="">
        {quizState.questions.length > 0 && (
          <Quiz
            question={quizState.questions[quizState.currentQuestionIndex]}
            currentQuestionIndex={quizState.currentQuestionIndex}
            totalQuestions={quizState.totalQuestions}
          />
        )}
        </div>
      </div>
    </MainLayouts>
  )
}

export default QuizPage
