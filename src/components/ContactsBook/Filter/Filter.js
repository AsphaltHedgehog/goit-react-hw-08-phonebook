import { useDispatch, useSelector } from "react-redux";

import { setContactsFilter } from 'redux/filterSlice';
import { selectStatusFilter } from "redux/selectors";

import { StyledInput } from './StyledFilter.js'

function Filter() {
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch()
  return (
    <StyledInput
      type="text"
      name='filter'
      value={filter}
      onChange={(event) => dispatch(setContactsFilter(event.target.value))}
      placeholder="find contacts by name"
    ></StyledInput>
  );
};

export default Filter;