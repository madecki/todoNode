# todoNode
1. To use this backend, make sure to have mongoDb installed locally.
2. Create db called 'todo' with a collection named 'tasks' (will be done automatically with migrations in next update)
3. Run 'node migrations' and check if random tasks has been added properly (i.e. with Robo3T)
4. Run 'node index' to listen on specified port (default :9876)

# Endpoints
1. '/tasks' - GET gets a list of tasks, unsorted
2. '/task/:id' - PUT puts an update of a selected task
3. '/newTask - POST posts a new task into DB