/*Задание 3
Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, 
а принимала всего один параметр transaction и возвращала промис.
*/

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransactionOld = (transaction, onSuccess, onError) => {
  const delay = randomIntegerFromInterval(200, 500);

  setTimeout(() => {
    const canProcess = Math.random() > 0.3;

    if (canProcess) {
      onSuccess(transaction.id, delay);
    } else {
      onError(transaction.id);
    }
  }, delay);
};

/*
 * Работает так
 */
//makeTransactionOld({ id: 70, amount: 150 }, logSuccess, logError);
//makeTransactionOld({ id: 71, amount: 230 }, logSuccess, logError);
//makeTransactionOld({ id: 72, amount: 75 }, logSuccess, logError);
//makeTransactionOld({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */

const makeTransactionNew = (transaction) => {
    const delay = randomIntegerFromInterval(200, 500);
    
    return new Promise((resolve, reject) => setTimeout(() => {
        const canProcess = Math.random() > 0.3;
        if (canProcess) {
            resolve({ id: transaction.id, time: delay });
        } else {
            reject({ id: transaction.id });
        }
    }, delay));
};

const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = ({ id }) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransactionNew({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransactionNew({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransactionNew({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransactionNew({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);