import { useContext} from 'react';
import './App.css'
import MainLayouts from './components/MainLayouts'
import { UserContext } from './contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function App() {
  const { updateName } = useContext(UserContext);
  const navigate = useNavigate()
  const name = localStorage.getItem('name')


  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) return navigate('quiz');
    const inputName = e.target.name.value;
    updateName(inputName);
    navigate('quiz');
  }
  return (
    <MainLayouts>
      <div className="w-full flex font-poppins ">
        <div className="w-1/2 mx-auto flex items-center justify-center">
          <img src="https://assets.kompasiana.com/items/album/2022/04/29/problem-626baa1b3794d10d1116aec2.png?t=o&v=740&x=416" alt="" className="w-[500px]" />
        </div>
        <div className="w-1/2 px-7">
          <h1 className="font-bold text-2xl">Selamat Datang di Quizzz</h1>
          <p className="text-slate-500">Quiz App Chalengge</p>
          <div>
            <form className='mt-9' onSubmit={handleSubmit}>
              {name ? (<>
                <p className="font-bold text-2xl">Hello <span className="text-[#FF9400]">{name}</span>, Silahkan Lanjukan Quizzmu</p>
                <button type="submit" className='text-white bg-[#FF9400] hover:bg-[#d88005] focus:ring-4 focus:outline-none focus:ring-[#f7a026] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-8'>
                  Lanjutkan
                </button></>) : (<>
                  <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900'>Nama</label>
                  <input type="text" name="name" id="name" placeholder='Masukan Nama Anda!' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' autoComplete='off' required />
                  <button type="submit" className='text-white bg-[#FF9400] hover:bg-[#d88005] focus:ring-4 focus:outline-none focus:ring-[#f7a026] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-8'>
                    Mulai
                  </button>
              </>)}
              
              
            </form>
          </div>
        </div>
      </div>
    </MainLayouts>
  )
}

export default App
