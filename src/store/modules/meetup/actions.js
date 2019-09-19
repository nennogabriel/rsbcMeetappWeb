export function meetupCreateRequest(data) {
  return {
    type: '@meetup/CREATE_REQUEST',
    payload: { ...data },
  };
}

export function meetupCreateSuccess(meetup) {
  return {
    type: '@meetup/CREATE_SUCCESS',
    payload: { ...meetup },
  };
}
