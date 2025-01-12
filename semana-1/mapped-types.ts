type BooleanORString = {
  [key: string]: Boolean | string;
};

const valueBoolean: BooleanORString = {
  isBoolean: true,
  isBoolean2: false,
};

const valueString: BooleanORString = {
  isString: "henry",
  isString2: "franz",
};
