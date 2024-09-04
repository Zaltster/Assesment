# Assesment
# This application uses Django Backend to handle the Backend and Next.js for the Frontend.
# There is a dashboard (colored blue or green) that when you click on it will send you to the charts

# Instructions
# Ensure you have pip installed: pip is the package installer for Python by running pip --version
# Run "pip install -r requirements.txt" while inside the outermost "myproject"
# Also run "npm install"

# Run python3 manage.py runserver when inside the outermost "myproject" and then open a second terminal
# In the second terminal enter the "myfrontend" folder and run npm run dev

# to view the backend JSON data add '/api/candlestick-data/', '/api/line-chart-data/', '/api/bar-chart-data/' or '/api/pie-chart-data/' to the end of the 8000 on your localhost

# ensure that if it is not your first time running the backend server, that you make sure you are running on port 8000. If you are not, 
# run lsof -i :8000 to check your PID number and type kill -9 PIDnumber

# If everything works fine, you should be able to click dashboard (from the frontend with port 3000) and you will be able to see all four charts
