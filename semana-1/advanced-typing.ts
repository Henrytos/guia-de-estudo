// keyof

interface Address {
  road: string;
  number: string;
  city: string;
  state: string;
}

export interface UserModel {
  name: string;
  age: number;
  email: string;
  password: string;
  address: Address;
  2: "2";
  true: "true";
  add: () => {};
}

const userKeyOf: keyof UserModel = "add";

console.log({ userKeyOf });

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

const a: A = 1;
console.log({ a });

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

const m: M = 1;
console.log({ m });

// return type

type ReturnBoolean = () => boolean;

const valueBoolean: ReturnType<ReturnBoolean> = true;

console.log({ valueBoolean });

// type of

const funcReturnTrue: ReturnBoolean = () => {
  return true;
};

const valueTrue: ReturnType<typeof funcReturnTrue> = true;
console.log({ valueTrue });

const user = {
  name: "henry",
  email: "henry@gmail.com",
  age: 19,
};

const user2: typeof user = {
  name: "henry",
  email: "henry@gmail.com",
  age: 20,
};

console.log({ user });
console.log({ user2 });

function logValue<T>(value: T): T {
  console.log(value);

  return value;
}

const typeString: ReturnType<typeof logValue> = "123";

// typeof = extrai a tipagem
// keyof extrai os valores da chave do objeto
// ReturnType extrai tipagem de retorno de uma função de interface

function f() {
  return { x: 10, y: 3 };
}

const functionType: typeof f = () => {
  return { x: 1, y: 1 };
};

type P = ReturnType<typeof f>;
