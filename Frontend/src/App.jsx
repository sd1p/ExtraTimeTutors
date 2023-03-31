import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Videoplayer from "./components/Videoplayer";
import InputBar from "./components/InputBar";
import Questions from "./components/Questions";
import axios from "axios";
import Navbar from "./components/NavBar/NavBar";
import About from "./components/About";
import APIDocs from "./components/APIDocs";
import MenuButton from "./components/MenuButton";
import Summarize from "./components/Summarize";
import Context from "./components/Context";

function App() {
  // const questions = [
  //   {
  //     id: 1,
  //     question: "What is the ....? waka waka waka waka waka wka ",
  //     options: ["Ans1", "Ans2", "Ans3", "Ans4"],
  //     answer: 2,
  //   },
  //   {
  //     id: 2,
  //     question: "What is the ....?",
  //     options: ["Ans1", "Ans2", "Ans3", "Ans4"],
  //     answer: 1,
  //   },
  //   {
  //     id: 3,
  //     question: "What is the ....?",
  //     options: ["Ans1", "Ans2", "Ans3", "Ans4"],
  //     answer: 0,
  //   },
  // ];

  //URL Functions
  const [url, setUrl] = useState(
    "https://www.youtube.com/watch?v=5ZmFlxrNaN8&ab"
  );

   const [questions, setQuestions] = useState([]);


  //Fetching Data from API

  const getApiQuestions = async function (data) {
    console.log("hi");
    fetch("http://127.0.0.1:8080/api/vid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setQuestions(data);
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const generate = () => {
    console.log("generate");
    const data = { url: url };
    getApiQuestions(data)
  }

  useEffect(() => {
  }, []);


  //console.log(questions);

  //Video Player Functions
  const [playing, setPlaying] = useState(false);
  const vidPlay = () => {
    setPlaying(true);
  };
  const vidPause = () => {
    setPlaying(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <InputBar onAdd={(url) => setUrl(url)} />
                <Videoplayer url={url} playing={playing} />
                <MenuButton generate={generate} />
                <Questions questions={questions} />
              </>
            }
          />
          <Route
            path="/summarize"
            element={
              <>
                <InputBar onAdd={(url) => setUrl(url)} />
                <Videoplayer
                  url={url}
                  playing={playing}
                />
                <MenuButton generate={generate} />
                <Summarize url={url} />
              </>
            }
          />
          <Route path="cntxt" element={
            <>
            <MenuButton/>
            <Context/>
            </>
          }/>
          <Route path="/about" element={<About />} />
          <Route path="/apidocs" element={<APIDocs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
