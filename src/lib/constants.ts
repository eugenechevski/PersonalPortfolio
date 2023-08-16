export const userNamePattern = "^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$"; // digits, letters, and special characters
export const emailPattern = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";
export const passwordPattern =
  "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$"; // 8 characters, 1 lowercase, 1 uppercase, 1 number, 1 special character
export const imageUrlPattern = "^(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)$";
export const textColor = "#6B21A5";