# 🚀 Prisma MongoDB Express TypeScript API

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.5+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-4.18+-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-4.0+-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-20.10+-2496ED?style=for-the-badge&logo=docker&logoColor=white)

**A modern, production-ready RESTful API built with cutting-edge technologies**

[🚀 Quick Start](#-quick-start) • [📚 Documentation](#-api-documentation) • [🐳 Docker](#-docker-deployment) • [🤝 Contributing](#-contributing)

</div>

---

## ✨ Features

<table>
<tr>
<td>

### 🔐 **Authentication**
- JWT-based user authentication
- Secure password hashing
- Token refresh mechanism
- Role-based access control

</td>
<td>

### 🗄️ **Database**
- MongoDB integration with Prisma ORM
- Type-safe database operations
- Automatic migrations
- Connection pooling

</td>
</tr>
<tr>
<td>

### 📝 **Developer Experience**
- Full TypeScript support
- Hot reloading in development
- Comprehensive error handling
- Auto-generated API documentation

</td>
<td>

### 🐳 **Deployment**
- Docker containerization
- Docker Compose for multi-service setup
- Production-ready configuration
- Environment-based configs

</td>
</tr>
</table>

## 🛠️ Tech Stack

<div align="center">

| Category | Technology | Description |
|----------|------------|-------------|
| **Runtime** | ![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=flat-square&logo=node.js&logoColor=white) | JavaScript runtime environment |
| **Framework** | ![Express.js](https://img.shields.io/badge/Express.js-4.18+-000000?style=flat-square&logo=express&logoColor=white) | Fast, unopinionated web framework |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-4.5+-3178C6?style=flat-square&logo=typescript&logoColor=white) | Typed superset of JavaScript |
| **ORM** | ![Prisma](https://img.shields.io/badge/Prisma-4.0+-2D3748?style=flat-square&logo=prisma&logoColor=white) | Next-generation ORM for Node.js |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-47A248?style=flat-square&logo=mongodb&logoColor=white) | NoSQL document database |
| **Containerization** | ![Docker](https://img.shields.io/badge/Docker-20.10+-2496ED?style=flat-square&logo=docker&logoColor=white) | Container platform |

</div>

## 🚀 Quick Start

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Docker & Docker Compose** - [Install Docker](https://docs.docker.com/get-docker/)
- **MongoDB** - Local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hussainbinfazal/Prisma-Docker.git
   cd Prisma-Docker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Server Configuration
   PORT=8000
   NODE_ENV=development
   
   # JWT Configuration
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRES_IN=7d
   
   # Database Configuration
   DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/database_name
   
   # Optional: MongoDB Direct Connection
   # DATABASE_URL=mongodb://localhost:27017/your_database_name
   ```

4. **Generate Prisma client**
   ```bash
   npx prisma generate
   ```

5. **Run database migrations** (if any)
   ```bash
   npx prisma db push
   ```

### 🏃‍♂️ Running the Application

#### Development Mode
```bash
npm run dev
```
🎉 Your API will be available at `http://localhost:8000`

#### Production Mode
```bash
npm run build
npm start
```

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

1. **Start all services**
   ```bash
   docker-compose up -d
   ```

2. **View logs**
   ```bash
   docker-compose logs -f
   ```

3. **Stop services**
   ```bash
   docker-compose down
   ```

### Using Docker Only

1. **Build the image**
   ```bash
   docker build -t prisma-api .
   ```

2. **Run the container**
   ```bash
   docker run -p 8000:8000 --env-file .env prisma-api
   ```

## 📚 API Documentation

### 🔐 Authentication Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/api/users/register` | Register a new user | `{ "email": "user@example.com", "password": "securePassword" }` |
| `POST` | `/api/users/login` | Login user | `{ "email": "user@example.com", "password": "securePassword" }` |

### 📝 Example Requests

#### Register User
```bash
curl -X POST http://localhost:8000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "mySecurePassword123"
  }'
```

#### Login User
```bash
curl -X POST http://localhost:8000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "mySecurePassword123"
  }'
```

### 📊 Response Format

All API responses follow this consistent format:

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {
    // Response data here
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

## 🔧 Project Structure

```
├── src/
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   └── app.ts           # Express app setup
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── migrations/      # Database migrations
├── docker-compose.yml   # Docker services
├── Dockerfile           # Docker image
└── package.json         # Dependencies
```

## 🔍 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build TypeScript to JavaScript |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |
| `npm run prisma:generate` | Generate Prisma client |
| `npm run prisma:studio` | Open Prisma Studio |

## 🚨 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Server port | ✅ | `8000` |
| `NODE_ENV` | Environment mode | ✅ | `development` |
| `JWT_SECRET` | JWT signing secret | ✅ | - |
| `JWT_EXPIRES_IN` | JWT expiration time | ❌ | `7d` |
| `DATABASE_URL` | MongoDB connection string | ✅ | - |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Fast, unopinionated web framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [MongoDB](https://www.mongodb.com/) - Document database
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript

---

<div align="center">

**Made with ❤️ by [Hussain Bin Fazal](https://github.com/hussainbinfazal)**

⭐ Star this repository if you found it helpful!

</div>