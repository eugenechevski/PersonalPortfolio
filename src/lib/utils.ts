import { imageUrlPattern } from "./constants"

export const isValidImgUrl = (url: string) => {
    // First check the pattern
    if (!RegExp(imageUrlPattern).test(url)) {
        return false;
    }

    // check if the image can be loaded
    const img = new Image();
    img.src = url;

    return img.complete;
}