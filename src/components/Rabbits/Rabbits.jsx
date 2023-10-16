import { useSelector, useDispatch } from 'react-redux';
import { RabbitsItem } from './Rabbits_item';
import { Loader } from '../Loader/Loader';
import { useEffect } from 'react';
import { fetchRabbits } from '../../redux/rabbits/rabbitsOperation';
import RabbitsCss from './Rabbits.module.css';
import {
  getRabbits,
  getFilter,
  // getError,
  getIsLoading,
} from '../../redux/rabbits/rabbitsSelector';

export const RabbitList = () => {
  const dispatch = useDispatch();

  // Отримуємо частини стану
  const { rabbits } = useSelector(getRabbits);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchRabbits());
  }, [dispatch]);

  const options = rabbits;
  const {
    _id,
    gender,
    name,
    breed,
    photoRabbit,
    dateBirthDay,
    cage,
    Mother,
    Father,
    favorite,
  } = rabbits;
  //   .filter(rabbits =>
  //   rabbits.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : options.length !== 0 ? (
        <ul className={RabbitsCss.contact}>
          {options.map(
            ({
              _id,
              gender,
              name,
              breed,
              photoRabbit,
              dateBirthDay,
              cage,
              Mother,
              Father,
              favorite,
            }) => (
              <RabbitsItem
                name={name}
                gender={gender}
                breed={breed}
                dateBirthDay={dateBirthDay}
                photoRabbit={photoRabbit}
                Mother={Mother}
                Father={Father}
                cage={cage}
                favorite={favorite}
                id={_id}
                key={_id}
              />
            )
          )}
        </ul>
      ) : filter === '' ? (
        'Ще не додано жодного кролика. Будь ласка додайте кролика!!!'
      ) : (
        'Збігів не знайдено'
      )}
    </div>
  );
};
