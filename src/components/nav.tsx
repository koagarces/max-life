import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button>Home</button>
      <button>About</button>
      <button>Catalog</button>
      <button>Contact Us</button>
    </div>
  );
};
