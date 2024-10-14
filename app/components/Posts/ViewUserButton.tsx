"use client";

interface ViewUserButton {
    userId:number
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => {
    if (userId > 100) {
      alert('Info selanjutnya');
    } else {
      alert('Info selanjutnya');
    }
  };
  
  return (
    <>
      <button onClick={handleClick}>Info selanjutnya</button>
    </>
  );
};

export default ViewUserButton;