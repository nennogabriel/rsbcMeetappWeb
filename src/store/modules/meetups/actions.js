export function meetupsCreateRequest(data) {
  return {
    type: '@meetups/ADD_REQUEST',
    payload: { ...data },
  };
}

export function meetupsCreateSuccess(meetup) {
  return {
    type: '@meetups/ADD_SUCCESS',
    payload: { ...meetup },
  };
}
