import React from "react";
import ReactPlayer from "react-player";
import { useState } from "react";

function Videoplayer({ url, playing}) {
  //console.log(url);

  return (
    <>
      <div className="video-wrapper">
        <ReactPlayer
          controls={true}
          playing={playing}
          url={url}
          onReady={() => console.log("onReady callback")}
          onStart={() => console.log("onStart callback")}
          onPause={() => console.log("onPause callback")}
          onEnded={() => console.log("onEnded callback")}
          onError={() => console.log("onError callback")}
        />
      </div>
    </>
  );
}

export default Videoplayer;
