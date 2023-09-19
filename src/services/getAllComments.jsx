import { http } from "./services";

export function getAllComments(params) {
  return http.get("/comments");
}
