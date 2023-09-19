import { http } from "./services";

export function deleteComment(id) {
  return http.delete(`/comments/${id}`);
}
