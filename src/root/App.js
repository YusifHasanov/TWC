import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import Header from "./features/header/Header";

const App = () => {
    return (
        <ChakraProvider>
            <div>
                <Header/>
            </div>
        </ChakraProvider>

    );
};

export default App;
