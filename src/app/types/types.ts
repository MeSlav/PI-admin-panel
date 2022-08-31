type Employee = {
  address: string,
  availability: string,
  busy_days: any[],
  email: string,
  id: number,
  name: string,
  phone_number: string,
  price_per_hour: any,
};

type Token = {
  access: string,
  refresh: string,
};

export {
  Token,
  Employee,
};
