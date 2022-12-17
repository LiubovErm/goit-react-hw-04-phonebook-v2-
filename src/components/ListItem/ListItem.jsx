import PropTypes from 'prop-types';
import { ContactItem, Button, TextName } from './ListItem.styled';
import { ImCross } from "react-icons/im";

export const ListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactItem>
       <TextName>{name}: </TextName> {number}
      <Button type="button" onClick={() => onDeleteContact(id)}>
        <ImCross/>
      </Button>
    </ContactItem>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

