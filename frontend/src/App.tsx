import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Auth } from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";
import { SharedBrain } from "./pages/SharedBrain"; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route goes to Auth */}
        <Route path="/" element={<Auth />} />
        
        {/* Protected Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Shared Brain Route (for later) */}
        <Route path="/share/:shareLink" element={<SharedBrain />} />
        
        {/* Catch-all: redirect unknown URLs back to Auth */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}