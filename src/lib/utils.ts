import { imageUrlPattern } from "./constants";

export const isValidImgUrl = (url: string) => {
  return RegExp(imageUrlPattern).test(url);
};

export const strip = (str: string) => str.replace(/^\s+|\s+$/g, "");

export const randomHex = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
};
