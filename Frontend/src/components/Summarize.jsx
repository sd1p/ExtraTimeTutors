import { useEffect, useState } from "react";

const Summarize = ({ url }) => {
  const [summary, setSummary] = useState("");
  const getSummary = async (data) => {
    console.log("summ");
    await fetch("https://flask-production-ccf3.up.railway.app/api/summ", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success: ", data);
        //console.log(data['summary']);
        setSummary(data['summary']);
        return data;
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    const data = { url: url };
    getSummary(data);
  }, [url]);

  return summary&&<div className="summaryText">{summary}</div>;
};

export default Summarize;
