// src/QueryClientProvider.js
import React from "react";
import { QueryClient, QueryClientProvider as RQProvider } from "react-query";

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }) => {
  return <RQProvider client={queryClient}>{children}</RQProvider>;
};

export default QueryClientProvider;
