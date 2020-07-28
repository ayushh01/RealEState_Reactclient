import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/BaseUrl';

export const addComment = (comment) => ({
    type:ActionTypes.ADD_COMMENT,
    payload:comment
})

export const postComment = (homeId , rating , comment) => (dispatch) => {

    const newComment = {
        home:homeId,
        rating:rating,
        comment:comment
    }
    console.log('Comment ', newComment);
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'comments' , {
        method: 'POST',
        body:JSON.stringify(newComment),
        headers:{
            'Content-Type':'application/json',
            'Authorization': bearer
        },
        credentials:'same-origin'
    })
    .then(response => {
        if(response.ok) {
            return response;
        }
        else
        {
            var error = new Error('Error ' + response.status  + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess =  new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => console.log(error))
}

export const postmail = (email) => (dispatch) => {

    const newbook = {
        email:email
    }
    console.log('Book ', newbook);
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'sendmail' , {
        method: 'POST',
        body:JSON.stringify(newbook),
        headers:{
            'Content-Type':'application/json',
            'Authorization': bearer
        },
        credentials:'same-origin'
    })
    .then(response => {
        if(response.ok) {
            return response;
        }
        else
        {
            var error = new Error('Error ' + response.status  + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess =  new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}

export const fetchHomes = () => (dispatch) => {
    dispatch(homesLoading(true));

    return fetch(baseUrl + 'home')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else
            {
                var error = new Error('Error ' + response.status  + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess =  new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(homes => dispatch(addHomes(homes)))
        .catch(error => dispatch(homesfailed(error.message)))
}

export const homesLoading = () =>({
    type: ActionTypes.HOMES_LOADING
});

export const homesfailed = (errmess) => ({
    type: ActionTypes.HOMES_FAILED,
    payload:errmess
});

export const addHomes = (homes) => ({
    type:ActionTypes.ADD_HOMES,
    payload:homes
});


export const fetchHotels = () => (dispatch) => {
    dispatch(hotelsLoading(true));

    return fetch(baseUrl + 'hotel')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else
            {
                var error = new Error('Error ' + response.status  + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess =  new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(hotels => dispatch(addHotels(hotels)))
        .catch(error => dispatch(hotelsfailed(error.message)))
}

export const hotelsLoading = () =>({
    type: ActionTypes.HOTELS_LOADING
});

export const hotelsfailed = (errmess) => ({
    type: ActionTypes.HOTELS_FAILED,
    payload:errmess
});

export const addHotels = (hotels) => ({
    type:ActionTypes.ADD_HOTELS,
    payload:hotels
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response => {
        if(response.ok) {
            return response;
        }
        else
        {
            var error = new Error('Error ' + response.status  + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess =  new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsfailed(error.message)))
}

export const commentsfailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload:errmess
});

export const addComments = (comments) => ({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments
});

export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}

export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'user/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            dispatch(receiveLogin(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(receiveLogout())
}

export const SignupUser = (firstname , lastname , username , password) => (dispatch) => {

    const newUser = {
        firstname:firstname,
        lastname:lastname,
        username:username,
        password:password
    }
    console.log('User ', newUser);

    return fetch(baseUrl + 'user/signup' , {
        method: 'POST',
        body:JSON.stringify(newUser),
        headers:{
            'Content-Type':'application/json',
        },
        credentials:'same-origin'
    })
    .then(response => {
        if(response.ok) {
            return response;
        }
        else
        {
            var error = new Error('Error ' + response.status  + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess =  new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
}