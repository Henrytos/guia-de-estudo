export function PickValues<Type extends Object, Keys extends keyof Type>(
  value: Type,
  ...keys: Keys[]
): Pick<Type, Keys> {
  const valueInArray = Object.entries(value).filter(([key, value]) => {
    return keys.includes(key as Keys);
  });

  const valuePickValues = Object.fromEntries(valueInArray);

  return valuePickValues as Pick<Type, Keys>;
}

interface User {
  name: string;
  email: string;
  password: string;
}

const user: User = {
  name: "henry",
  email: "henry@gmail.com",
  password: "123456",
};

const userWithCredentials = PickValues(user, "email", "password");

console.log(userWithCredentials);
