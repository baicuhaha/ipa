import {all,fork} from 'redux-saga/effects';
function* rootSaga() {
  /*The saga is waiting for a action called LOAD_DASHBOARD to be activated */
  yield all(
    [

    ]
  )
}

export default rootSaga