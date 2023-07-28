#!/bin/bash

# 1. Display operating system details
uname -a

# 2. Display memory information
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    free -h
elif [[ "$OSTYPE" == "darwin"* ]]; then
    vm_stat
fi

# 3. Display disk space information
df -h .

# 4. Display current directory
pwd

# List all installed Python packages
echo "List of installed Python packages:"
pip list

# 5. Uninstall packages from requirements.txt with mentioned versions
# if [ -f "requirements.txt" ]; then
#     while IFS= read -r line; do
#         package_name=$(echo "$line" | cut -d'=' -f1)
#         package_version=$(echo "$line" | cut -d'=' -f2)
#         if pip show "$package_name" | grep -q "Version: $package_version"; then
#             echo "Uninstalling existing package $package_name==$package_version"
#             pip uninstall -y "$package_name"=="$package_version"
#         fi
#     done < requirements.txt
# fi

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

# if [ -f "requirements.txt" ]; then
#     while IFS= read -r line; do
#         package_name=$(echo "$line" | cut -d'=' -f1)
#         package_version=$(echo "$line" | cut -d'=' -f2)
#         if pip show "$package_name" | grep -q "Version: $package_version"; then
#             echo "Package $package_name==$package_version already installed."
#         else
#             pip install "$package_name==$package_version"
#         fi
#     done < requirements.txt
# fi

# 9. Run Django migrations and collect static files
python3.9 manage.py migrate
python3.9 manage.py collectstatic --no-input







echo "End"



# build_files.sh
# pip install -r requirements.txt

# make migrations
# python3.9 manage.py migrate 
# python3.9 manage.py collectstatic


# #new try
# pip install -r requirements.txt
# python3.9 manage.py migrate 
# python3.9 manage.py collectstatic --no-input

echo "End after commented code"