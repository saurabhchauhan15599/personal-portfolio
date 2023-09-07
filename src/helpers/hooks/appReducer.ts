/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IState {
 
}

export type ActionType = 'setRegisterData' | 'setUserData' | 'setStepsData';

export interface IAction {
  type: ActionType;
  payload?: any;
}

export const appReducer = (state: IState, action: IAction) => {
  const { payload } = action;

  switch (action.type) {
    case 'setRegisterData': {
      return {
        ...state,
        registerData: {
          phone_number: payload.phone_number,
        },
      };
    }

    default: {
      return state;
    }
  }
};
