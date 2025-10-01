import "./App.css";
import Links from "./components/Links";
import ProfileCard from "./components/ProfileCard"; // adjust path if needed
import SkillsCard from "./components/SkillsCard";

function App() {
  return (
    <div className="App">
      {/* <h1 className="text-center my-4">My Profile Page</h1> */}
      <ProfileCard/>
      <SkillsCard/>
      <Links/>
    </div>
  );
}

export default App;
