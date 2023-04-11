import { ReactTerminal } from "react-terminal";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TerminalScreen({ writeCommand, writeResult }) {
  const [theme, setTheme] = useState("portfolio");
  //const [errFlag, setErrFlag] = useState(false);

  const themes = {
    portfolio: {
      themeBGColor: "#fdf6e4",
      themeToolbarColor: "#d8d8d8",
      themeColor: "#333",
      themePromptColor: "#4495D4",
      errorColor: "#FF443E",
      successColor: "#5B9E47",
      linkColor: "#4495D4",
    },
  };

  const error = {
    color: themes[theme].errorColor,
    fontWeight: "bold",
  };

  const welcomeMessage = (
    <span>
      Welcome to my <strong>FastAPI</strong> project! Use the buttons above to
      start.
      <br />
      <br />
    </span>
  );

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      //setErrFlag(false);
      return [false, JSON.stringify(data)];
    } catch (err) {
      //setErrFlag(true);
      return [true, JSON.stringify(err)];
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F1A031",
      }}
    >
      <div
        style={{
          height: 433,
          maxHeight: "100vh",
          width: 600,
          maxWidth: "100vw",
        }}
      >
        <ReactTerminal
          prompt="$"
          welcomeMessage={welcomeMessage}
          errorMessage={<span style={error}>Command not found</span>}
          themes={themes}
          theme={theme}
          defaultHandler={async (command, commandArguments) => {
            let [errFlag, result] = await fetchData(command);
            if (errFlag) {
              writeCommand("Error");
            } else {
              writeCommand(command);
            }
            writeResult(result);

            return "";
          }}
        />
      </div>
    </div>
  );
}
