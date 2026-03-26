function MyProfileImage() {
  const imagePath = "https://i.imgur.com/MK3eW3As.jpg";
  return (
    <div>
      <h1>My Name is John Deo</h1>
      <img src={imagePath} alt="dummy image" className="photo"></img>
      <ul>
        <li>Task one</li>
        <li>Task Two </li>
        <li>Task Three</li>
      </ul>

      <button onClick={() => alert("Button is clicked!")}>
        Dummy Button is clicked
      </button>
    </div>
  );
}
export default MyProfileImage;
