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
      <p>
        저장할때 카드섹션당 최소 1개 이상의 카드가 존재하여야함.
        <br />
        <strong>카드가 없는 상태에서 저장하면 오류발생</strong>
      </p>
      <p>title : 카드 제목</p>
      <p>summary : 카드 내용</p>
      <p>subSummary : 카드 서브 내용</p>
      <p>price : 카드 제품 가격</p>
    </ExplanationWrapper>
  );
};

export default Explanation;
