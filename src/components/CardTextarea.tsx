import React from 'react';
import { useDispatch } from 'react-redux';
import { cardsActions } from '../store/cards-slice';

interface IProps {
  option: string;
  value: string;
  index: string;
}

const CardTextarea = (props: IProps) => {
  const dispatch = useDispatch();

  const valueChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    dispatch(
      cardsActions.updateValue({
        value: event.currentTarget.value,
        index: props.index,
        option: props.option,
      }),
    );
  };
  return (
    <>
      <h2>{props.option}</h2>
      <textarea value={props.value} onChange={valueChangeHandler} />
    </>
  );
};

export default CardTextarea;
