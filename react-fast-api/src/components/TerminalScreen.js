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
      start. Type <strong>clear</strong> to clear the command line!
      <br />
      <br />
    </span>
  );

  const fetchData = async (type, url, ...body) => {
    try {
      switch (type) {
        case "get":
          var res = await fetch(url);
          var data = await res.json();
          return [false, JSON.stringify(data)];
        case "put":
          if (!body[0]) {
            var res = await fetch(url, {
              method: "PUT",
            });
            var data = await res.json();
            return [false, JSON.stringify(data)];
          }

          var res = await fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: body[0],
          });
          var data = await res.json();
          return [false, JSON.stringify(data)];
        case "post":
          var res = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: body[0],
          });
          var data = await res.json();
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
          height: 500,
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
            let body = "";
            try {
              body = commandArguments.split(" ")[1];
            } catch (err) {
              console.log(err);
            }

            let [errFlag, result] = await fetchData(command, endpoint, body);

            if (errFlag) {
              writeCommand("Error");
              let errObject = { error: "incorrect or invalid command" };
              writeResult(JSON.stringify(errObject));
            } else {
              writeCommand(endpoint);
              writeResult(result);
            }

            return "";
          }}
        />
      </div>
    </div>
  );
}
