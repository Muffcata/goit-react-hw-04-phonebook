import { React } from 'react';
import PropTypes from 'prop-types';
import style from '../Filter/Filter.module.css';

export const Filter = props => {
  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        Find contacts by name:
        <input
          className={style.input}
          onChange={props.filter}
          type="text"
        ></input>
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.func,
};
