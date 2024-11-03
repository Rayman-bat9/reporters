
class LoginForm {

    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-submit');
    }

    async loginWithValidCredentials() {
        await this.inputUsername.setValue('a631718@gmail.com');
        await this.btnSubmit.click()

        await this.inputPassword.waitForEnabled();
        await this.inputPassword.setValue('TestPassword_432');
        await this.btnSubmit.click();
    }

    get invalidCredentialsMessage () {
        return $('section[data-testid="form-error"]');
    }

}

export const loginForm = new LoginForm()