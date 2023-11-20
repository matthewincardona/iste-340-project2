import React, { useState, useEffect } from "react";
import { Link, Events, animateScroll as scroll } from "react-scroll";
import getData from "./utils/getData";
import "semantic-ui-css/semantic.min.css";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";
//comps
import People from "./components/People";
import Degrees from "./components/Degrees";
import Courses from "./components/Courses";
import Employment from "./components/Employment";
import Minors from "./components/Minors";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [aboutObj, setAboutObj] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutData = await getData("about/");
        setAboutObj(aboutData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoaded(true);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  if (!loaded) {
    return (
      <>
        <div className="flex flex-col place-content-center">
          <h1 className="text-white " onClick={scrollToTop}>
            Welcome to the iSchool
          </h1>
          <CircularProgress color="secondary" />
        </div>
      </>
    );
  }

  return (
    <>
      <nav className="flex justify-between p-8 pb-3 px-20 border-b fixed w-full backdrop-blur-md bg-[#00000030] stick">
        <p className="text-3xl cursor-pointer" onClick={scrollToTop}>
          Welcome to the iSchool
        </p>
        <div className="list-none flex flex-row gap-8 place-content-center font-normal ">
          <Link to="people" spy={true} smooth={true} duration={500}>
            People
          </Link>
          <Link to="degrees" spy={true} smooth={true} duration={500}>
            Degrees
          </Link>
          <Link to="courses" spy={true} smooth={true} duration={500}>
            Courses
          </Link>
          <Link to="minors" spy={true} smooth={true} duration={500}>
            Minors
          </Link>
          <Link to="employment" spy={true} smooth={true} duration={500}>
            Employment
          </Link>
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
        <People id="people" />
        <Degrees id="degrees" />
        <hr />
        <Courses id="courses" />
        <hr />
        <Minors id="minors" />
        <Employment id="employment" />
      </section>
    </>
  );
}

export default App;
