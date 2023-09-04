import { imageUrlPattern } from "./constants";

export const isValidImgUrl = (url: string) => {
  // First check the pattern
  if (!RegExp(imageUrlPattern).test(url)) {
    return false;
  }

  // check if the image can be loaded
  const img = new Image();
  img.src = url;

  return img.complete;
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
