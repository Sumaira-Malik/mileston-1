var toggleSkillsButton = document.getElementById('toggleSkills');
var skillsSection = document.getElementById('skills');
if (toggleSkillsButton && skillsSection) {
    toggleSkillsButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
}
else {
    console.error('Toggle button or skills section not found.');
}
