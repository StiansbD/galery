export class AuthService {

    /* User */
    private user = {
        "pseudo": 'test',
        "email": '',
        "password": '',
        "isAuth": false,
        "token": ''
    }

    /* minimum length for password */
    private lengthPassword = 6;

    /* error */
    private error: string;

    /* check if is a valid email */
    isEmail(email: string): boolean {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email))
            return true;
        this.error = "Must be valid email";
        return false;
    }

    /* check if is empty */
    isEmpty(value: string): boolean {
        if (value === "")
            return true;
        this.error = "Field require";
        return false;
    }

    /* check if email match */
    isEmailMatch(email1: string, email2: string): boolean {
        if (email1 === email2)
            return true;
        this.error = "Unknown email";
        return false;
    }

    /* check if password match */
    isPasswordMatch(password1: string, password2: string): boolean {
        if (password1 === password2)
            return true;
        this.error = "Invalid password";
        return false;
    }

    /* return the required length for password */
    getRequiredLengthPassword(): number {
        return this.lengthPassword;
    }

    /* check if the password enter have the minimum length */
    checkPasswordLength(password: string): boolean {
        if (password.length >= this.lengthPassword)
            return true;
        this.error = "Password must contain at least 6 characters";
        return false;
    }

    /* set email */
    setEmail(email: string): void {
        this.user.email = email;
    }

    getEmail(): string {
        return this.user.email
    }

    setPassword(password: string): void {
        this.user.password = password;
    }

    getPassword(): string {
        return this.user.password;
    }

    setPseudo(pseudo: string): void {
        this.user.pseudo = pseudo;
    }

    getPseudo(): string {
        return this.user.pseudo;
    }

    /* create an user */
    createUser(
        pseudo: string,
        email: string,
        password: string
    ): boolean {
        return this.logIn(email, password);
    }

    /* connnect the user */
    logIn(email: string, password: string): boolean {

        this.user.isAuth = true;
        this.user.email = email;
        this.user.password = password;
        
        return true;
    }

    /* disconnect the user */
    logOut(): void {
        this.user.isAuth = false;
    }

    /* return if the user is connected or not */
    isConnected(): boolean {
        return this.user.isAuth;
    }

    /* return the actual error */
    getError(): string {
        return this.error;
    }
}