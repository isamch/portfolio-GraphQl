# 📚 Portfolio API Documentation

Documentation complète pour toutes les Queries et Mutations disponibles dans l'API Portfolio.

---

## 🔐 Authentication

Toutes les mutations Admin nécessitent un token JWT dans les headers.

### Comment obtenir le token:
1. Utiliser la mutation `login`
2. Copier le token retourné
3. L'ajouter dans les HTTP Headers de GraphQL Playground:
```json
{
  "Authorization": "Bearer VOTRE_TOKEN_ICI"
}
```

---

## 👤 ADMIN - Mutations

### 🔑 Login

Authentifier l'admin et obtenir un token JWT.

**Mutation:**
```graphql
mutation Login {
  login(email: "admin@portfolio.com", password: "admin123") {
    token
    admin {
      id
      email
    }
  }
}
```

**Réponse:**
```json
{
  "data": {
    "login": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "admin": {
        "id": "507f1f77bcf86cd799439011",
        "email": "admin@portfolio.com"
      }
    }
  }
}
```

---

## 👨‍💼 PROFILE - Query & Mutation

### 📖 Get Profile (Public)

Obtenir les informations du profil.

**Query:**
```graphql
query GetProfile {
  profile {
    id
    name
    title
    bio
    email
    phone
    location
    github
    linkedin
    twitter
    website
    avatar
    createdAt
    updatedAt
  }
}
```

