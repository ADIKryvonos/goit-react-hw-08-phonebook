import { useAuth } from 'hooks/userAuth';
import { selectContact } from 'redux/contatcs/selectors';
import { useSelector } from 'react-redux';

export default function Home() {
  const { isLoggedIn, userName } = useAuth();
  const contacts = useSelector(selectContact);

  return isLoggedIn ? (
    <>
      <h1>
        <b>{userName}</b>, you have {contacts.length} saved contacts
      </h1>
    </>
  ) : (
    <h1>Hello, dear user! Hear, you can save your contacts!</h1>
  );
}
