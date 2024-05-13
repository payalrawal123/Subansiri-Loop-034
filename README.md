# Project Title

LearnLang

## Introduction
Introducing Learnlang,built for masai construct week block 35 .Learnlang is a learning website.it is a fully functional ed-tech platform that enables users to create, consume, and rate educational content.user-friendly features including robust registration and authentication.
## Project Type

MERN FullStack

## Deplolyed App

Frontend: https://subansiri-loop-034.vercel.app/ <br>
Backend: https://subansiri-loop-034-5cnv.onrender.com/

## Directory Structure

```bash
Subansiri-Loop-034
├── README.md
├── backend/
│   ├── .gitignore
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── database.js
│   │   └── rajorpay.js
│   ├── controllers/
│   │   ├── auth.js
│   │   ├── category.js
│   │   ├── course.js
│   │   ├── courseProgress.js
│   │   ├── payments.js
│   │   ├── profile.js
│   │   ├── ratingAndReview.js
│   │   ├── resetPassword.js
│   │   ├── section.js
│   │   └── subSection.js
│   ├── index.js
│   ├── mail/
│   │   └── templates/
│   │   │   ├── courseEnrollmentEmail.js
│   │   │   ├── emailVerificationTemplate.js
│   │   │   └── passwordUpdate.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── OTP.js
│   │   ├── category.js
│   │   ├── course.js
│   │   ├── courseProgress.js
│   │   ├── profile.js
│   │   ├── ratingAndReview.js
│   │   ├── section.js
│   │   ├── subSection.js
│   │   └── user.js
│   ├── package-lock.json
│   ├── package.json
│   ├── routes/
│   │   ├── course.js
│   │   ├── payments.js
│   │   ├── profile.js
│   │   └── user.js
│   └── utils/
│   │   ├── imageUploader.js
│   │   ├── mailSender.js
│   │   └── secToDuration.js
└── frontend/
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── README.md
│   ├── data/
│   │   ├── countrycode.json
│   │   ├── dashboard-links.js
│   │   ├── footer-links.js
│   │   ├── homepage-explore.js
│   │   └── navbar-links.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.cjs
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets/
│   │   │   ├── Images/
│   │   │   │   ├── Compare_with_others.png
│   │   │   │   ├── Compare_with_others.svg
│   │   │   │   ├── FoundingStory.png
│   │   │   │   ├── Instructor.png
│   │   │   │   ├── Know_your_progress.png
│   │   │   │   ├── Know_your_progress.svg
│   │   │   │   ├── Plan_your_lessons.png
│   │   │   │   ├── Plan_your_lessons.svg
│   │   │   │   ├── TimelineImage.png
│   │   │   │   ├── aboutus1.webp
│   │   │   │   ├── aboutus2.webp
│   │   │   │   ├── aboutus3.webp
│   │   │   │   ├── banner.mp4
│   │   │   │   ├── bghome.svg
│   │   │   │   ├── boxoffice.png
│   │   │   │   ├── frame.png
│   │   │   │   ├── login.png
│   │   │   │   ├── login2.webp
│   │   │   │   ├── login3.png
│   │   │   │   ├── login4.png
│   │   │   │   ├── random bg img/
│   │   │   │   │   ├── coding bg1.jpg
│   │   │   │   │   ├── coding bg10.jpg
│   │   │   │   │   ├── coding bg11.jpg
│   │   │   │   │   ├── coding bg2.jpg
│   │   │   │   │   ├── coding bg3.jpg
│   │   │   │   │   ├── coding bg4.jpg
│   │   │   │   │   ├── coding bg5.jpg
│   │   │   │   │   ├── coding bg6.jpeg
│   │   │   │   │   ├── coding bg7.jpg
│   │   │   │   │   ├── coding bg8.jpeg
│   │   │   │   │   └── coding bg9.jpg
│   │   │   │   ├── signup.png
│   │   │   │   ├── signup2.webp
│   │   │   │   ├── signup3.png
│   │   │   │   ├── teacher.png
│   │   │   │   ├── teacher2.png
│   │   │   │   └── teacher3.png
│   │   │   ├── Logo/
│   │   │   │   ├── Logo-Full-Dark.png
│   │   │   │   ├── Logo-Full-Light.png
│   │   │   │   ├── Logo-Small-Dark.png
│   │   │   │   ├── Logo-Small-Light.png
│   │   │   │   ├── learnlang.png
│   │   │   │   └── rzp_logo.png
│   │   │   ├── TimeLineLogo/
│   │   │   │   ├── Logo1.svg
│   │   │   │   ├── Logo2.svg
│   │   │   │   ├── Logo3.svg
│   │   │   │   └── Logo4.svg
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── ConfirmationModal.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── IconBtn.jsx
│   │   │   │   ├── Img.jsx
│   │   │   │   ├── Loading.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── RatingStars.jsx
│   │   │   │   ├── ReviewSlider.jsx
│   │   │   │   ├── Tab.jsx
│   │   │   │   ├── chatBot.jsx
│   │   │   │   └── motionFrameVarients.js
│   │   │   └── core/
│   │   │   │   ├── AboutPage/
│   │   │   │   │   ├── ContactFormSection.jsx
│   │   │   │   │   ├── LearningGrid.jsx
│   │   │   │   │   ├── Quote.jsx
│   │   │   │   │   └── Stats.jsx
│   │   │   │   ├── Auth/
│   │   │   │   │   ├── LoginForm.jsx
│   │   │   │   │   ├── MobileProfileDropDown.jsx
│   │   │   │   │   ├── OpenRoute.jsx
│   │   │   │   │   ├── ProfileDropDown.jsx
│   │   │   │   │   ├── ProtectedRoute.jsx
│   │   │   │   │   ├── SignupForm.jsx
│   │   │   │   │   └── Template.jsx
│   │   │   │   ├── Catalog/
│   │   │   │   │   ├── Course_Card.jsx
│   │   │   │   │   └── Course_Slider.jsx
│   │   │   │   ├── ContactPage/
│   │   │   │   │   ├── ContactDetails.jsx
│   │   │   │   │   ├── ContactForm.jsx
│   │   │   │   │   └── ContactUsForm.jsx
│   │   │   │   ├── Course/
│   │   │   │   │   ├── CourseAccordionBar.jsx
│   │   │   │   │   ├── CourseDetailsCard.jsx
│   │   │   │   │   └── CourseSubSectionAccordion.jsx
│   │   │   │   ├── Dashboard/
│   │   │   │   │   ├── AddCourse/
│   │   │   │   │   │   ├── AddCourse.jsx
│   │   │   │   │   │   ├── CourseBuilder/
│   │   │   │   │   │   │   ├── CourseBuilderForm.jsx
│   │   │   │   │   │   │   ├── NestedView.jsx
│   │   │   │   │   │   │   └── SubSectionModal.jsx
│   │   │   │   │   │   ├── CourseInformation/
│   │   │   │   │   │   ├── PublishCourse/
│   │   │   │   │   │   ├── RenderSteps.jsx
│   │   │   │   │   │   └── Upload.jsx
│   │   │   │   │   ├── Cart/
│   │   │   │   │   ├── EditCourse/
│   │   │   │   │   ├── EnrolledCourses.jsx
│   │   │   │   │   ├── Instructor.jsx
│   │   │   │   │   ├── InstructorCourses/
│   │   │   │   │   ├── InstructorDashboard/
│   │   │   │   │   ├── MyCourses.jsx
│   │   │   │   │   ├── MyProfile.jsx
│   │   │   │   │   ├── Settings/
│   │   │   │   │   ├── Sidebar.jsx
│   │   │   │   │   └── SidebarLink.jsx
│   │   │   │   ├── HomePage/
│   │   │   │   └── ViewCourse/
│   │   ├── hooks/
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages/
│   │   ├── reducer/
│   │   ├── services/
│   │   ├── slices/
│   │   └── utils/
│   ├── tailwind.config.cjs
│   └── vite.config.js
```

