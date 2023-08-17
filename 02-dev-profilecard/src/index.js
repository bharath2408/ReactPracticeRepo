import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA="
      alt="developer"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>BHARATHAKUMAR</h1>
      <p>
        Full stack web develepor look for job in entry level company an to
        improve my self.!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" color="blue" />
      <Skill skill="JavaScript" color="yellow" />
      <Skill skill="HTML+CSS" color="orange" />
      <Skill skill="JAVA" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
