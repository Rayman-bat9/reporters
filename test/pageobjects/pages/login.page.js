import { loginForm } from '../components/loginForm';
import BasePage from './base/base.page';

class LoginPage extends BasePage{
    loginForm = loginForm
}

export default new LoginPage();
