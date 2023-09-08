/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IState {
  toggleTheme: object;
}

export type ActionType = 'setTheme';

export interface IAction {
  type: ActionType;
  payload?: any;
}

export const appReducer = (state: IState, action: IAction) => {
  const { payload } = action;

  switch (action.type) {
    case 'setTheme': {
      return {
        ...state,
        toggleTheme: {
          theme: payload.theme
        }
      };
    }

    default: {
      return state;
    }
  }
};
