# Express Template

A lightweight and extensible Express.js + TypeScript template to kickstart your Node.js projects faster and cleaner. Stop repeating boilerplate code every time you start a new project.

## ✨ Features

- ✅ TypeScript support
- ✅ Project structure with clear separation of concerns
- ✅ Environment variables support with `dotenv`
- ✅ Logging via `winston`
- ✅ Security best practices using `helmet` and `compression`
- ✅ Alias support (`@/` for `src/`)
- ✅ Ready to scale and extend

## 📁 Project Structure

```
src/
    ├── common/ # common module
        └── enums # constants app
        └── exception # error handling
        └── middlewares # custom middleware
        └── typeDefinitions # suggestion for developer env
        └── utils # utility function for app
    ├── config/ # Configuration files and Database
        └── databases # configuration database
        └── config.ts  # configuration environment variables
    ├── middlewares/ # Custom middlewares
    |── modules/ # app module
    
    └── app.ts # Express app setup
    └── index.ts # Server bootstrap
```

## Installation
1. Clone the repository:

```sh
git clone git clone https://github.com/Hossein-Falah/express-templete.git your-project-name

cd your-project-name
```

2. Install dependencies:

```sh
./bash.sh

or

npm install
```

3. Set up environment variables:

- Create a .env file in the root directory.
- Add the following variables:

```bash
APP_URL=http://localhost:
PORT=3000
MONGO_URL=mongodb://localhost:27017/mydatabase
NODE_ENV=development
```

4. Run the server:

```sh
npm run dev:ts
npm run dev
```

## Contributing

Contributions are welcome! To contribute, follow these steps:

1. **Fork the repository**.
2. **Create a new branch**: 
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Make your changes**.
4. **Commit your changes**:
```sh
git commit -m 'Add some feature'
```
5. **Push your changes**:
```sh
git push origin feature/YourFeature
```
6. **Open a pull request**.
After your pull request is reviewed and approved, it will be merged into the main branch.

### License
This project is licensed under the MIT License. See the LICENSE file for more information.
