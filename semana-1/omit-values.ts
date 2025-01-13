export function OmitValues<Type extends Object, Keys extends keyof Type>(
  value: Type,
  ...keys: Keys[]
): Omit<Type, Keys> {
  const valueInArray = Object.entries(value).filter(([key, value]) => {
    return !keys.includes(key as Keys);
  });

  const valueOmitKeys = Object.fromEntries(valueInArray);

  return valueOmitKeys as Omit<Type, Keys>;
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

const userWithoutPassword = OmitValues(user, "password");

console.log(userWithoutPassword);
