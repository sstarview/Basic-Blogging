import { ADD_BLOG } from './constants';

export function addBlog(payload) {
  return {
    type: ADD_BLOG,
    payload,
  };
}
