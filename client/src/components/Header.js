import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* <h3>process.env.EMAIL_ALUNO</h3> */}
      {location.pathname === "/" && (
        <Button
<<<<<<< HEAD
<<<<<<< HEAD
          color={showAdd ? "red" : "blue"}
=======
          color={showAdd ? "red" : "black"}
>>>>>>> 8364914 (Primeiro commit no branch pr-cicd)
=======
          color={showAdd ? "red" : "black"}
>>>>>>> 83649143cc91188e0f3a7534ff54971c594552c4
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
<<<<<<< HEAD
<<<<<<< HEAD
  title: "TESTE",
=======
  title: "BIA 2024",
>>>>>>> 8364914 (Primeiro commit no branch pr-cicd)
=======
  title: "BIA 2024",
>>>>>>> 83649143cc91188e0f3a7534ff54971c594552c4
};

export default Header;
