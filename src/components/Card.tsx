import { ICards } from '../store/cards-slice';
import * as S from './Card.styled';
import CardTextarea from './CardTextarea';

interface IProps {
  index: string;
  card: ICards | any;
}

const cardOptions = ['title', 'summary', 'subSummary', 'price'];

const Card = ({ card, index }: IProps) => {
  return (
    <S.CardWrapper>
      {cardOptions.map((option: string) => {
        return (
          <S.Card key={`${index},${option}`}>
            <CardTextarea value={card[option]} option={option} index={index} />
          </S.Card>
        );
      })}
    </S.CardWrapper>
  );
};

export default Card;
