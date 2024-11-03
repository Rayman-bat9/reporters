
class Header {

    get btnCreate () {
        return $('p[class="szBTSFrvPTLGHM"]');
    }

    get btnCreateBoard () {
        return $('button[class="gJDsPins_eYkBM"]');
    }

    get myUserIconBtn () {
       return $('button[data-testid="header-member-menu-button"]');
    }

    get myUserName () {
        return $('div[class="Ej7WGzTnvdxL7I"]');
    }

    get myUserProfileBtn() {
        return $('a[data-testid="account-menu-profile"]');
    }

    async clickMyUserIconBtn () {
        await this.myUserIconBtn.waitForEnabled();
        await this.myUserIconBtn.click();
    }

    async clickMyUserProfileBtn () {
        await this.myUserProfileBtn.waitForEnabled();
        await this.myUserProfileBtn.click();
    }
    
}

export const header = new Header()