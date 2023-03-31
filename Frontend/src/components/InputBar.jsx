import React, { useState } from "react";

const InputBar = ({ onAdd }) => {
  const [urlc, setUrlc] = useState(
    "https://www.youtube.com/watch?v=5ZmFlxrNaN8&ab"
  );
  const click = (e) => {
    function isValidURL(string) {
      var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      return (res !== null)
    }
    if(isValidURL(urlc))
    {
      const checkUrl = new URL(urlc);
      //console.log(checkUrl.host);
      if (checkUrl.origin == "https://www.youtube.com") {
        onAdd(urlc);
        console.log(urlc);
      }
      else{
        alert('Enter a valid youtube video url.')
      }
    }
    else
    {
      alert('Enter a valid url.')
    }
  };
  return (
    <div className="input-conatiner">
      <div className="mx-auto">
        <input
          type="url"
          className="form-control mx-auto"
          value={urlc}
          onChange={(e) => setUrlc(e.target.value)}
          id="urlEntered"
          placeholder="Enter the Youtube URL"
        />
      </div>
      <button className="button-input btn btn-primary" value="Send Url" onClick={click}>
        Search
      </button>
    </div>
  );
};

export default InputBar;