## Video Walkthrough of the project
<a href="https://drive.google.com/file/d/1JGyjXze1eX8cO5SHLI5fS1hgYAv4iVcu/view" target="_blank">Presentation Video</a>


## Features
- LearnLang: A dynamic learning platform designed for students and instructors alike.
- Features robust user and admin registration/authentication functionalities.
- Enables CRUD operations for both students and instructors.
- Incorporates a chatbot for enhanced user interaction.
- Includes a convenient scroll-to-top feature for seamless navigation.
- Allows students to purchase courses and submit reviews effortlessly.
- Tech stack: HTML, CSS, React, Tailwind, MongoDB, Node.js.
- My responsibilities: Developed Customer and Category modules, managed exceptions and validations,  implemented Spring Security, and maintained the GitHub repository.
- Collaborative project completed by a team of four members within five days.
## design decisions or assumptions

## Installation & Getting started

```bash
clone the repo
cd into Subansiri-Loop-034
npm install
```


## Usage

Provide instructions and examples on how to use your project.

```bash
npm install
npm run server (for backend)
npm run dev (for frontend)
```

#### Pictures
![dark theme](./frontend/src//assets/sr1.png)


![dark theme](./frontend/src//assets/sr2.png)

## Credentials

Teacher Credentials

```bash
Teacher ~ furqanspn@gmail.com
password ~ furqan@123
```

student Credential

```Bash
Student ~ zeeshanahmad6871@gmail.com
Password ~ zeeshan@123
```

## API Endpoints

## Technology Stack
List and provide a brief overview of the technologies used in the project.

- HTML
- CSS
- React
- MongoDB
- NodeJS
- Tailwind


