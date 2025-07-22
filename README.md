# Chrome-Extension-for-Time-Tracking-and-Productivity-Analytics

COMPANY: CODTECH IT SOLUTIONS

NAME: KATHEEJA ATHIFA S A

INTERN ID: CT04DG3279

DOMAIN: FULL STACK WEB DEVELOPMENT

DURATION: 4 WEEKS

MENTOR :NEELA SANTOSH

DESCRIPTION:

As part of the internship with CodTech, I was assigned the task of developing a Chrome extension titled “Time
Tracking and Productivity Analytics.” The primary goal of this task was to build a real-time browser-based tool that
monitors user activity across websites, tracks the time spent on each, and classifies them as productive or 
unproductive. The extension helps users gain insight into their online behavior, providing analytics that could be 
used to improve productivity and time management. This project was a hands-on exercise that enhanced my practical 
knowledge of Chrome extension development, backend APIs, and frontend visualization.

The Chrome extension was developed using standard web technologies such as HTML, CSS, and JavaScript. The background 
script (background.js) forms the core of the extension’s logic. It listens for browser events such as tab switching, 
page load completion, and window focus changes using Chrome’s native APIs like chrome.tabs, chrome.windows, and 
chrome.storage. When a user opens or switches to a new tab, the extension captures the domain of the website and 
starts a timer. Once the tab is closed or the user switches away, the timer stops and the time spent is calculated in seconds. This data is stored locally using chrome.storage.local.

To categorize browsing activity, websites are grouped into three categories: productive (e.g., github.com,
leetcode.com), unproductive (e.g., facebook.com, youtube.com), and neutral (any site not explicitly categorized).
This classification is used to compute productivity statistics. The extension has a simple popup interface that 
displays a quick overview of tracked time for each site. Additionally, a separate dashboard page (dashboard.html) 
can be created to show charts and graphs of the user’s activity breakdown using tools like Chart.js.

On the backend, a lightweight server was built using Node.js and Express.js. The server exposes two REST API 
endpoints: a POST /log endpoint that receives tracking data from the extension and stores it, and a GET /logs 
endpoint that returns all stored data. The backend server uses a simple activity-log.json file to persist logs, 
although it can be extended to use a database like MongoDB for long-term storage and more advanced reporting.
Middleware such as cors and express.json() was used to handle cross-origin requests and parse JSON payloads
effectively.

Development was done using Visual Studio Code (VS Code), which served as the main code editor. The extension was
tested and run using Google Chrome, with the extension loaded via chrome://extensions in Developer Mode. API testing
and debugging were done using tools like the browser’s DevTools and occasionally Postman for backend request
validation. The backend was launched locally on http://localhost:3000, and data sent from the extension was
confirmed through console logs and browser endpoints.

This project gave me a practical and comprehensive understanding of full-stack development—from browser event
handling in Chrome extensions to setting up REST APIs and local data storage. I also gained experience working with 
browser permissions, background service workers, and frontend-user interactions. It helped me understand the real
-world applications of productivity tools and how data collection and analytics can drive behavior change. This task
was a complete learning experience and is a strong addition to my portfolio, highlighting my ability to build
browser-based productivity solutions. The final working solution can now track browsing habits, classify websites,
store time logs locally and on the backend, and visualize analytics — all within a single cohesive system.

OUTPUT:

<img width="1138" height="741" alt="Image" src="https://github.com/user-attachments/assets/616712c9-cef9-4001-be1b-ad1637657e3b" />
