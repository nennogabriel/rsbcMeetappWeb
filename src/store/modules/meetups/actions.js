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

export function meetupsIndexRequest() {
  return {
    type: '@meetups/INDEX_REQUEST',
  };
}

export function meetupsIndexSuccess(meetups) {
  return {
    type: '@meetups/INDEX_SUCCESS',
    payload: meetups,
  };
}
