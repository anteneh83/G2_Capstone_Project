import { useNavigate } from "react-router-dom";
function Navigator() {
  const navigate = useNavigate();
  return (
    <span style={{display:"flex"}} onClick={() => navigate("/")}>
      Home <img style={{margin:"0 6px"}} src="Vector2.png" />
    </span>
  );
}
export default Navigator;
