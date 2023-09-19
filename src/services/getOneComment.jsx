import { http } from "./services";

export function getOneComment(id) {
  return http.get(`/comments/${id}`);
}
