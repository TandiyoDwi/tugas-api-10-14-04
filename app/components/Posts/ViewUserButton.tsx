'use client';

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => {
    if (userId > 100) {
      alert('tidak tawu');
    } else {
      alert('tau');
    }
  };
  
  return (
    <>
      <button onClick={handleClick}>test</button>
    </>
  );
};

export default ViewUserButton;
