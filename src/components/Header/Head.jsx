// import PropsTypes from "prop-types"
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
const Head = () => {
  const { name } = useContext(UserContext)
  return (
    <header className="w-full max-w-7xl mx-auto flex justify-between items-center py-3 px-2 reative bg-transparent top-0 left-0">
      <h2 className="font-bold">Quiz App Chalenge</h2>
      {name ? (<div className="text-base">{name}</div>) : (
        <div className="text-base outline py-2 px-4 rounded-full">Mulai</div>
      )}
    </header>
  )
}

export default Head
