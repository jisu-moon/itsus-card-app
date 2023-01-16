import { useDispatch } from 'react-redux';
import { cardsActions } from '../store/cards-slice';
import Card from './Card';
import * as S from './CardsList.styled';

interface IProps {
  title: string;
  cards?: {};
}

const CardsList = ({ title, cards }: IProps) => {
  const dispatch = useDispatch();
  const isArray = Array.isArray(cards);

  const removeCardHandler = (index: string) => {
    dispatch(cardsActions.removeCard(index));
  };

  if (isArray) {
    return (
      <S.CardsWrapper className='cards-wrapper'>
        <h2>{title}</h2>
        {cards.map((card, index) => {
          return (
            <div key={`${title},${index}`}>
              <p>{index + 1}</p>
              <Card card={card} index={`${title},${index}`} />
              <button
                className='opacity-btn'
                onClick={() => removeCardHandler(`${title},${index}`)}
              >
                -
              </button>
            </div>
          );
        })}
        <button className='opacity-btn'>+</button>
      </S.CardsWrapper>
    );
  } else {
    return <div></div>;
  }
};
export default CardsList;
