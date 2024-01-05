/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
const user1 = {
  name: 'John',
  surname: 'Stolen',
  email: 'user@mail.com',
  password: '123567j',
};

function createOrUpdateUser(initialValues: Partial<User>) {
  return {
    ...user1,
    ...initialValues,
  };
  // Оновлення користувача
}

createOrUpdateUser({ email: 'john35fh@gmail.com', password: 'sld3839d' });

export {};
