import {
  FETCH_USER_FAILED,
  FETCH_USER_STARTED,
  FETCH_USER_SUCCESS
} from "./actionTypes";

const fetchUsersStarted = () => ({
  type: FETCH_USER_STARTED
});
const fetchUsersSuccess = (users) => ({
  type: FETCH_USER_SUCCESS,
  users
});
const fetchUsersFailed = (err) => ({
  type: FETCH_USER_FAILED,
  err
});

export const fetchUsers = () => ({ dispatch }) => {
  dispatch(fetchUsersStarted());

  fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(result => {
      dispatch(fetchUsersSuccess(result.data))
    })
    .catch(err => {
      dispatch(fetchUsersFailed(err))
    });
}
