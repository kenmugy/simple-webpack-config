const names = ['name 1', 'name 2'];

export const alerter = (adder) => {
  return adder(...names);
};
