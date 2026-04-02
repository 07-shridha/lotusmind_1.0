import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudyGroups from "./pages/StudyGroups";

function App() {
  return (
      <Routes>
            <Route path="/" element={<Home />} />
                  <Route path="/groups" element={<StudyGroups />} />
                      </Routes>
                        );
                        }

                        export default App;