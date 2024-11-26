import LoadMoreBtn from './LoadMoreBtn'; 

const ParentComponent = () => {
  const [isActive, setIsActive] = useState(true); 

  const handleMore = () => {
    setIsActive(false); 
  };

  return (
    <div>
      <LoadMoreBtn handleMore={handleMore} isActive={isActive} />
    </div>
  );
};

export default ParentComponent;
