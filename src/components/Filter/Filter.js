import { useDispatch } from 'react-redux';
import { filterAction } from 'store/filter/actions';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(filterAction(e.target.value));
  };
  return (
    <div className={css.filter}>
      <label htmlFor="filterContact">Find contacts by name</label>
      <input
        className={css.filterInput}
        name="filter"
        type="text"
        id="filterContact"
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;
