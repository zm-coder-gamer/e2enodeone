# e2enodeone
* Plans \
Create a working pipeline \
Add more tests to pipeline


* Instructions to run the tests

  from the command line do the following
  clone this repo
  ```bash

  git clone https://github.com/zm-coder-gamer/e2enodeone.git
  
  ```
  * cd to the repo directory; e2enodeone
  ```bash
  cd e2enodeone
  ```

  * install packages
 ```bash
npm install
```
  * run the tests
```bash

npm node checkboxTestSelenium.js

```

# Web Testing Project README

## Project Overview

This Node.js project focuses on web testing using the Selenium WebDriver for automated browser interactions. The tests are designed to verify the functionality of checkboxes and dropdowns on the [the-internet.herokuapp.com](https://the-internet.herokuapp.com/) website.

### Files in the Project

1. **checkboxTestSelenium.js:** This file contains a test script that interacts with checkboxes on the webpage, checks and unchecks them, and asserts the expected states.

2. **dropdownTest.js:** This file contains a test script that interacts with a dropdown on the webpage, selects a specific option, and performs assertions.

## Getting Started

To run the tests locally, follow the instructions below:

### Prerequisites

Before running the tests, ensure you have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Open a terminal or command prompt.
2. Navigate to the project directory.
3. Run the following command to install the required dependencies:

   ```bash
   npm install selenium-webdriver chromedriver
   ```

### Running the Tests

#### Checkbox Test

1. Execute the following commands in the terminal:

   ```bash
   node checkboxTestSelenium.js
   ```

2. The browser will open, interact with the checkboxes, and close automatically. Review the terminal for any test results or errors.

#### Dropdown Test

1. Execute the following commands in the terminal:

   ```bash
   node dropdownTest.js
   ```

2. The browser will open, interact with the dropdown, and close automatically. Review the terminal for any test results or errors.

### Note

- Ensure that you have a stable internet connection, as the tests navigate to [the-internet.herokuapp.com](https://the-internet.herokuapp.com/) to perform the web interactions.


