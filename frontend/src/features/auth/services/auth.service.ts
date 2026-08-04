import { users } from "../data/users";
import type { User } from "../types";


const STORAGE_KEY =
  "cloud-academy-current-user";


export function login(
  email: string
): User | null {

  const user =
    users.find(
      (item) =>
        item.email === email
    );


  if (!user) {
    return null;
  }


  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(user)
  );


  return user;
}



export function logout() {

  localStorage.removeItem(
    STORAGE_KEY
  );

}



export function getCurrentUser(): User | null {

  const data =
    localStorage.getItem(
      STORAGE_KEY
    );


  if (!data) {
    return null;
  }


  return JSON.parse(data);

}