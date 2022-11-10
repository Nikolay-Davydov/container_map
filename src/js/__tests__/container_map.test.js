import ErrorRepository from '../container_map';

test('get error', () => {
  const error = new ErrorRepository();
  expect(error.translate(400)).toBe('Ошибка неверного запроса');
});

test('Unknown error', () => {
  const error = new ErrorRepository();
  expect(error.translate(77)).toBe('Unknown error');
});
