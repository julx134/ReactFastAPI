import { ReactTerminal } from "react-terminal";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TerminalScreen({ writeCommand, writeResult }) {
  const [theme, setTheme] = useState("portfolio");

  const themes = {
    matrix: {
      themeBGColor: "#0D0208",
      themeToolbarColor: "#0D0208",
      themeColor: "#00FF41",
      themePromptColor: "#008F11",
      errorColor: "#008F11",
      successColor: "#008F11",
      linkColor: "#00FF41",
    },
    ocean: {
      themeBGColor: "#224fbc",
      themeToolbarColor: "#216dff",
      themeColor: "#e5e5e5",
      themePromptColor: "#00e5e5",
      errorColor: "#e5e500",
      linkColor: "#e5e5e5",
    },
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
    const res = await fetch(url);
    const data = await res.json();
    return JSON.stringify(data);
  };

  const commands = () => {};

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
          commands={commands}
          prompt="$"
          welcomeMessage={welcomeMessage}
          errorMessage={<span style={error}>Command not found</span>}
          themes={themes}
          theme={theme}
          defaultHandler={async (command, commandArguments) => {
            writeCommand(command);
            writeResult(await fetchData(command));
            return "";
          }}
        />
      </div>
    </div>
  );
}
