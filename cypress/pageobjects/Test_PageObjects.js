/// <reference types="Cypress" />

class testqa {

  //first test case
  get country() {
    return cy.xpath("//select[@id='country']")
  }
  get city() {
    return cy.xpath("//select[@id='city']")
  }
  get pickUp() {
    return cy.xpath("//input[@id='pickup']")
  }
  get dropOff() {
    return cy.xpath("//input[@id='dropoff']")
  }
  get search() {
    return cy.xpath("//button[@type='submit']")
  }
  get table() {
    return cy.xpath("//tbody/tr[1]/td[2]")
  }
  get rentFirstButton() {
    return cy.xpath("(//td[contains(text(),'Ursus C360')]/following::a[contains(text(),'Rent')])[1]")
  }
  get ursusTextVerify() {
    return cy.xpath("//div[contains(text(),'Ursus C360')]")
  }
  get pickUpDateVerify() {
    return cy.xpath("//h6[contains(text(),' Pickup date: 2023-07-25')]")
  }
  get dropOffDateVerify() {
    return cy.xpath("//h6[contains(text(),' Dropoff date: 2023-07-30')]")
  }
  get rentDetailsPage() {
    return cy.xpath("//a[contains(text(),'Rent!')]")
  }
  //page three
  get rentbtn2() {
    return cy.xpath("//a[@class='btn btn-primary']")
  }
  //final page
  get nameText() {
    return cy.xpath("//input[@id='name']")
  }
  get lastNameText() {
    return cy.xpath("//input[@id='last_name']")
  }
  get cardNumtext() {
    return cy.xpath("//input[@id='card_number']")
  }
  get emailText() {
    return cy.xpath("//input[@id='email']")
  }
  get rentbtn3() {
    return cy.xpath("//button[@type='submit']")
  }
  get successClass() {
    return cy.xpath("//h2[contains(@class,'alert alert-success')]")
  }
  get nameErrorMsg() {
    return cy.xpath("//h5[contains(text(),'Name value is too long')]")
  }

  testCase1() {
    cy.visit('/')
    this.country.should('be.visible').select('France')
    this.city.should('be.visible').select('Paris')
    this.pickUp.should('be.visible').type("2023-07-25", { force: true })
    this.dropOff.should('be.visible').type("2023-07-30", { force: true })
    this.search.should('be.visible').click()
    this.table.should('be.visible').should('have.text', 'Ursus C360')
    this.rentFirstButton.should('be.visible').click()
    this.ursusTextVerify.should('be.visible')
    this.pickUpDateVerify.should('be.visible')
    this.dropOffDateVerify.should('be.visible')
    this.rentDetailsPage.should('be.visible').click()
    this.nameText.should('be.visible').type("test Name", { force: true })
    this.lastNameText.should('be.visible').type("last Name", { force: true })
    this.cardNumtext.should('be.visible').type("2023", { force: true })
    this.emailText.should('be.visible').type("test@yopmail.com", { force: true })
    this.rentbtn3.should('be.visible').click()
    this.successClass.should('be.visible')
  }

  testCase2() {
    cy.visit('/')
    this.country.should('be.visible').select('France')
    this.city.should('be.visible').select('Paris')
    this.pickUp.should('be.visible').type("2022-07-25", { force: true })
    this.dropOff.should('be.visible').type("2022-07-30", { force: true })
    this.search.should('be.visible').click()
    this.table.should('be.visible')
  }

  testCase3() {
    cy.visit('/')
    this.successClass.should('be.visible')
  }

  testCase4() {
    cy.visit('/')
    this.country.should('be.visible').select('France')
    this.city.should('be.visible').select('Paris')
    this.pickUp.should('be.visible').type("2023-07-25", { force: true })
    this.dropOff.should('be.visible').type("2023-07-30", { force: true })
    this.search.should('be.visible').click()
    this.table.should('be.visible').should('have.text', 'Ursus C360')
    this.rentFirstButton.should('be.visible').click()
    this.ursusTextVerify.should('be.visible')
    this.pickUpDateVerify.should('be.visible')
    this.dropOffDateVerify.should('be.visible')
    this.rentDetailsPage.should('be.visible').click()
    this.nameText.should('be.visible').type("testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest", { force: true })
    this.lastNameText.should('be.visible').type("last Name", { force: true })
    this.cardNumtext.should('be.visible').type("2023", { force: true })
    this.emailText.should('be.visible').type("test@yopmail.com", { force: true })
    this.rentbtn3.should('be.visible').click()
    this.nameErrorMsg.should('be.visible')
  }

}

export default testqa