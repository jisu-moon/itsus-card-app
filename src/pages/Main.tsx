import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsList from '../components/CardsList';
import Explanation from '../components/Explanation';
import { AppDispatch } from '../store';
import { fetchCardsData } from '../store/cards-actions';
import { IState } from '../store/cards-slice';

const Main = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector((state: IState) => state.cards);
  const status = useSelector((state: IState) => state.status);

  console.log(cards, status);

  useEffect(() => {
    dispatch(fetchCardsData());
  }, [dispatch]);

  if (status === 'pending') {
    return (
      <div className='cented'>
        <div className='spinner' />
      </div>
    );
  }
  return (
    <section>
      <div className='content-area'>
        <button>적용하기</button>
        {Object.keys(cards).map(title => (
          <CardsList key={title} title={title} cards={cards[title]} />
        ))}
      </div>
      <div className='explanation-area'>
        <Explanation />
      </div>
    </section>
  );
};

export default Main;
