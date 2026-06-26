# Bidirectional Rich Text Sync Across Iframes

A browser-based application that demonstrates real-time bidirectional synchronization of a rich text editor across two isolated iframes using the `window.postMessage()` API.

This project was developed as part of the **EduChunks Engineering Intern Assessment**.

---

## 🌐 Live Demo

https://iframe-rich-text-sync-beta.vercel.app/

---

## 📂 GitHub Repository

https://github.com/sweetylinga/iframe-rich-text-sync

---

## ✨ Features

### Core Requirements

* Two independent iframes
* Rich Text Editor using `contenteditable`
* Bold formatting
* Italic formatting
* Strikethrough formatting
* Bidirectional synchronization
* `window.postMessage()` communication
* Host page acting as the message broker
* Infinite loop prevention

---

### Nice-to-Have Features Implemented

* Origin validation for incoming `postMessage` events
* Active toolbar button highlighting
* Visual synchronization indicator
* Responsive and modern user interface

---

### Bonus Features Implemented

* Real-time typing synchronization
* Live Event Log displaying synchronization events

---

## 🏗️ Architecture

```
               +----------------------+
               |      Host Page       |
               |   Message Broker     |
               +----------+-----------+
                          |
         +----------------+----------------+
         |                                 |
         |                                 |
+--------v---------+             +---------v--------+
|     Frame A      |             |     Frame B      |
| Rich Text Editor |             | Rich Text Editor |
+------------------+             +------------------+
```

The host page listens for messages from either iframe and forwards them to the opposite iframe using `window.postMessage()`.

---

## 🔄 Synchronization Flow

1. User edits text inside one iframe.
2. The iframe sends the updated HTML to the parent window.
3. The host page receives the message.
4. The host identifies the sender.
5. The host forwards the update to the opposite iframe.
6. The receiving iframe updates its editor while preventing infinite synchronization.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* DOM APIs
* `window.postMessage()`
* `contenteditable`

---

## 📁 Project Structure

```
iframe-rich-text-sync/

├── index.html
├── frame.html
├── frame.js
├── host.js
├── style.css
├── README.md
```

---

## 🚀 How to Run Locally

1. Clone the repository

```
git clone https://github.com/sweetylinga/iframe-rich-text-sync.git
```

2. Open the project folder.

3. Run using VS Code Live Server or any static web server.

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Rich Text Formatting
* Bidirectional Synchronization
* Event Log

---

## 🔮 Future Improvements

* Cursor position preservation
* Shared Undo/Redo history
* Multi-user collaborative editing
* Additional formatting options
* Rich text export/import

---

## 👩‍💻 Author

**Linga Srilaxmi**

Engineering Intern Assessment Submission

Thank you for reviewing my submission.
