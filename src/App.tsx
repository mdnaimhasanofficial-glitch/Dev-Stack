import { Suspense } from "react"
import CardText from "./Components/Card-text"
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import TechnologyCard from "./DevCard/TechnologyCard"
import type { ITechnology } from "./type"
import Footer from "./Components/Footer"
import CopyRight from "./Components/CopyRight"

const technologyPromise = async () : Promise<ITechnology[]>=>{
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}


function App() {
  // console.log(technologyPromise);

  return (
    <>
        <Nav/>
        <Hero/>
        <CardText/>
        <Suspense fallback={<button className="btn btn-square">
  <span className="loading loading-spinner"></span>
</button>}>
            <TechnologyCard technologyPromise={technologyPromise()}>

            </TechnologyCard>
        </Suspense>

        <Footer></Footer>
        <CopyRight/>



        

    </>
  )
}

export default App
