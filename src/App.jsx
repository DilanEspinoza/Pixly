import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import PhotoPage from "./pages/PhotoPage/PhotoPage";
import { createContext, useState } from "react";

const PhotoFavoriteContext = createContext();

function App() {
  const [numberPhotosFavorites] = useState(0);


  return (
    <PhotoFavoriteContext.Provider value={numberPhotosFavorites}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<div>Welcome to photos pages</div>} />
          <Route path="/photos/:photo_id" element={<PhotoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </PhotoFavoriteContext.Provider>
  );
}

export { PhotoFavoriteContext };
export default App;