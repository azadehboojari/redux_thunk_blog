import _ from 'lodash';
import JsonPlaceholder from '../apis/JsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState)=>{
    await dispatch (fetchPosts());
    // ***********without chain method***********
    // const userIds =_.uniq(_.map(getState().posts, 'userId'))
    // console.log(userIds)
    // userIds.forEach(id=> dispatch(fetchUser(id)))
    // *****************with chain method**********
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id=> dispatch(fetchUser(id)))
        .value()
} 
export const fetchPosts = ()=> async dispatch => {
    const response = await JsonPlaceholder.get('/posts');
    dispatch  ({ type: 'FETCH_POSTS', payload: response.data})
};

export const fetchUser= id => async dispatch =>{
    const response= await JsonPlaceholder.get(`/users/${id}`)  
    //  or old version ('/users/' + id)
    dispatch ({type: 'FETCH_USER', payload: response.data})
}
// **************MEMOIZEE VERSION OF FETCHING***************************
// action creator
// export const fetchUser =(id) => dispatch =>{
//     _fetchUser(id, dispatch)
// };
// // memoize function to avoid many requests with same id number
// const _fetchUser = _.memoize(async (id, dispatch)=>{
//     const response= await JsonPlaceholder.get(`/users/${id}`)  
//     dispatch ({type: 'FETCH_USER', payload: response.data})

// })

 