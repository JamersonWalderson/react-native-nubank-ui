import React from "react";
import { AuthProvider } from "../hooks/useAuth";
import { Router } from "../navigation";

const App: React.FC = () => {
  return(
  <AuthProvider>
    <Router />
  </AuthProvider>
  )
}

export default App;