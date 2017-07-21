// promise for asynchronous, setelah get panggil reducer
// big arrow function
// dispatch utk panggil function lain yg di declare disini
// getState untuk mengakses reducer

export const FETCH_ROOT_SUCCESS = 'FETCH_ROOT_SUCCESS';
export const UPDATE_NAME = 'UPDATE_NAME';

export const fetchRootResponseData = () => {
  return (dispatch, getState) => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockRootData);
      }, 2000)
    })
    .then((response) => {
      dispatch(fetchRootSuccess(response))
      console.log('iam here', response);

    })
    .catch((error) => {
      // reject();
    });
  }
}

export const updateName = (type, updatedData) => {
  let newTypes = type === "Folder" ? "folders" : "files"
  return {
    type: UPDATE_NAME,
    payload: {
      types : newTypes,
      updatedData
    }
  }
}

const fetchRootSuccess = (payload) => {
  return {
    type: FETCH_ROOT_SUCCESS,
    payload
  }
}

const mockRootData = {
  "user_id": "12345",
  "user_first_name": "Sexy",
  "user_last_name": "Lexy",
  "folders":
  [
    {
        "id": "10001",
        "files_count": 1,
        "name": "Folder 1",
        "description": "This folder is awesome!",
        "created_at": "2017-07-05 09:35:40",
        "updated_at": "2017-07-05 09:35:40"
    },
    {
        "id": "10002",
        "files_count": 1,
        "name": "Folder 2",
        "description": "This folder is not so awesome!",
        "created_at": "2017-07-05 09:45:40",
        "updated_at": "2017-07-06 09:45:40"
    }
  ],
  "documents":
  [
    {
        "id": "10001",
        "name": "Document 1",
        "content": "I am Document 1",
        "created_at": "2017-07-05 09:35:40",
        "updated_at": "2017-07-05 09:35:40",
        "tags": [{ "id": "100001", "name": "tag 1" } ]
    }
  ]
}

const mockFolderData = {
  "id": "10001",
  "files_count": 1,
  "name": "Folder 1",
  "description": "This folder is awesome!",
  "created_at": "2017-07-05 09:35:40",
  "updated_at": "2017-07-05 09:35:40",
  "documents":
    [
        {
            "id": "10001",
            "name": "Document 1",
            "content": "I am Document 1",
            "created_at": "2017-07-05 09:35:40",
            "updated_at": "2017-07-05 09:35:40",
            "tags": [{ "id": "100001", "name": "tag 1" } ]

        }
    ]
}

