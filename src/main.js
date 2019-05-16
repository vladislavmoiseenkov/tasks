
const container = document.getElementById('container');

let array = [];

container.addEventListener('click', (e) => {
  switch (+e.target.dataset.id) {
    case 1:
      import('./task_1')
        .then(module => module.default)
        .then(years => console.log(years));
      break;
    case 2:
      import('./task_2')
        .then(module => {
          array = module.getArray();
          console.log(array);
        });
      break;
    case 3:
      console.log('arr', array);
      import('./task_3')
        .then(module => console.log(module.getMax(array)));
      break;
    case 4:
      import('./task_4')
        .then(module => console.log(module.arrayToObject()));
      break;
    case 5:
      import('./task_5')
        .then(module => console.log(module.isEmpty([1, 3])));
      break;
    case 6:
      import('./task_6')
        .then(module => console.log(module.factorial(6)));
      break;
    default:
      console.log('Select task!');
      break;
  }
});
