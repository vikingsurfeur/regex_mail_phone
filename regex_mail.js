// Regex for mail and phone numbers(France)
const regexMail = "[a-z0-9\-_]+[a-z0-9\.\-_]*@[a-z0-9\-_]{2,}\.[a-z\.\-_]+[a-z\-_]+";
const regexPhone = "^[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}$";

// Create a regex constant to verify email addresses
const REGEX_EMAIL = new RegExp(regexMail, "i");

// Create a regex constant to verify phone numbers(France)
const REGEX_PHONE = new RegExp(regexPhone, "i");