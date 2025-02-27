We have recorded a video walkthrough of the Task Tracker App.

In the video we can see the following:

1.  The app is launched with `docker compose up --build`

2.  We load the app on the Chrome browser.

3.  We connect to the Postgres container, and look at the empty `task` table. Our solution includes an initial `alembic` migration that defines the `task` schema. This schema is also shown on the video.

4.  We add tasks via the React Chrome frontend on the browser. We see that these tasks are reflected on the previously empty `task` table.

5.  We send the following GET request to the FastAPI backend, which returns a JSON list of all tasks:
    
    ```sh
    curl localhost:8080/task/
    ```

6.  We send a POST request directly to the FastAPI backend with a new task payload. We see that this new task is reflected on the frontend.
    
    ```sh
    curl -X POST localhost:8080/task/ \
         -H "Content-Type: application/json" \
         --data-raw '{
           "title": "supermarket",
           "description": "buy tomatoes",
           "status": "Done",
           "priority": "High"
         }'
    ```



https://github.com/user-attachments/assets/f0c8c3c2-4c7c-41be-982f-15f8b020a902




