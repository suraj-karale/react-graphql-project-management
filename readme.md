### MERN STACK PROJECT MANAGEMENT

1. add mongodb connection url in .env file
2. npm i
3. npm run dev for development mode

## Live Demo - https://mern-todo-suraj.netlify.app/

### GraphQL Queries & Mutations

Execute all query in `http://localhost:5000/graphql` interface

## Create a new client and return all data
```
mutation {
  addClient(name: "Tony Stark", email: "ironman@gmail.com", phone: "955-365-3376") {
    id
    name
    email
    phone
  }
}
```

## Create a new client and return data
```
mutation {
  updateClient(phone: "955-365-3378") {
   name
   status
  }
}
```

## Delete a client and return id
```
mutation {
  deleteClient(id: 1) {
    id
  }
}
```

## Get names of all clients
```
{
  clients {
    name
  }
}
```

## Get a single client name and email
```
{
  client(id: <put_created_id>) {
    name
    email
  }
}
```

## Create a new project and return name and description
```
mutation {
  addProject(name: "Mobile App", description: "This is the project description", status: new, clientId: "put_created_id") {
   name
   description
  }
}
```

## Update a project status and return name and status
```
mutation {
  updateProject(status: "completed") {
   name
   status
  }
}
```


