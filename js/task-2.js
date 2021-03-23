/*Задание 2
Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два
 параметра allUsers и userName и возвращала промис.
*/

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserStateOld = (allUsers, userName, callback) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  callback(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
*/
 
//toggleUserStateOld(users, 'Mango', logger);
//toggleUserStateOld(users, 'Lux', logger);

const toggleUserStateNew = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
    return new Promise((resolve) => resolve(updatedUsers));
};

/*
 * Должно работать так
 */
toggleUserStateNew(users, 'Mango').then(logger);
toggleUserStateNew(users, 'Lux').then(logger);




