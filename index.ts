const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement | null;
const skillsSection = document.getElementById('skills') as HTMLElement | null;

if (toggleSkillsButton && skillsSection) {
    toggleSkillsButton.addEventListener('click', () => {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    });
} else {
    console.error('Toggle button or skills section not found.');
}
