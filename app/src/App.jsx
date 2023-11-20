import React, { useState } from "react";
import getData from "./utils/getData";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
//comps
import People from "./components/People";
import Degrees from "./components/Degrees";
import Courses from "./components/Courses";
import Employment from "./components/Employment";
// import Minors from "./components/Minors";

function App() {
  //var
  //const [getter, setter] = useState(init);
  const [loaded, setLoaded] = useState(false);
  const [aboutObj, setAboutObj] = useState();

  //functions
  React.useEffect(() => {
    getData("about/").then((returnJson) => {
      // console.log("here", returnJson);
      setAboutObj(returnJson);
      setLoaded(true);
    });
  }, []);
  //render
  if (!loaded)
    return (
      <>
        <div className="flex flex-col place-content-center">
          <h1 className="text-white ">Welcome to the iSchool</h1>
          <h3 className="text-white">Loading...</h3>
        </div>
      </>
    );
  return (
    <>
      <nav className="flex justify-between p-8 px-20 border-b fixed w-full backdrop-blur-md bg-[#00000030] stick">
        <p className="text-3xl">Welcome to the iSchool</p>
        <div className="list-none flex flex-row gap-8 place-content-center font-normal ">
          <li>People</li>
          <li>Degrees</li>
          <li>Courses</li>
        </div>
      </nav>
      <section className="App pt-[10rem]">
        <section className="About mb-20 flex flex-col place-content-center">
          <h3>{aboutObj.title}</h3>
          <p>{aboutObj.description}</p>
          <div className="aboutQuote">
            <h5 className="quote">{aboutObj.quote}</h5>
            <h5 className="font-bold mt-4">-- {aboutObj.quoteAuthor}</h5>
          </div>
        </section>
        <People />
        <hr />
        <Degrees />
        <hr />
        <Courses />
        {/* <Minors /> */}
        <hr />
        <Employment />
      </section>
    </>
  );
}

export default App;
