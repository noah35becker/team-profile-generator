# Team Profile Generator
[![License: GNU AGPLv3](https://img.shields.io/badge/License-GNU%20AGPLv3-informational.svg)](https://choosealicense.com/licenses/agpl-3.0)

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)
    

## Repo
[https://github.com/noah35becker/team-profile-generator](https://github.com/noah35becker/team-profile-generator)


## Video walkthrough
[LINK_NAME](LINK_NAME)


## Description
Team Profile Generator is a command-line program that creates a webpage containing profile info of a company's team members. The user is prompted for details on team members (Manager, Engineers, and Interns). Upon completion, a cleanly-formatted webpage with functioning links is generated, and the user is automatically directed to the page in their browser.


<i><b>
## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contributing](#contributing)

- [Questions](#questions)
- [Sample HTML / terminal input](#sample-html--terminal-input)
</i></b>


## Installation
1. Navigate to this project's [GitHub repo](https://github.com/noah35becker/team-profile-generator)
2. Click the green "Code" button, then click "Download ZIP"
3. Unzip the downloaded folder
4. Rename the unzipped folder if you want, and move it wherever you'd like on your drive
5. Open the terminal, ```cd``` to the program folder you just downloaded, and then run the command ```npm install``` (*you must have Node.js [installed](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs) for this to work)
6. Once ```npm install``` finishes running, you're all set!


## Usage
If you haven't already, open the terminal and ```cd``` to the program folder you downloaded during [installation](#installation). Then run the command ```node index.js``` to begin. The program should be self-explanatory.

After running the program, a generated HTML file titled ```my-team.html``` will appear in the program folder's "dist" subfolder. <b>Beware that running the program to completion again in the future will <i>overwrite</i> this file.</b>


## Credits

### Creator
- Noah Becker ([GitHub](https://github.com/noah35becker))


### Third-party assets
- [Node.js](https://nodejs.org/)
- [Inquirer (Node.js package)](https://www.npmjs.com/package/inquirer)
- [Open (Node.js package)](https://www.npmjs.com/package/open)
- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)

### Tutorials
- ["Build your own Command Line with ANSI escape codes"](https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html)


## License

[![License: GNU AGPLv3](https://img.shields.io/badge/License-GNU%20AGPLv3-informational.svg)](https://choosealicense.com/licenses/agpl-3.0)

Learn more about this license [here](https://choosealicense.com/licenses/agpl-3.0).



## Features
- User input validation
- Data sorting:
    - First the Manager,
    - then Engineers (sorted by ascending ID),
    - then Interns (sorted by ascending ID)
- Colorized  terminal output
- Following completion of user input, automatic redirection to the newly created webpage


## Contributing
Feel free to fork this project's [repo](https://github.com/noah35becker/team-profile-generator), contribute code, and submit pull requests [here](https://github.com/noah35becker/team-profile-generator/pulls)!

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

Contributors to this project must follow all guidelines set forth by the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).


## Questions
My GitHub username is [noah35becker](https://github.com/noah35becker).

If you have any questions, I'd be glad to hear from you—contact me at [noahbeckercoding@gmail.com](mailto:noahbeckercoding@gmail.com).


## Sample HTML / terminal input
Check out a sample HTML file created by this program [here](./dist/SAMPLE_my-team.html). You can also view the exact terminal input used to create the HTML file [here](./dist/assets/images/terminal-input-for-SAMPLE_my-team-html.jpg).
