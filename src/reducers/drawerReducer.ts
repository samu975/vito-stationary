import { TYPES } from "@/actions/drawerActions";

export const drawerInitialState = {
  open: false,
};

export function drawerReducer(state: any, action: any): any {
  switch (action.type) {
    case TYPES.OPEN_DRAWER: {
      state.open = true;
    }
    case TYPES.CLOSE_DRAWER: {
      state.open = false;
    }
    default:
      return state;
  }
}
