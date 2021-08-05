import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./phonebook-actions";

const fetchContacts = () => (dispatch) => {
    dispatch(fetchContactsRequest());
  
    axios
      .get("/contacts")
      .then(({ data }) => dispatch(fetchContactsSuccess(data)))
      .catch((error) => dispatch(fetchContactsError(error.message)));
  };
  
  const addContact = (contact) => (dispatch) => {

    dispatch(addContactRequest());

    axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error.message)));
  };
  
  const deleteContact = (contactId) => (dispatch) => {
    dispatch(deleteContactRequest());
  
    axios
      .delete(`/contacts/${contactId}`)
      .then(() => dispatch(deleteContactSuccess(contactId)))
      .catch((error) => dispatch(deleteContactError(error.message)));
  };


const phonebookOperations = { fetchContacts, addContact, deleteContact };

export default phonebookOperations;