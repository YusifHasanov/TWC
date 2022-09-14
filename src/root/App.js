import React, { useEffect, useState } from "react";

import styles from "./app.module.css";
import myTheme from "../features/chakraUI/Theme";
import { Route, Routes } from "react-router-dom";
import HomePage from "../features/HomePage/HomePage";
import {ChakraProvider} from "@chakra-ui/react";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ChakraProvider theme={myTheme}>
      <div className={`${styles.app_container}`} id={"top"}>
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <HomePage width={width} />
              </>
            }
          />
        </Routes>
      </div>
    </ChakraProvider>
  );
};

export default App;
