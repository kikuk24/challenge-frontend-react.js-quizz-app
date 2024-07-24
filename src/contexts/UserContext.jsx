import { createContext, useState, useEffect } from 'react';
import PropsTypes from "prop-types"

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [quizState, setQuizState] = useState({
    questions: [],
    currentQuestionIndex: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    timer: 600,
  });

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedQuizState = JSON.parse(localStorage.getItem('quizState'));
    if (storedName) {
      setName(storedName);
    }
    if (storedQuizState) {
      setQuizState(storedQuizState);
    }
  }, []);

  const updateName = (newName) => {
    localStorage.setItem('name', newName);
    setName(newName);
  };

  const updateQuizState = (newQuizState) => {
    localStorage.setItem('quizState', JSON.stringify(newQuizState));
    setQuizState(newQuizState);
  };

  return (
    <UserContext.Provider value={{ name, updateName, quizState, updateQuizState }}>
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropsTypes.node
};
export { UserContext, UserProvider };
