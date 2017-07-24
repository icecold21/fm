export const FETCH_ROOT_SUCCESS = 'FETCH_ROOT_SUCCESS';
export const UPDATE_NAME = 'UPDATE_NAME';

/*
 * A function returning promise data.
 */
export const fetchRootResponseData = () => {
  return (dispatch) => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockRootData);
      }, 1200);
    })
      .then((response) => {
        dispatch(fetchRootSuccess(response));
      })
      .catch((error) => {
      });
  };
};


/*
 * Updated data builder.
 */
export const updateName = (type, updatedData) => {
  let newTypes = type === 'Folder' ? 'folders' : 'files';
  return {
    type: UPDATE_NAME,
    payload: {
      types : newTypes,
      updatedData
    }
  };
};

/*
 * Fetch root success object builder.
 */
const fetchRootSuccess = (payload) => {
  return {
    type: FETCH_ROOT_SUCCESS,
    payload
  };
};

/*
 * Mock root data.
 */
const mockRootData = {
  'user_id': '12345',
  'user_first_name': 'Sexy',
  'user_last_name': 'Lexy',
  'folders':
  [
    {
      'id': '10001',
      'files_count': 1,
      'name': 'Folder 1',
      'description': 'This folder is awesome!',
      'created_at': '2017-07-05 09:35:40',
      'updated_at': '2017-07-05 09:35:40'
    },
    {
      'id': '10002',
      'files_count': 1,
      'name': 'Folder 2',
      'description': 'This folder is not so awesome!',
      'created_at': '2017-07-05 09:45:40',
      'updated_at': '2017-07-06 09:45:40'
    }
  ],
  'documents':
  [
    {
      'id': '10001',
      'name': 'Document 1',
      'content': 'I am Document 1',
      'created_at': '2017-07-05 09:35:40',
      'updated_at': '2017-07-05 09:35:40',
      'tags': [{ 'id': '100001', 'name': 'tag 1' } ]
    }
  ]
};


/*
 * Mock Folder Data.
 */
const mockFolderData = {
  'id': '10001',
  'files_count': 1,
  'name': 'Folder 1',
  'description': 'This folder is awesome!',
  'created_at': '2017-07-05 09:35:40',
  'updated_at': '2017-07-05 09:35:40',
  'documents':
    [
      {
        'id': '10001',
        'name': 'Document 1',
        'content': 'I am Document 1',
        'created_at': '2017-07-05 09:35:40',
        'updated_at': '2017-07-05 09:35:40',
        'tags': [{ 'id': '100001', 'name': 'tag 1' } ]

      }
    ]
};

