import React, { useState } from "react";
import getData from "./utils/getData";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
//comps
import People from "./components/People";
import Degrees from "./components/Degrees";
import Courses from "./components/Courses";
import Minors from "./components/Minors";

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
        <h1>Welcome to the iSchool</h1>
        <h3>Loading...</h3>
      </>
    );
  return (
    <>
      <section className="stick">
        <h1>Welcome to the iSchool</h1>
        <div>menu eventually...</div>
        {/* menu? */}
      </section>
      <section className="App">
        <section className="About">
          <h2>{aboutObj.title}</h2>
          <h3>{aboutObj.description}</h3>
          <div className="aboutQuote">
            <h5 className="quote">{aboutObj.quote}</h5>
            <h5>-- {aboutObj.quoteAuthor}</h5>
          </div>
        </section>
        {/* other components */}
        <hr />
        <People />
        <hr />
        <Degrees />
        <hr />
        <Courses />
        <hr />
        <Minors />
        <hr />
      </section>
    </>
  );
}

export default App;
