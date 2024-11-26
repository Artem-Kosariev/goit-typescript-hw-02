import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  handleMore: () => void;
  isActive: boolean;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleMore, isActive }) => {
  const handleClick = () => {
    if (!isActive) {
      handleMore();
    }
  };

  return (
    <button 
      onClick={handleClick} 
      type='button' 
      disabled={isActive} 
      className={css.moreBtn}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
