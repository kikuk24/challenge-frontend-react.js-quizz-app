import PropsTypes from "prop-types"
import Head from "./Header/Head";

const MainLayouts = ({ children }) => {
  
  return (
    <>
    <Head />
    <main className="max-w-7xl mx-auto">
      {children}
    </main>
    </>
  )
}
MainLayouts.propTypes = {
  children: PropsTypes.node
};

export default MainLayouts
