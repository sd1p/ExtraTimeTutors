import { Link } from "react-router-dom";

// const generateQuestion=()=>{
//   console.log("hey");
// }

const MenuButton = ({generate}) => {
  return (
    <div className="button-row">
      <Link to="/">
      <button className="menu-btn btn btn-primary" onClick={generate}>Generate Questions</button>
      </Link>  
      <Link to="/summarize">
        <button className="menu-btn btn btn-primary">Summarize Video</button>
      </Link>

      <Link to="/cntxt">
        <button className="menu-btn btn btn-primary">
          Generate Questions From Paragraph
        </button>
      </Link>
    </div>
  );
};

export default MenuButton;
