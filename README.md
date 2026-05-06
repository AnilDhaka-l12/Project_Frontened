# Jupyter Toolkit Frontend

## Overview

Jupyter Toolkit is a project designed to make it easier to use Jupyter Notebook, especially for students and developers working in machine learning and artificial intelligence.

Setting up a proper environment with GPU support (such as CUDA, cuDNN, and TensorFlow) is usually difficult and time-consuming. This project aims to simplify that process by automating setup and improving the overall workflow.

The frontend provides a simple and user-friendly interface where users can access the system and manage their work easily.

---

## Problem

Many users face problems when setting up Jupyter Notebook with GPU support:

- The installation process is complex
- Different versions of tools may not work together
- It takes a lot of time to fix errors

In addition, users have to manually save their work and push code to GitHub, which is repetitive and easy to forget.

---

## Target Users

This project is mainly for:

- Students learning machine learning or AI
- Developers using TensorFlow
- Anyone who uses Jupyter Notebook regularly

---

## Solution

This project provides a simple solution by automating important tasks:

- Automatically sets up the environment using Docker
- Launches Jupyter Notebook in the browser
- Detects file changes and pushes updates to GitHub

This helps users save time and avoid common setup errors.

---

## Main Features

1. Automatic Environment Setup  
   The system creates a Docker container with all required tools such as CUDA, cuDNN, and TensorFlow.

2. Notebook Auto Launch  
   Jupyter Notebook starts automatically and opens in the browser.

3. Automatic GitHub Commit  
   The system detects file changes and automatically commits and pushes them to GitHub.

---

## Technologies Used

Frontend:
- React
- TypeScript
- Vite
- CSS

Backend:
- .NET Core 9

Database:
- Firebase Firestore

Other Tools:
- Docker
- GitHub API
- Render (for deployment)

---

## CI/CD Setup

This project uses GitHub Actions for automation.

- The CI workflow installs dependencies, runs lint, tests, audit, and builds the project.
- CodeQL is used for security scanning.
- Deployment is done through Render using a build hook after CI passes.

---

## Project Timeline

- Week 1–2: Planning and research  
- Week 3–4: Backend setup  
- Week 5–6: Feature development  
- Week 7–8: Testing and final submission  

---

## Risks

- GPU compatibility issues → tested on different systems  
- Docker installation problems → clear setup instructions provided  
- Limited time → focus on important features  

---

## Team Members

- Product Coordinator: Anil Dhakal  
- Backend Developer: Pravij Upreti, Anil Dhakal  
- Frontend Developer: Saman Puri  
- System Developer: Pravij Upreti, Rupak Gurung  
- Scrum Master: Rupak Gurung  

---

## Tools Used for Workflow

- Communication: WhatsApp, Discord  
- Task Management: Trello  
- Code Repository: GitHub  

---

## Future Improvements

- Improve user interface design  
- Add more tests  
- Improve performance  
- Better error handling

---

## Deployment link 

- https://project-frontened.onrender.com


