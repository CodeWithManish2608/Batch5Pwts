import{Page}from '@playwright/test'

export class dragNdrop{
    constructor(private page:Page){}

    async dragTodrop()
    {
        await this.page.getByTestId('nav-advanced-elements').click()
        const source = this.page.getByTestId('drag-source') 
        const target = this.page.getByLabel('Drop target area')

        await source.dragTo(target)
    }

    /*
    // Initialize WebDriver, navigate to page, and switch to iframe if necessary
        WebElement source = driver.findElement(By.id("draggable"));
        WebElement target = driver.findElement(By.id("droppable"));

        Actions actions = new Actions(driver);
        actions.dragAndDrop(source, target).perform();
    */

}