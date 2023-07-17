import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import testqa from '../../pageobjects/Test_PageObjects'

const testQa = new testqa()

Given('User sucesfully rents a car', () => {
  testQa.testCase1()
})

Given('User is restricted to rent a car for past dates', () => {
  testQa.testCase2()
})

Given('User is restricted to access the page via success URL', () => {
  testQa.testCase3()
})

Given('Name field value greater than 50 characters', () => {
  testQa.testCase4()
})