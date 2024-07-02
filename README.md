# Task List App

## Overview

This is a simple task management application built using React and TypeScript and Tailwind CSS for styling.. The application allows users to manage their tasks effectively with features to add, complete, filter, delete, and sort tasks. It also includes the ability to persist tasks in local storage and load previous tasks from an external API.

## Features

- Add new tasks.
- Mark tasks as complete.
- Filter tasks based on their completion status.
- Persist tasks in local storage.
- Load previous tasks from an external API.
- Delete tasks with a confirmation dialog.
- Add due dates to tasks and sort them based on the due date.

## Task Requirements

### Core Features

1. **Add New Tasks**: Users can add new tasks to the list.
2. **Mark Tasks as Complete**: Users can mark tasks as complete.
3. **Filter Tasks**: Users can filter tasks based on their completion status.
4. **Persist Tasks**: Tasks are saved in local storage to remain after a page refresh.
5. **Load Previous Tasks**: Users can click a “Load previous tasks” button to fetch tasks from an external API.
   - During the API call, the button is disabled and shows "Loading tasks…" until the posts are loaded.
   - Present the fetched tasks in the same list layout as "Today’s Tasks".
   - If an error occurs, display the message “Tasks could not be loaded.”

## Installation and Running the App

1. Install dependencies and start the development server:

`npm install`
`npm start`

2. Open http://localhost:3000 to view it in the browser.
