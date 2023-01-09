import Card from './Card';
import * as S from './CardsList.styled';

interface IProps {
  title: string;
  cards?: {};
}

const CardsList = ({ title, cards }: IProps) => {
  const isArray = Array.isArray(cards);
  if (isArray) {
    return (
      <S.CardsWrapper>
        <h2>{title}</h2>
        {cards.map((card, index) => (
          <div key={`${title},${index}`}>
            <p>{index + 1}</p>
            <Card card={card} id={`${title},${index}`} />
          </div>
        ))}
        <button>+</button>
      </S.CardsWrapper>
    );
  } else {
    return <div></div>;
  }
};
export default CardsList;
