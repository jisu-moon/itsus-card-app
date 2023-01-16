import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { cardsActions } from '../store/cards-slice';
import { ExplanationWrapper } from './Explanation.styled';

const Explanation = () => {
  const dispatch = useDispatch<AppDispatch>();

  const saveBtnHandler = () => {
    dispatch(cardsActions.saveCards(null));
  };

  return (
    <ExplanationWrapper>
      <button onClick={saveBtnHandler}>저장</button>
      <p>fsdfs</p>
    </ExplanationWrapper>
  );
};

export default Explanation;
