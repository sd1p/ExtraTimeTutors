import { useState } from "react";
import Questions from "./Questions";

const Context = () => {
  const [context, setContext] = useState("");
  const [questions, setQuestions] = useState([])

  const getQuestions = async (data) => {
    await fetch("http://127.0.0.1:8080/api/ques", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success: ", data);
        //console.log(data);
        setQuestions(data);
        return data;
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };


  const generate = () => {
    console.log('hi');
    const data = {
        url: context
    }
    getQuestions(data)
  }
  return (
    <>
      <div className="contextInput mx-auto">
        <label htmlFor="contextEntered">Enter the Context Here</label>
        <textarea
          className="form-control mx-auto"
          id="contextEntered"
          placeholder="Enter Context"
          onChange={(e)=>setContext(e.target.value)}
        ></textarea>
        <button className="btn btn-primary" onClick={generate}>Generate Questions</button>
      </div>
      <Questions questions={questions}/>
    </>
  );
};

export default Context;
