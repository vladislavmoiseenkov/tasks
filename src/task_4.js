const users = [
  {
    id: 1,
    name: 'Mihail'
  },
  {
    id: 2,
    name: 'Marina'
  },
  {
    id: 3,
    name: 'Andrew'
  },
  {
    id: 4,
    name: 'Ilya'
  },
];

export function arrayToObject(usrs = users) {
  return usrs.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
  }, {});
}
