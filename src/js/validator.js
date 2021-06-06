export default class Validator {
    static validateUsername(name) {
        //  return /^[\d_-](\d{1,3}[a-zA-Z_-]+|[a-zA-Z_-]*|[a-zA-Z_-]+\d{1,3})*[\d_-]$/.test(name);
        return /^[a-zA-Z](\d{1,3}[a-zA-Z_-]+|[a-zA-Z_-]*|[a-zA-Z_-]+\d{1,3})*[a-zA-Z]$/.test(name);
    }

}