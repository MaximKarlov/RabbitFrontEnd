import { useDispatch } from 'react-redux';
import { filtered } from '../../redux/rabbits/filter';
import filterCss from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    let filterContacts = e.target.value;
    dispatch(filtered(filterContacts));
  };

  return (
    <div className={filterCss.filter}>
      <label className={filterCss.label}>
        Find contacts by name
        <input
          type="text"
          onChange={handleChange}
          className={filterCss.input}
        />
      </label>
    </div>
  );
};
