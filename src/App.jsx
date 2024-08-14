import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import PhotoPage from "./pages/PhotoPage/PhotoPage";
import { createContext, useState } from "react";

const SearchImgsContext = createContext();


function App() {
  const [searchImgs, setSearchImgs] = useState(0);


  return (
    <SearchImgsContext.Provider value={{ searchImgs, setSearchImgs }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<div>Welcome to photos pages</div>} />
          <Route path="/photos/:photo_id" element={<PhotoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </SearchImgsContext.Provider>
  );
}

export { SearchImgsContext };
export default App;