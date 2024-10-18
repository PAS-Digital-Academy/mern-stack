
# Setting up a React Project with Vite

## 1. Installing Node.js

Node.js is a JavaScript runtime that allows you to run JavaScript code on your local machine, outside of the browser. Installing Node.js will also install npm (Node Package Manager), which is essential for managing packages in your project.

### Step-by-Step Instructions:

### **Step 1:** Download Node.js

1. Visit the [Node.js official website](https://nodejs.org/).
2. Download the **LTS** version of Node.js (recommended for stability).

### **Step 2:** Install Node.js

1. Open the downloaded installer.
2. Follow the on-screen instructions and proceed with the installation.
3. On the "Tools for Native Modules" screen, check the box for installing necessary tools like `chocolatey` (for Windows) or relevant developer tools for your OS (Mac/Linux).
4. Complete the installation process.

### **Step 3:** Verify the Installation

1. Open your terminal (Command Prompt for Windows, or Terminal for macOS/Linux).
2. Run the following commands to verify the installation:

   ```bash
   node -v
   ```

   This should print the installed Node.js version.

   ```bash
   npm -v
   ```

   This should print the installed npm version.

---

## 2. Setting Up a React Project with Vite

Vite is a modern build tool that’s faster and leaner than alternatives like Webpack, and it’s ideal for React development.

### **Step 1:** Install Vite

1. In your terminal, navigate to the folder where you want to create your project.

   ```bash
   cd path/to/your/folder
   ```

2. Run the following command to set up a new Vite project:

   ```bash
   npm create vite@latest
   ```

3. You’ll be prompted to choose a project name and a framework:

   - Project name: You can provide any name, e.g., `my-react-app`.
   - Framework: Select `React` from the list.
   - Variant: Select `JavaScript` or `TypeScript` based on your preference.

### **Step 2:** Navigate to the Project Directory

Once the setup is complete, navigate to your project folder:

```bash
cd my-react-app
```

### **Step 3:** Install Dependencies

Vite automatically initializes a package for you. Now, install the necessary dependencies:

```bash
npm install
```

### **Step 4:** Start the Development Server

To run the React project, use the following command:

```bash
npm run dev
```

Vite will start a local development server and you’ll see output like:

```
VITE v2.0.0  ready in 300ms

➜  Local: http://localhost:5173/
```

### **Step 5:** Open the App in Your Browser

1. Open your browser and go to `http://localhost:5173/`.
2. You should see the default Vite + React app running.

### **Optional Step:** Build the Project for Production

When you are ready to build the project for production, you can run:

```bash
npm run build
```

This will create an optimized production build of your React app in the `dist` folder.

---

Congratulations! You have successfully set up a React project using Vite.
