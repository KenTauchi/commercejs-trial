import Commerce from "@chec/commerce.js";
const { REACT_APP_CHEC_PUBLIC_KEY } = process.env;
console.log(REACT_APP_CHEC_PUBLIC_KEY);

export const commerce = new Commerce(REACT_APP_CHEC_PUBLIC_KEY);
