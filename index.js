#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

console.log("\n\nHello, this is Frover Labs NPX package!\n");

const args = process.argv.slice(2);

const currentDir = process.cwd();
console.log("Current directory: ", currentDir);

if (args.length === 0) {
	console.error("Please provide a component name");
	process.exit(1);
}

const componentNames = args;
console.log("Component names: ", componentNames);

const componentsDir = path.join(currentDir, "src", 'components');
console.log(`Components directory: "${componentsDir}"`);

(
	async () => {
		try {
			// Check if the components folder exists, create if it does not
			try {
				await fs.access(componentsDir);
			} catch {
				console.log("Components folder does not exist");
				await fs.mkdir(componentsDir, { recursive: true });
				console.log("Components folder created");
			}

			// Function to handle component creation
			const createComponent = async (componentName, templatePath, destinationPath) => {
				const componentFile = path.join(componentsDir, `${componentName}.jsx`);

				// Check if the component already exists
				try {
					await fs.access(componentFile);
					console.error(`Component ${componentName} already exists`);
					return; // Skip if component already exists
				} catch {
					// If the file does not exist, proceed to create it
					const templateContent = await fs.readFile(templatePath, 'utf-8');
					console.log(`Template content for ${componentName}: `, templateContent);

					// Create the component file
					await fs.writeFile(componentFile, templateContent);
					console.log(`Component ${componentName} file created`);

					// Special case: If Navbar is added, also add NavbarIcon
					if (componentName === 'Navbar') {
						const navbarTemplate = path.join(__dirname, 'templates', 'Navbar.jsx');
						await createComponent('Navbar', navbarTemplate, componentsDir);

						const navbarIconTemplate = path.join(__dirname, 'templates', 'NavbarIcon.jsx');
						await createComponent('NavbarIcon', navbarIconTemplate, componentsDir);
					}

                    else if(componentName === 'DynamicForm') {
                        const dynamicFormTemplate = path.join(__dirname, 'templates', 'Dynamic.jsx');
						await createComponent('DynamicForm', dynamicFormTemplate, componentsDir);

						const customPDFTemplate = path.join(__dirname, 'templates', 'CustomPDF.jsx');
						await createComponent('CustomPDF', customPDFTemplate, componentsDir);
                    }

                    else if(componentName === 'AsyncButton') {
                        const useAsyncButtonTemplate = path.join(__dirname, 'templates', 'hooks', 'useAsyncButton.js');
						const uiComponentsDir = path.join(componentsDir, 'ui');
                        await createComponent('useAsyncButton', useAsyncButtonTemplate, path.join(uiComponentsDir, 'useAsyncButton.jsx'));
    

                        const asyncButtonTemplate = path.join(__dirname, 'templates', 'AsyncButton.jsx');
                        await createComponent('AsyncButton', asyncButtonTemplate, componentsDir);
                    }
				}
			};

			// Process each component name provided
			for (const componentName of componentNames) {
				if (componentName === 'AsyncButton') {
					// Create useAsyncButton.js in components/ui folder
					const uiComponentsDir = path.join(componentsDir, 'ui');
					await fs.mkdir(uiComponentsDir, { recursive: true });

					const useAsyncButtonTemplate = path.join(__dirname, 'templates', 'hooks', 'useAsyncButton.js');
					await createComponent('useAsyncButton', useAsyncButtonTemplate, path.join(uiComponentsDir, 'useAsyncButton.jsx'));

					// Create AsyncButton.jsx in components folder
					const asyncButtonTemplate = path.join(__dirname, 'templates', 'AsyncButton.jsx');
					await createComponent('AsyncButton', asyncButtonTemplate, componentsDir);
				} else if (componentName === 'DynamicForm') {
					// Create both DynamicForm.jsx and CustomPDF.jsx in components folder
					const dynamicFormTemplate = path.join(__dirname, 'templates', 'DynamicForm.jsx');
					await createComponent('DynamicForm', dynamicFormTemplate, componentsDir);

					const customPDFTemplate = path.join(__dirname, 'templates', 'CustomPDF.jsx');
					await createComponent('CustomPDF', customPDFTemplate, componentsDir);
				} else if (componentName === 'Navbar') {
					// For Navbar, NavbarIcon will be added automatically
					const navbarTemplate = path.join(__dirname, 'templates', 'Navbar.jsx');
					await createComponent('Navbar', navbarTemplate, componentsDir);
				} else {
					// Default case for other component names
					const templateFile = path.join(__dirname, 'templates', `${componentName}.jsx`);
					await createComponent(componentName, templateFile, componentsDir);
				}
			}

			console.log("\n\nComponents created successfully!\n\n");
		} catch (error) {
			console.error("An error occurred:", error);
			process.exit(1);
		}
	}
)();
