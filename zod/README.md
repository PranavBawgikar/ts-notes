<p align="center"><img align="center" src="https://github.com/user-attachments/assets/49198030-bf45-4015-823c-90f752a9a47d" height="110" width="200">
<h1>zod</h1>

<a href="https://github.com/colinhacks/zod">zod</a> is a powerful library for schema validation in typescript.

this repo is a user registration form implemented using react, typescript, and the zod library for schema validation. it allows users to fill out a registration form with various fields, such as name, email, password, and confirmPassword, and validates the input data based on the defined schema.

## step-by-step guide
visit the <a href="https://zod.dev/">zod documentation</a> to learn more about the available validation methods and how to define schemas using zod.<br />
follow these steps to set up and develop the user registration form with validation project:

1. set up a new react project:
   - create a new directory for your project.
   - initialize a new React project using `npm create vite --template typescript` (provide a name to your local repo when prompted).
   - change into the project directory: `cd my-app`.
   - install the necessary dependencies: `npm install zod`.

2. create a new file, let's say `RegistrationForm.tsx`, and import the required modules:
   ```tsx
   import { useState } from 'react';
   import { z } from 'zod';
   ```

3. define the schema for user registration using zod:
   ```tsx
   const registrationSchema = z.object({
     name: z.string().min(2),
     email: z.string().email(),
     password: z.string().min(8),
     confirmPassword: z.string().min(8),
   });
   ```

4. implement the registration form logic:
   - create a functional component that represents the registration form.
   - use React's `useState` hook to manage form input values and validation errors.
   - handle form submission and validate the input values against the defined schema using `registrationSchema.safeParse()`.

5. implement the UI and error handling:
   - create the necessary form fields and components using JSX.
   - add event handlers to capture user input and update the form data state.
   - display validation errors to the user based on the `validationErrors` state.
   - customize the error display based on your UI/UX preferences.

6. style the user interface:
   - enhance the user experience by applying CSS styles to the registration form components.
   - use CSS frameworks or custom styles to create an aesthetically pleasing and responsive user interface.<br><br>
