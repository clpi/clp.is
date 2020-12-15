const API_URL = 'http://localhost:3001/api';

const GET_PARAMS = {
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
};

const GET_REQ = async (endpoint) => {
  fetch(API_URL+endpoint, GET_PARAMS)
}

export async function createRecord(recordData) {
  const post = await fetch(API_URL+'/user/record', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(recordData)
  })
      .catch(err=>{
          console.log(err);
      });
  if (post.ok) {
      return post.json();
  } else {
    throw new Error(users);
  }
}

export async function getUserRecords(uid) {
  const records = await fetch(API_URL+'/record/'+uid, GET_PARAMS)
    .catch(err=>{
      console.log(err);
  });
  if (records.ok) {
    return records.json();
  } else {
    throw new Error(records);
  }
}

export async function getAllUsers() {
  const usrs = await fetch(API_URL+'/all', GET_PARAMS)
    .catch(err=>{
      console.log(err);
  });
  if (usrs.ok) {
    return usrs.json();
  } else {
    throw new Error(users);
  }
}

export async function getUserByUsername(username) {
    const usr = await fetch(API_URL+'/user/'+GET_PARAMS)
      .catch(err=>{
          console.log(err);
      });
  if (usr.ok) { 
    return usr.json();
  } else {
    throw new Error("No user with username " + username + " found.");
  }
}
export async function getUserById(id) {
    const usr = await fetch(API_URL+'/user/id/'+id, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
    })
        .catch(err=>{
            console.log(err);
        });
  if (usr.ok) { 
    return usr.json();
  } else {
    throw new Error("No user with id " + id + " found.");
  }
}

export async function refreshAuth() {
  const res = await fetch(API_URL+'/auth/refresh', {
    method: 'GET',
    credentials: 'include',
    headers: {
      cookie: document.cookie,
    }
  })
    .then(res => res.json())
    .catch(err => {
      console.error('Error:', err)
    });
  return res;
}

export async function loginUser(userInfo) {
  const loginPost = await fetch(API_URL+'/auth/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json',
        /*authorization: <authorization>*/
    },
    body: JSON.stringify(userInfo)
  });
  if (loginPost.ok) {
    return loginPost.json();
  } else {
    throw new Error(users);
  }
}

export async function signupUser(loginInfo) {
  const signupPost = await fetch(API_URL+'/auth/register', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
        /*authorization: <authorization>*/
    },
    body: JSON.stringify(loginInfo)
  });
  if (signupPost.ok) {
    return signupPost.json();
  } else {
    throw new Error(users);
  }
}
