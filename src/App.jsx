//import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import LineCharts from "./routes/LineCharts";
import BarCharts from "./routes/BarCharts";
import NotFoundPage from "./routes/NotFoundPage";



function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/linecharts" element={<LineCharts />} />
        <Route path="/barcharts" element={<BarCharts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
