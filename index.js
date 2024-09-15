// TypeScript to handle the resume and button functionalities
// Profile picture and resume content toggle
var profilePicture = document.getElementById('profile-picture');
var resumeContent = document.getElementById('resume-content');
profilePicture.addEventListener('click', function () {
    if (resumeContent.style.display === 'none' || resumeContent.style.display === '') {
        resumeContent.style.display = 'block';
    }
    else {
        resumeContent.style.display = 'none';
    }
});
// Toggle button to show/hide skills section
var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills-section');
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
// Social media button to open links
var socialMediaButton = document.getElementById('social-media');
socialMediaButton.addEventListener('click', function () {
    // Replace with your actual social media links
    window.open('https://www.linkedin.com/in/sumaira-malik-3a46372b5', '_blank');
    window.open('https://https://https://www.facebook.com/profile.php?id=61550787578585&sfnsn=scwspwa&mibextid=RUbZ1f', '_blank');
    window.open('https://github.com/Sumaira-Malik/Portfolio.git', '_blank');
});

