import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { requestFailure } from '~/store/modules/ux/actions';
import { meetupsCreateSuccess } from './actions';

export function* meetupCreate({ payload }) {
  try {
    const response = yield call(api.post, '/meetups', payload);
    const {
      past,
      id,
      file_id,
      title,
      description,
      date,
      location,
    } = response.data;

    yield put(
      meetupsCreateSuccess({
        past,
        id,
        file_id,
        title,
        description,
        date,
        location,
      })
    );
    toast.success('meetup criado com sucesso');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha ao cadastrar o meetup, verifique os dados');
    yield put(requestFailure());
  }
}

export default all([takeLatest('@meetups/ADD_REQUEST', meetupCreate)]);
