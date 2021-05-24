import PropTypes from 'prop-types';
import style from './ContactList.module.css'
import { connect } from "react-redux";
import Contact from '../Contact'
const ContactList = ({contacts,}) => {
    return (
            <ul className={style.list}>
            {contacts.map((contact)=>{
                return <li className={style.item} key={contact.id}>
                    <Contact name={contact.name} number={contact.number} id={contact.id} />
                    </li>
            })}
            </ul>
    );
};
const filterContacts= (contactsList, query) => {
 return contactsList.filter(({name}) => name.toLowerCase().includes(query.toLowerCase()))
}
const mapStateToProps = (state) => ({
    contacts: filterContacts(state.contacts.items, state.contacts.filter)
  });

ContactList.propTypes={
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,
}
export default connect(mapStateToProps)(ContactList);