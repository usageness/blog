import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <p>Hello, World!</p>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
