const DEPOSIT = "bank/DEPOSIT";
const WITHDRAW = "bank/WITHDRAW";

export const moneyDeposit = (payload) => {
  return { type: DEPOSIT, payload: payload };
};
export const moneyWithdraw = (payload) => {
  return { type: WITHDRAW, payload: payload };
};

const initialState = 0;
export const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case "bank/DEPOSIT":
      return state + action.payload;
    case "bank/WITHDRAW":
      return state - action.payload;
    default:
      return state;
  }
};
