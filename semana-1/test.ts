function OmitValues<Type extends Object, Keys extends keyof Type>(
  value: Type,
  ...keys: Keys[]
): Omit<Type, Keys> {
  const valuesInArrayWithValidKeys = Object.entries(value).filter(
    ([key, value]) => {
      return !keys.includes(key as Keys);
    },
  );

  const valueValid = Object.fromEntries(valuesInArrayWithValidKeys);

  return valueValid as Omit<Type, Keys>;
}

function PickValues<Type extends object, Keys extends keyof Type>(
  value: Type,
  ...keys: Keys[]
): Pick<Type, Keys> {
  const valuesInArrayWithValidKeys = Object.entries(value).filter(
    ([key, value]) => {
      return keys.includes(key as Keys);
    },
  );

  const valueValid = Object.fromEntries(valuesInArrayWithValidKeys);

  return valueValid as Pick<Type, Keys>;
}

const user = {
  name: "heney",
  email: "henry@gmail.com",
  password: "123456",
};

const userWithoutPassword = OmitValues(user, "password");

const userWithPassword = PickValues(user, "password");

console.log(userWithoutPassword);
console.log(userWithPassword);
