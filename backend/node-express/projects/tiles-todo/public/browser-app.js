// target DOM elements
const tasksDOM = document.querySelector('.tasks');
const loadingDOM = document.querySelector('.loading-text');
const formDOM = document.querySelector('.task-form');
const taskInputDOM = document.querySelector('.task-input');
const formAlertDOM = document.querySelector('.form-alert');

// fetch and load tasks from '/api/tasks'
const showTasks = async () => {
	// show loading spinner
	loadingDOM.style.visibility = 'visible';

	try {
		// fetch all tasks
		const { data: { tasks } } = await axios.get('/api/v1/tasks');

		// check for tasks in database
		if (tasks.length < 1) {
			tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>';
			// hide loading spinner
			loadingDOM.style.visibility = 'hidden';
			return;
		}

		// note
		const allTasks = tasks
			.map((task) => {
				const { completed, _id: taskID, name } = task;

				return `
          <div class="single-task ${completed && 'task-completed'}">
            <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
            <div class="task-links">

              <!-- edit link -->
              <a href="task.html?id=${taskID}"  class="edit-link">
                <i class="fas fa-edit"></i>
              </a>

              <!-- delete btn -->
              <button type="button" class="delete-btn" data-id="${taskID}">
                <i class="fas fa-trash"></i>
              </button>
              
            </div>
          </div>
        `;
			})
			.join('');

		// note
		tasksDOM.innerHTML = allTasks;
	} catch (error) {
		// note
		tasksDOM.innerHTML =
			'<h5 class="empty-list">There was an error, please try later....</h5>';
	}

	// hide loading spinner
	loadingDOM.style.visibility = 'hidden';
};
showTasks();

// delete task /api/tasks/:id
tasksDOM.addEventListener('click', async (e) => {
	// note
	const el = e.target;

	// if element contains the 'delete-btn' class
	if (el.parentElement.classList.contains('delete-btn')) {
		// show loading spinner
		loadingDOM.style.visibility = 'visible';
		// note
		const id = el.parentElement.dataset.id;

		try {
			// axios delete: https://axios-http.com/docs/api_intro
			await axios.delete(`/api/v1/tasks/${id}`);
			// re-fetch all tasks
			showTasks();
		} catch (error) {
			console.log(error);
		}
	}

	// hide loading spinner
	loadingDOM.style.visibility = 'hidden';
});

// form on submit
formDOM.addEventListener('submit', async (e) => {
	// prevent page refresh
	e.preventDefault();
	// get value from the input
	const name = taskInputDOM.value;

	try {
		// if successful: pass data (name) to the server
		// axios post: https://axios-http.com/docs/post_example
		await axios.post('/api/v1/tasks', { name });
		// re-fetch tasks
		showTasks();
		// add correct alerts
		taskInputDOM.value = '';
		formAlertDOM.style.display = 'block';
		formAlertDOM.textContent = `success, task added`;
		formAlertDOM.classList.add('text-success');
	} catch (error) {
		formAlertDOM.style.display = 'block';
		formAlertDOM.innerHTML = `error, please try again`;
	}

	// note
	setTimeout(() => {
		formAlertDOM.style.display = 'none';
		formAlertDOM.classList.remove('text-success');
	}, 3000);
});
