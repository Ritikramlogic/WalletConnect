import React, { Children } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./utils/web3Recat";
export default function Providers({ children }) {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
    </>
  );
}
