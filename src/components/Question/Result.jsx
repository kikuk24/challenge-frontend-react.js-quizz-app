import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import MainLayouts from '../MainLayouts';

const Result = () => {
  const { quizState } = useContext(UserContext);
  const name = localStorage.getItem('name');
  const handleRestart = () => {
    localStorage.clear();
    window.location.href = '/'
  };

  return (
    <MainLayouts>
    <div className='font-poppins w-full'>
        <h2 className='font-bold text-2xl text-center mb-5'>Hasil Kuis Kamu <span className="text-[#FF9400]">{ name }</span></h2>
        <p className='font-bold text-center'>Total Soal: {quizState.totalQuestions}</p>
        <p className='font-bold text-center my-4'>Jawaban Benar: {quizState.correctAnswers}</p>
        <p className='font-bold text-center'>Jawaban Salah: {quizState.totalQuestions - quizState.correctAnswers}</p>
        <div className="text-center mt-3">
          <h3 className="font-semibold">Skor Kamu Adalah</h3>
          <p className="font-bold text-2xl text-[#FF9400]">{`${quizState.correctAnswers * 10} / ${quizState.totalQuestions * 10}`}</p>
        </div>
        <div className="flex justify-center items-center w-full">
          <button className='text-white bg-[#FF9400] hover:bg-[#d88005] focus:ring-4 focus:outline-none focus:ring-[#f7a026] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-8' onClick={handleRestart}>Kembali Ke Beranda</button>
        </div>
    </div>
    </MainLayouts>
  );
};

export default Result;
