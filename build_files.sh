#!/bin/bash

# List all installed Python packages
echo "List of installed Python packages:"
pip list

echo "current path"
pwd

# 6. Create virtualenv "venv" if not exist
if [ ! -d "venv" ]; then
    python3.9 -m venv venv
    echo "Virtual environment 'venv' created."
fi

echo "echo current path after deployment"
pwd 

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

echo "Setup complete"
