import {
  ORDER_CREATE_SUCCSESS,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCSESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCSESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_MYORDERS_REQUEST,
  ORDER_MYORDERS_SUCCSESS,
  ORDER_MYORDERS_FAIL,
  ORDER_MYORDERS_RESET,
  ORDER_USER_REQUEST,
  ORDER_USER_SUCCSESS,
  ORDER_USER_FAIL,
  ORDER_DELIVERED_REQUEST,
  ORDER_DELIVERED_SUCCSESS,
  ORDER_DELIVERED_FAIL,
  ORDER_DELIVERED_RESET,
} from '../constants/orderConstants';

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };

    case ORDER_CREATE_SUCCSESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };

    case ORDER_CREATE_FAIL:
      return {};

    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = {
    loading: true,
    orderItems: [],
    shippingAddress: {},
  },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DETAILS_SUCCSESS:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_PAY_SUCCSESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const myorderDetailsReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_MYORDERS_REQUEST:
      return {
        loading: true,
      };
    case ORDER_MYORDERS_SUCCSESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ORDER_MYORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_MYORDERS_RESET:
      return { orders: [] };
    default:
      return state;
  }
};

export const orderUserDetailsReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_USER_REQUEST:
      return {
        loading: true,
      };
    case ORDER_USER_SUCCSESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ORDER_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDeliveredDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DELIVERED_REQUEST:
      return {
        loading: true,
      };
    case ORDER_DELIVERED_SUCCSESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_DELIVERED_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_DELIVERED_RESET:
      return {
        return: {},
      };
    default:
      return state;
  }
};
