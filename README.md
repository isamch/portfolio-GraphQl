# Portfolio API

Portfolio backend API built with Node.js, Express, GraphQL, TypeScript, and MongoDB.

## Features

### 👨‍💻 Admin Features
- Login with JWT authentication
- Manage profile information
- Add/Edit/Delete projects
- Add/Edit/Delete skills
- Add/Edit/Delete experiences

### 👀 Visitor Features
- View profile
- View all projects
- View all skills
- View all experiences

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@portfolio.com
ADMIN_PASSWORD=admin123
PORT=4000
NODE_ENV=development
```

3. Initialize admin account:
```bash
npm run init:admin
```

4. Start development server:
```bash
npm run dev
```

5. Access GraphQL Playground:
```
http://localhost:4000/graphql
```

## GraphQL Queries (Public)

### Get Profile
```graphql
query {
  profile {
    id
    name
    title
    bio
    email
    github
    linkedin
  }
}
```

### Get Projects
```graphql
query {
  projects {
    id
    title
    description
    image
    link
    github
    technologies
    featured
  }
}
```

### Get Skills
```graphql
query {
  skills {
    id
    name
    level
    category
    icon
  }
}
```

### Get Experiences
```graphql
query {
  experiences {
    id
    title
    company
    location
    description
    startDate
    endDate
    current
    technologies
  }
}
```

## GraphQL Mutations (Admin Only)

### Login
```graphql
mutation {
  login(email: "admin@portfolio.com", password: "admin123") {
    token
    admin {
      id
      email
    }
  }
}
```

### Update Profile
```graphql
mutation {
  updateProfile(input: {
    name: "Your Name"
    title: "Full Stack Developer"
    bio: "Your bio"
    email: "your@email.com"
    github: "https://github.com/username"
    linkedin: "https://linkedin.com/in/username"
  }) {
    id
    name
    title
  }
}
```

### Create Project
```graphql
mutation {
  createProject(input: {
    title: "Project Name"
    description: "Project description"
    technologies: ["React", "Node.js"]
    featured: true
  }) {
    id
    title
  }
}
```

### Create Skill
```graphql
mutation {
  createSkill(input: {
    name: "JavaScript"
    level: 90
    category: "Frontend"
  }) {
    id
    name
  }
}
```

### Create Experience
```graphql
mutation {
  createExperience(input: {
    title: "Software Engineer"
    company: "Company Name"
    description: "Job description"
    startDate: "2023-01-01"
    current: true
    technologies: ["React", "TypeScript"]
  }) {
    id
    title
    company
  }
}
```

## Authentication

To access admin mutations, include the JWT token in the Authorization header:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

In GraphQL Playground, you can add it in the HTTP Headers section:
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Check TypeScript types
- `npm run init:admin` - Initialize admin account

## CI/CD

المشروع يستخدم GitHub Actions للـ CI/CD:

### اختبار محلي:
```bash
npm run typecheck  # فحص الأخطاء
npm run build      # بناء المشروع
```

### على GitHub:
- عند **Push** أو **Pull Request**: يتم تشغيل CI/CD تلقائياً
- اذهب إلى تبويب **Actions** على GitHub لمشاهدة النتائج

📖 راجع `TEST_CI_CD.md` للدليل الكامل

## Project Structure

```
src/
├── config/          # Database configuration
├── controllers/     # Business logic
├── middleware/      # Authentication middleware
├── models/          # MongoDB models
├── resolvers/       # GraphQL resolvers
├── schema/          # GraphQL schemas
├── scripts/         # Utility scripts
└── utils/           # Helper functions (JWT, password hashing)
```

