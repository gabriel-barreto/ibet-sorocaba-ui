import React, { useContext } from 'react';
import { useContactInfos } from '../hooks';

const INITIAL_STATE = { email: '', phone: '', social: [] };
const ContactsContext = React.createContext(INITIAL_STATE);
ContactsContext.displayName = 'ContactsContext';

export function ContactsProvider({ children }) {
  const [state, loading, error] = useContactInfos();
  return (
    <ContactsContext.Provider value={{ state, loading, error }}>
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const { state: contacts, loading, error } = useContext(ContactsContext);
  return { contacts, loading, error };
}
