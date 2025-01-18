# my90northproject
Django Chat Application

A real-time chat application built using Django, Channels, WebSockets, and Redis.

Features

User authentication (signup/login/logout).

Real-time messaging using WebSockets.

Display of all registered users in a collapsible menu.

Chat history retrieval and storage in the database.

User-friendly chat interface.

Installation and Setup Guide

Prerequisites

Python 3.10 or higher installed.

Redis installed and running.

Node.js (optional for additional frontend builds).

Git installed.

Steps to Run the Project

1. Clone the Repository

git clone https://github.com/your-username/your-repo.git
cd your-repo

2. Set Up Virtual Environment

Create and activate a virtual environment:

python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate

3. Install Dependencies

Install the required Python packages:

pip install -r requirements.txt

4. Set Up the Database

Run the following commands to create the SQLite database and apply migrations:

python manage.py makemigrations
python manage.py migrate

5. Create a Superuser

Create an admin user for accessing the Django admin interface:

python manage.py createsuperuser

Provide a username, email (optional), and password when prompted.

6. Start the Redis Server

Ensure Redis is installed and running on 127.0.0.1:6379. Use the following command to start Redis:

redis-server

7. Run the Development Server

Start the Django development server:

python manage.py runserver

Open your browser and navigate to http://127.0.0.1:8000.

8. Access the Admin Panel

Visit http://127.0.0.1:8000/admin and log in using the superuser credentials created earlier.

Project Structure

my_project/
├── chat/               # Main chat application
├── my_project/         # Django project settings
├── templates/          # HTML templates
├── static/             # Static files (CSS, JS, Images)
├── db.sqlite3          # SQLite database file
├── manage.py           # Django management script
├── requirements.txt    # Python dependencies

Configuration Details

Redis Configuration

Make sure Redis is running locally at 127.0.0.1:6379.

Update the CHANNEL_LAYERS in settings.py if Redis is running on a different host or port.

CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {
            'hosts': [('127.0.0.1', 6379)],
        },
    },
}

ASGI Setup

Ensure the ASGI_APPLICATION setting in settings.py points to your ASGI configuration:

ASGI_APPLICATION = 'my_project.asgi.application'

Static Files

Collect static files for production:

python manage.py collectstatic

How to Contribute

Fork the repository.

Create a new branch for your feature or bugfix:

git checkout -b feature-name

Commit your changes and push them to your forked repository:

git add .
git commit -m "Description of changes"
git push origin feature-name

Create a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for more details.

Troubleshooting

Common Issues

Redis not running:
Ensure Redis is installed and running. Check its status with:

redis-cli ping

If it returns PONG, Redis is running.

WebSocket connection errors:

Ensure your ASGI_APPLICATION and CHANNEL_LAYERS are correctly configured.

Check browser developer tools for specific WebSocket errors.

Static files not loading:
Run python manage.py collectstatic and ensure your web server serves static files.

If issues persist, feel free to open an issue in the repository.

username and password for accessing appication 
username:shivampc
password:shivam456@Qwer

This steps for staring my webpage 
Installation
Prerequisites
A web browser to view the webpage.
A text editor or IDE to edit the source code.
Usage
Clone the repository:
git clone https://github.com/your-username/responsive-webpage.git
cd responsive-webpage
Open the index.html file in your browser:
open index.html
Resize your browser window to see the dynamic scaling and responsive design in action.

Project Structure
responsive-webpage






