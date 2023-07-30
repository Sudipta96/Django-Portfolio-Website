#!/bin/bash

# List all installed Python packages
echo "List of installed Python packages:"
pip list



# 6. Create virtualenv "venv" if not exist
if [ ! -d "venv" ]; then
    python3.9 -m venv venv
    echo "Virtual environment 'venv' created."
fi

# 7. Activate the virtual environment
source venv/bin/activate
echo "Virtual environment 'venv' activated."

python3.9 -m pip install --upgrade pip
echo "pip upgraded"

# 8. Install packages from requirements.txt
pip install -r requirements.txt

# 9. Run Django migrations and collect static files
python3.9 manage.py migrate
python3.9 manage.py collectstatic --no-input

echo "current path"
pwd
# echo "trying to list out /vercel/path0/ directory"
# ls -alh /vercel/path0/


echo "trying to list out directory under /var/task directory"
find /var/task -type f -ls

# creating media folder inside /var/task
echo "creating media folder inside /var/task"
sudo mkdir /var/task/media

# echo "checking media folder is created inside /var/task/ directory or not"
find /var/task -type d -ls

# changing permission of /var/task/media directory
echo "changing permission of /var/task/media directory"
sudo chmod -R 777 /var/task/media

# echo "checking media folder permissions after changing permissions"
find /var/task -type d -ls

echo "Setup complete"
