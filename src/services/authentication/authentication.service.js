import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../../App";

export const loginRequest = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const RegisterRequest = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const AuthState = (user) => {
  return onAuthStateChanged(auth, user);
};

export const Logout = () => {
  return signOut(auth);
};
