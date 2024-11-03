import BasePage from './base/base.page';

class ProfilePage extends BasePage {
    get profileInput () {
        return $('textarea[id="bio"]');
    }

    get submitBtn() {
        return $('button[type="submit"]');
    }

    async editProfileInputText () {
        await this.profileInput.setValue('Hello World!');
        await this.submitBtn.click();
    }
}

export default new ProfilePage()