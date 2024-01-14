import * as actionCreators from '../actionCreators';
import { usersService } from '../../services';

function deleteUser(username: string) {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.deleteUser());
    try {
      await usersService.deleteUser(username);
      dispatch(actionCreators.deleteUserSuccess());
    } catch (err) {
      let message = '';
      console.log(err);
      dispatch(actionCreators.deleteUserFailure(message));
    }
  };
}

export { deleteUser };
