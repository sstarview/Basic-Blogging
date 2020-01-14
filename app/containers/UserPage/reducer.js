import { ADD_BLOG } from './constants';

const initialState = {
  posts: [],
};

function postReducer(state = initialState, action) {
  // console.log('reducer', state.posts);

  switch (action.type) {
    case ADD_BLOG:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      };
      break;
    default:
      return state;
  }
}

export default postReducer;
