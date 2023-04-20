import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contatcs/operations';
import { selectError, selectIsLoading } from 'redux/contatcs/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <section>
        <ContactForm />
        {isLoading && !error && <b>Loading...</b>}
        <Filter />
        <ContactList />
      </section>
    </div>
  );
}
