import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  const data = await readFile(PATH_DB, { encoding: 'utf-8' });
  return JSON.parse(data);
};
