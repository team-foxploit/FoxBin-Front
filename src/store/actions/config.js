/* -- Header Configuration --
* Adds the foxToken to the request header
*/
export const headerConfig = (getState) => {

    // Get the token from the state
    const token = getState().auth.foxToken;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

     // If token exist, add it to the header,
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
}