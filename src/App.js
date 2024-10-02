import AllRouter from './components/AllRouters';
import './App.css';
import { useEffect } from 'react';
import { postEndTime, postStartTime } from './utils';
function App() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      console.log(token);
      const handleVisibilityChange = async () => {
        if (document.hidden) {
          console.log("User is not in the browser");
          await postEndTime();
          console.log("OK")
        } else {
          console.log("User is in the browser");
          await postStartTime();
        }
      };


      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        window.removeEventListener('visibilitychange', handleVisibilityChange)
      };
    }
  }, []);
  return (
    <>
      <AllRouter />
    </>
  );
}

export default App;
