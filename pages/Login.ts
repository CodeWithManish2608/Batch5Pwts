import{Page}from '@playwright/test'

export class login{
    constructor(private page: Page){
        
    }

    async doLogin()
    {

        interface LoginData {
            url: string;
            username: string;
            password:string;

        }
        const loginUser : LoginData ={
            url : "https://automationpracticehubapp.netlify.app/",
            username: 'Admin',
            password: 'Hello@123'
        }


        await this.page.goto(loginUser.url);
        await this.page.getByTestId('login-username').fill(loginUser.username)
        await this.page.locator("//input[@id='login-password']").fill(loginUser.password)
        await this.page.getByText('Sign In', {exact: true}).click()




        /*
        await this.page.goto('https://automationpracticehubapp.netlify.app/');
        await this.page.getByTestId('login-username').fill('Admin')
        await this.page.locator("//input[@id='login-password']").fill('Hello@123')
        await this.page.getByText('Sign In', {exact: true}).click()
        */
    }
}