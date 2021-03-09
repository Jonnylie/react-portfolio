# A React Portfolio Site

This project is my portfolio website built with [React](https://reactjs.org/) to highlight my programming related projects

## Built With

- React.js
- React Hooks
- React Router
- Styled Components
- Docker
 
## Using Docker

An additional Dockerfile has been added to the repo. If you wish to run the application via Docker:

```bash
# build docker image
docker build -t portfolio:latest .

# run docker container and portforward port 3000
docker run --name my-portfolio -d -p 3000:3000 portfolio:latest

# View the running container
Open up web browser and go to http://localhost:3000/
```

## Visit Project
https://jonnylie.netlify.app/

