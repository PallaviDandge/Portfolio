// Sample projects data with images (replace URLs with your own images)
const projects = [
  {
    title: 'Personal Blog',
    description: 'A responsive blog built with HTML, CSS, and JavaScript featuring a custom CMS and SEO optimization.',
    demo: 'https://example.com/blog-demo',
    repo: 'https://github.com/johndoe/personal-blog',
    image: 'https://images.unsplash.com/photo-1502880195258-76f53166f942?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Weather App',
    description: 'A weather forecast app using OpenWeatherMap API, showing current weather and 5-day forecast with animated UI.',
    demo: 'https://example.com/weather-app',
    repo: 'https://github.com/johndoe/weather-app',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Task Manager',
    description: 'A simple task manager built with vanilla JS that allows adding, editing, and deleting tasks with local storage support.',
    demo: 'https://example.com/task-manager',
    repo: 'https://github.com/johndoe/task-manager',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80'
  }
];

// Inject projects into DOM
const projectsGrid = document.getElementById('projectsGrid');

projects.forEach(proj => {
  const card = document.createElement('div');
  card.className = 'project-card';

  card.innerHTML = `
    <img src="${proj.image}" alt="${proj.title} screenshot" />
    <h3>${proj.title}</h3>
    <p class="project-description">${proj.description}</p>
    <div class="project-links">
      <a href="${proj.demo}" target="_blank" rel="noopener noreferrer">Live Demo</a>
      <a href="${proj.repo}" target="_blank" rel="noopener noreferrer">Source Code</a>
    </div>
  `;

  projectsGrid.appendChild(card);
});

// Contact form validation and submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  let hasError = false;

  // Validate name
  const nameInput = contactForm.name.value.trim();
  if (nameInput.length < 2) {
    document.getElementById('nameError').textContent = 'Please enter your name (at least 2 characters).';
    hasError = true;
  }

  // Validate email with simple regex
  const emailInput = contactForm.email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    hasError = true;
  }

  // Validate message
  const messageInput = contactForm.message.value.trim();
  if (messageInput.length < 10) {
    document.getElementById('messageError').textContent = 'Please enter a message (at least 10 characters).';
    hasError = true;
  }

  if (!hasError) {
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  }
});
