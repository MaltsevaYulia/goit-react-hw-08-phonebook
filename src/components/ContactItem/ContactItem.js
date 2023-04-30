import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ name, number, id }) => {

  const dispatch = useDispatch();
  
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete{' '}
      </button>
    </>
  );
};


ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};