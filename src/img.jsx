import intersection from "./assets/interesticon.png"; // ✅ import the file

function Img() {
  const i2 = "./src/assets/react.svg";
  return (
    <>

      <h2>Image from src folder</h2>
      <img src={intersection} alt="intersection" height="100" width="150" />
      <br />
      <img src={i2} alt="react" height ="25" width="50" />
    </>
  );
}

export default Img;
