import { http } from "./services";

export function AddOneComment(data) {
  const token = "SECURE TOKEN";
  const Headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return http.post("/comments", data, Headers);
}
