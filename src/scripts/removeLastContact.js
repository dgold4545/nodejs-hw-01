import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const dataBase = await readContacts();
  dataBase.pop();
  await writeContacts(dataBase);
};

removeLastContact();
