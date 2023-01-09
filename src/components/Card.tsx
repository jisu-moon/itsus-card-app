import React from 'react';
import { useDispatch } from 'react-redux';
import { cardsActions } from '../store/cards-slice';
import * as S from './Card.styled';

const Card = ({ card, id }: any) => {
  const dispatch = useDispatch();

  const addInputHandler = () => {
    dispatch(cardsActions.addInput(id));
  };
  const removeInputHandler = (id: string, key: string) => {
    // dispatch(cardsActions.removeInput());
  };
  const keyBlurHandler =
    (index: string, key: string) =>
    (event: React.FocusEvent<HTMLInputElement>) => {
      dispatch(
        cardsActions.updateKey({
          value: event.currentTarget.value,
          index,
          key,
          prevValue: event.currentTarget.defaultValue,
        }),
      );
    };
  const valueBlurHandler =
    (index: string, key: string) =>
    (event: React.FocusEvent<HTMLTextAreaElement>) => {
      dispatch(
        cardsActions.updateValue({
          value: event.currentTarget.value,
          index,
          key,
        }),
      );
    };
  const keys = Object.keys(card);
  return (
    <S.CardWrapper>
      {keys.map((key, index) => {
        return (
          <S.Card key={`${id},${index}`}>
            <input
              type='text'
              defaultValue={key}
              onBlur={keyBlurHandler(id, key)}
            />
            <textarea
              defaultValue={card[key]}
              onBlur={valueBlurHandler(id, key)}
            />
            <button onClick={() => removeInputHandler(id, key)}>-</button>
          </S.Card>
        );
      })}
      <div className='btn-wrapper'>
        <button onClick={addInputHandler}>+</button>
      </div>
    </S.CardWrapper>
  );
};

export default Card;
