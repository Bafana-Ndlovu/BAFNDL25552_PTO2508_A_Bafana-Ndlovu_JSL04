## Project Overview

This project is a simple Kanban task board made with JavaScript.

Tasks are loaded from a list in the code and shown on the page automatically. Each task appears in the correct column based on its status.

When a user clicks on a task, a modal opens where the user can see the task details and make changes.

This project helps practice working with the **DOM, and JavaScript functions**.

---

## How the Task Board Works

When the page loads, JavaScript reads the task list and creates task cards.

Each task is placed in the correct column depending on its status.

The board has three columns:

- **To Do** – tasks that have not started
- **In Progress** – tasks that are being worked on
- **Done** – tasks that are finished

Clicking a task opens a modal that shows the task information.

---

## Modal

The modal shows the task details.

Inside the modal the user can:

- See the task title  
- See the task description  
- Edit the task title  
- Edit the task description  
- Change the task status  
- Close the modal  

---

## Initial Task Data

The tasks come from a JavaScript list called **initialTasks**.

Each task has:

- **id** – the task number  
- **title** – the name of the task  
- **description** – more information about the task  
- **status** – which column the task should appear in  

Status controls the column:

| Status | Column |
|------|------|
| todo | To Do |
| doing | In Progress |
| done | Done |

JavaScript reads this list and creates the task cards on the board.

---

## Main JavaScript Functions

The code uses small functions to keep things organised.

Some important functions are:

**renderTasks()**  
Shows all tasks on the board.

**createTaskElement()**  
Creates the task card.

**placeTaskInColumn()**  
Places the task in the correct column.

**openTaskModal()**  
Opens the modal and shows the task information.

---

## Tools Used

- HTML  
- CSS  
- JavaScript  
- Git  
- GitHub  

---

## Project Structure

The project files are organized like this:

- **index.html** – page structure  
- **styles.css** – styling for the board  
- **script.js** – JavaScript code  
- **data.js** – task data  
- **README.md** – project information  

---

## What This Project Shows

This project shows how to:

- create elements using JavaScript
- display data on the page
- use click events
- open and close a modal
- organise JavaScript code

---
