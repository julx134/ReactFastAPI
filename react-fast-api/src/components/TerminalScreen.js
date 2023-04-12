import { ReactTerminal } from "react-terminal";
import React, { useState, useEffect } from "react";

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

  const fetchData = async (type, url) => {
    try {
      switch (type) {
        case "get":
          const res = await fetch(url);
          const data = await res.json();
          return [false, JSON.stringify(data)];
        default:
          return [true, JSON.stringify({ error: "Invalid request" })];
      }
    } catch (err) {
      return [true, JSON.stringify(err)];
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#F1A031",
      }}
    >
      <div
        style={{
          marginTop: "20%",
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
            let endpoint = commandArguments.split(" ")[0];
            let [errFlag, result] = await fetchData(command, endpoint);

            if (errFlag) {
              writeCommand("Error");
              writeResult("{error: incorrect or invalid command}");
            } else {
              writeCommand(commandArguments);
              writeResult(result);
            }

            return "";
          }}
        />
      </div>
    </div>
  );
}