**Réponse:**
```json
{
  "data": {
    "profile": {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "title": "Full Stack Developer",
      "bio": "Passionate developer...",
      "email": "john@example.com",
      "phone": "+1234567890",
      "location": "Casablanca, Morocco",
      "github": "https://github.com/johndoe",
      "linkedin": "https://linkedin.com/in/johndoe",
      "twitter": "https://twitter.com/johndoe",
      "website": "https://johndoe.dev",
      "avatar": "https://example.com/avatar.jpg",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

### ✏️ Update Profile (Admin Only)

Mettre à jour les informations du profil.

**Mutation (avec token):**
```graphql
mutation UpdateProfile {
  updateProfile(input: {
    name: "John Doe"
    title: "Senior Full Stack Developer"
    bio: "Experienced developer with 5+ years..."
    email: "john@example.com"
    phone: "+1234567890"
    location: "Casablanca, Morocco"
    github: "https://github.com/johndoe"
    linkedin: "https://linkedin.com/in/johndoe"
    twitter: "https://twitter.com/johndoe"
    website: "https://johndoe.dev"
    avatar: "https://example.com/avatar.jpg"
  }) {
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

**Exemple minimal:**
```graphql
mutation UpdateProfileMinimal {
  updateProfile(input: {
    name: "John Doe"
    title: "Developer"
    bio: "My bio"
    email: "john@example.com"
  }) {
    id
    name
    title
  }
}
```

---

## 🚀 PROJECTS - Queries & Mutations

### 📖 Get All Projects (Public)

Obtenir tous les projets.

**Query:**
```graphql
query GetAllProjects {
  projects {
    id
    title
    description
    image
    link
    github
    technologies
    featured
    createdAt
    updatedAt
  }
}
```

**Réponse:**
```json
{
  "data": {
    "projects": [
      {
        "id": "507f1f77bcf86cd799439011",
        "title": "E-commerce Platform",
        "description": "Full-stack e-commerce solution",
        "image": "https://example.com/project.jpg",
        "link": "https://example.com",
        "github": "https://github.com/user/repo",
        "technologies": ["React", "Node.js", "MongoDB"],
        "featured": true,
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

### 📖 Get Project By ID (Public)

Obtenir un projet spécifique par son ID.

**Query:**
```graphql
query GetProject {
  project(id: "507f1f77bcf86cd799439011") {
    id
    title
    description
    image
    link
    github
    technologies
    featured
    createdAt
    updatedAt
  }
}
```

### ➕ Create Project (Admin Only)

Créer un nouveau projet.

**Mutation (avec token):**
```graphql
mutation CreateProject {
  createProject(input: {
    title: "E-commerce Platform"
    description: "A full-stack e-commerce solution with React and Node.js"
    image: "https://example.com/project.jpg"
    link: "https://example.com"
    github: "https://github.com/user/repo"
    technologies: ["React", "Node.js", "MongoDB", "Express"]
    featured: true
  }) {
    id
    title
    description
    technologies
    featured
  }
}
```

**Exemple minimal:**
```graphql
mutation CreateProjectMinimal {
  createProject(input: {
    title: "My Project"
    description: "Project description"
    technologies: ["React"]
  }) {
    id
    title
  }
}
```

### ✏️ Update Project (Admin Only)

Mettre à jour un projet existant.

**Mutation (avec token):**
```graphql
mutation UpdateProject {
  updateProject(
    id: "507f1f77bcf86cd799439011"
    input: {
      title: "Updated Project Title"
      description: "Updated description"
      featured: false
      technologies: ["React", "TypeScript"]
    }
  ) {
    id
    title
    description
    featured
    technologies
  }
}
```

**Exemple - Changer seulement le titre:**
```graphql
mutation UpdateProjectTitle {
  updateProject(
    id: "507f1f77bcf86cd799439011"
    input: {
      title: "New Title"
    }
  ) {
    id
    title
  }
}
```

### 🗑️ Delete Project (Admin Only)

Supprimer un projet.

**Mutation (avec token):**
```graphql
mutation DeleteProject {
  deleteProject(id: "507f1f77bcf86cd799439011")
}
```

**Réponse:**
```json
{
  "data": {
    "deleteProject": true
  }
}
```

---

## 💻 SKILLS - Queries & Mutations

### 📖 Get All Skills (Public)

Obtenir toutes les compétences.

**Query:**
```graphql
query GetAllSkills {
  skills {
    id
    name
    level
    category
    icon
    createdAt
    updatedAt
  }
}
```

**Réponse:**
```json
{
  "data": {
    "skills": [
      {
        "id": "507f1f77bcf86cd799439011",
        "name": "React",
        "level": 90,
        "category": "Frontend",
        "icon": "https://example.com/react-icon.svg",
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
      },
      {
        "id": "507f1f77bcf86cd799439012",
        "name": "Node.js",
        "level": 85,
        "category": "Backend",
        "icon": "https://example.com/node-icon.svg",
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

### 📖 Get Skill By ID (Public)

Obtenir une compétence spécifique par son ID.

**Query:**
```graphql
query GetSkill {
  skill(id: "507f1f77bcf86cd799439011") {
    id
    name
    level
    category
    icon
  }
}
```

### ➕ Create Skill (Admin Only)

Créer une nouvelle compétence.

**Mutation (avec token):**
```graphql
mutation CreateSkill {
  createSkill(input: {
    name: "React"
    level: 90
    category: "Frontend"
    icon: "https://example.com/react-icon.svg"
  }) {
    id
    name
    level
    category
    icon
  }
}
```

**Exemple sans icon:**
```graphql
mutation CreateSkillNoIcon {
  createSkill(input: {
    name: "JavaScript"
    level: 95
    category: "Programming Language"
  }) {
    id
    name
    level
    category
  }
}
```

**Exemples par catégorie:**
```graphql
# Frontend
mutation CreateFrontendSkill {
  createSkill(input: {
    name: "Vue.js"
    level: 80
    category: "Frontend"
  }) {
    id
    name
  }
}

# Backend
mutation CreateBackendSkill {
  createSkill(input: {
    name: "Python"
    level: 85
    category: "Backend"
  }) {
    id
    name
  }
}

# Database
mutation CreateDatabaseSkill {
  createSkill(input: {
    name: "MongoDB"
    level: 75
    category: "Database"
  }) {
    id
    name
  }
}

# Tools
mutation CreateToolSkill {
  createSkill(input: {
    name: "Docker"
    level: 70
    category: "DevOps"
  }) {
    id
    name
  }
}
```

### ✏️ Update Skill (Admin Only)

Mettre à jour une compétence existante.

**Mutation (avec token):**
```graphql
mutation UpdateSkill {
  updateSkill(
    id: "507f1f77bcf86cd799439011"
    input: {
      name: "React.js"
      level: 95
      category: "Frontend Framework"
      icon: "https://example.com/new-icon.svg"
    }
  ) {
    id
    name
    level
    category
  }
}
```

**Exemple - Augmenter seulement le niveau:**
```graphql
mutation UpdateSkillLevel {
  updateSkill(
    id: "507f1f77bcf86cd799439011"
    input: {
      level: 95
    }
  ) {
    id
    name
    level
  }
}
```

**Exemple - Changer de catégorie:**
```graphql
mutation UpdateSkillCategory {
  updateSkill(
    id: "507f1f77bcf86cd799439011"
    input: {
      category: "Full Stack"
    }
  ) {
    id
    name
    category
  }
}
```

### 🗑️ Delete Skill (Admin Only)

Supprimer une compétence.

**Mutation (avec token):**
```graphql
mutation DeleteSkill {
  deleteSkill(id: "507f1f77bcf86cd799439011")
}
```

---

## 💼 EXPERIENCES - Queries & Mutations

### 📖 Get All Experiences (Public)

Obtenir toutes les expériences professionnelles.

**Query:**
```graphql
query GetAllExperiences {
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
    createdAt
    updatedAt
  }
}
```

**Réponse:**
```json
{
  "data": {
    "experiences": [
      {
        "id": "507f1f77bcf86cd799439011",
        "title": "Senior Software Engineer",
        "company": "Tech Company",
        "location": "Casablanca, Morocco",
        "description": "Developed and maintained web applications...",
        "startDate": "2023-01-01T00:00:00.000Z",
        "endDate": null,
        "current": true,
        "technologies": ["React", "Node.js", "TypeScript"],
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

### 📖 Get Experience By ID (Public)

Obtenir une expérience spécifique par son ID.

**Query:**
```graphql
query GetExperience {
  experience(id: "507f1f77bcf86cd799439011") {
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

### ➕ Create Experience (Admin Only)

Créer une nouvelle expérience professionnelle.

**Mutation - Emploi actuel (avec token):**
```graphql
mutation CreateCurrentExperience {
  createExperience(input: {
    title: "Senior Software Engineer"
    company: "Tech Company"
    location: "Casablanca, Morocco"
    description: "Developed full-stack web applications using React and Node.js. Led a team of 3 developers."
    startDate: "2023-01-01"
    current: true
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"]
  }) {
    id
    title
    company
    current
    technologies
  }
}
```

**Mutation - Emploi passé:**
```graphql
mutation CreatePastExperience {
  createExperience(input: {
    title: "Junior Developer"
    company: "Startup Inc"
    location: "Rabat, Morocco"
    description: "Worked on frontend development and learned React."
    startDate: "2021-06-01"
    endDate: "2022-12-31"
    current: false
    technologies: ["React", "JavaScript", "CSS"]
  }) {
    id
    title
    company
    startDate
    endDate
    current
  }
}
```

**Exemple minimal:**
```graphql
mutation CreateExperienceMinimal {
  createExperience(input: {
    title: "Developer"
    company: "Company Name"
    description: "Job description"
    startDate: "2023-01-01"
    current: true
  }) {
    id
    title
    company
  }
}
```

### ✏️ Update Experience (Admin Only)

Mettre à jour une expérience existante.

**Mutation (avec token):**
```graphql
mutation UpdateExperience {
  updateExperience(
    id: "507f1f77bcf86cd799439011"
    input: {
      title: "Lead Software Engineer"
      description: "Updated description with new responsibilities"
      technologies: ["React", "Node.js", "TypeScript", "Docker", "AWS"]
    }
  ) {
    id
    title
    company
    description
    technologies
  }
}
```

**Exemple - Marquer comme terminé:**
```graphql
mutation EndExperience {
  updateExperience(
    id: "507f1f77bcf86cd799439011"
    input: {
      current: false
      endDate: "2024-12-31"
    }
  ) {
    id
    title
    current
    endDate
  }
}
```

**Exemple - Ajouter des technologies:**
```graphql
mutation AddTechnologies {
  updateExperience(
    id: "507f1f77bcf86cd799439011"
    input: {
      technologies: ["React", "Node.js", "TypeScript", "GraphQL", "MongoDB"]
    }
  ) {
    id
    technologies
  }
}
```

### 🗑️ Delete Experience (Admin Only)

Supprimer une expérience.

**Mutation (avec token):**
```graphql
mutation DeleteExperience {
  deleteExperience(id: "507f1f77bcf86cd799439011")
}
```

---

## 🔄 Exemples de Requêtes Combinées

### Obtenir tout le Portfolio d'un coup (Public)

```graphql
query GetFullPortfolio {
  profile {
    id
    name
    title
    bio
    email
    github
    linkedin
    website
  }
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
  skills {
    id
    name
    level
    category
    icon
  }
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

### Obtenir seulement les projets en vedette (Public)

```graphql
query GetFeaturedProjects {
  projects {
    id
    title
    description
    image
    link
    technologies
  }
}
```

Note: Vous pouvez filtrer `featured: true` côté client après réception des données.

### Obtenir les compétences par catégorie (Public)

```graphql
query GetSkillsByCategory {
  skills {
    id
    name
    level
    category
  }
}
```

Note: Vous pouvez grouper par `category` côté client.

---

## 🚨 Gestion des Erreurs

### Erreur d'authentification
Si vous essayez d'accéder à une mutation Admin sans token:
```json
{
  "errors": [
    {
      "message": "Unauthorized: Admin access required",
      "extensions": {
        "code": "UNAUTHENTICATED"
      }
    }
  ]
}
```

### Erreur de login
Si les identifiants sont incorrects:
```json
{
  "errors": [
    {
      "message": "Invalid email or password"
    }
  ]
}
```

---

## 📝 Notes Importantes

1. **Dates**: Utilisez le format `YYYY-MM-DD` pour les dates (ex: "2023-01-01")

2. **Level**: Pour les skills, le niveau doit être entre 1 et 100

3. **Token**: Le token JWT expire après 7 jours. Vous devez vous reconnecter après expiration.

4. **Featured Projects**: Utilisez `featured: true` pour mettre en avant certains projets

5. **Current Experience**: Utilisez `current: true` pour les emplois actuels, `false` pour les emplois passés

6. **Technologies**: Les tableaux peuvent être vides `[]` ou contenir plusieurs valeurs

7. **Champs optionnels**: Tous les champs sauf ceux marqués `!` sont optionnels

---

## 🎯 Workflow Recommandé

### Pour Admin:

1. **Se connecter:**
```graphql
mutation { login(email: "...", password: "...") { token } }
```

2. **Remplir le profil:**
```graphql
mutation { updateProfile(input: {...}) { id } }
```

3. **Ajouter des compétences:**
```graphql
mutation { createSkill(input: {...}) { id } }
```

4. **Ajouter des expériences:**
```graphql
mutation { createExperience(input: {...}) { id } }
```

5. **Ajouter des projets:**
```graphql
mutation { createProject(input: {...}) { id } }
```

### Pour Visiteurs:

Utilisez uniquement les Queries (sans token):
- `profile`
- `projects`
- `skills`
- `experiences`

---

**Bon développement! 🚀**

