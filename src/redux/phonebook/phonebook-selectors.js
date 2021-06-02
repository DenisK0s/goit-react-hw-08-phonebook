import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.phonebook.filter;

const getContacts = state => state.phonebook.contacts;

const getLoading = state => state.phonebook.loading;

const getFiltredContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    const filterRegisterCorretion = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterRegisterCorretion),
    );
  },
);

const selectors = { getFilter, getContacts, getFiltredContacts, getLoading };

export default selectors;
