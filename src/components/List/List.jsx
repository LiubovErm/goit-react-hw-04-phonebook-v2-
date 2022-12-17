import PropTypes from 'prop-types';
import { ContactList } from './List.styled';
import { ListItem } from '../ListItem/ListItem';

export const List = ({ contacts, onDeleteContact }) => {
  return (
    <ContactList>
        {contacts.map(({ id, name, number }) => (
          <ListItem 
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </ContactList>
  )
}

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};




