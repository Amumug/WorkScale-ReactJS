import Navbar from "./components/Navbar.jsx"
import styles from "./style.js"
import Stats from "./components/Stats.jsx"
import Hero from "./components/Hero.jsx"

function App() {

  return (
    <>
      <div className=" w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxwidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxwidth}`}>
            <Stats />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
