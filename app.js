const slides = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('.dot-nav button')];
const currentPage = document.getElementById('currentPage');
let activeIndex = 0;

function goToSlide(number) {
  const nextIndex = Math.max(0, Math.min(slides.length - 1, Number(number) - 1));
  slides[activeIndex].classList.remove('active');
  dots[activeIndex].classList.remove('active');
  activeIndex = nextIndex;
  slides[activeIndex].classList.add('active');
  dots[activeIndex].classList.add('active');
  currentPage.textContent = String(activeIndex + 1);
}

document.querySelectorAll('[data-go]').forEach((button) => {
  button.addEventListener('click', () => goToSlide(button.dataset.go));
});

document.getElementById('prevBtn').addEventListener('click', () => goToSlide(activeIndex));
document.getElementById('nextBtn').addEventListener('click', () => goToSlide(activeIndex + 2));
document.getElementById('printBtn').addEventListener('click', () => window.print());

document.addEventListener('keydown', (event) => {
  if (['ArrowRight', 'PageDown', ' '].includes(event.key)) goToSlide(activeIndex + 2);
  if (['ArrowLeft', 'PageUp'].includes(event.key)) goToSlide(activeIndex);
  if (event.key === 'Home') goToSlide(1);
  if (event.key === 'End') goToSlide(slides.length);
});

const levelData = {
  cl4: {
    title: 'CL4 — Skilled Execution & Associates',
    description: 'I perform defined operational, technical, administrative, or support work reliably using SOPs and guidance.',
    own: 'My task, workstation, accuracy and personal safety',
    contribute: 'Reliable execution, quality, productivity and escalation',
    roles: 'Junior supervisors, officers, executives, technicians, associates'
  },
  cl3: {
    title: 'CL3 — Frontline Leadership & Senior Specialists',
    description: 'I lead daily shift or section execution, or contribute independent specialist expertise in a professional or technical domain.',
    own: 'A shift, section, specialist domain or daily operating outcome',
    contribute: 'Problem solving, guidance, coordination, coaching and technical depth',
    roles: 'Senior supervisors, team leads, assistant managers, senior specialists'
  },
  cl2: {
    title: 'CL2 — Function & Department Leadership',
    description: 'I own and deliver departmental or functional outcomes by translating organisational direction into plans, people priorities and controls.',
    own: 'Department plans, KPIs, people, budget and cross-functional delivery',
    contribute: 'Functional performance, process improvement, team capability and business impact',
    roles: 'Managers, HODs, department heads, senior functional leaders'
  },
  cl1: {
    title: 'CL1 — Enterprise & Strategic Leadership',
    description: 'I shape company, plant, or enterprise-wide direction and remain accountable for sustainable business outcomes.',
    own: 'Enterprise direction, strategic decisions, governance and long-term sustainability',
    contribute: 'Business growth, culture, investment decisions, succession and organisational influence',
    roles: 'Plant heads, General Manager, VP, CEO and enterprise leaders'
  }
};

const detail = document.getElementById('levelDetail');
document.querySelectorAll('.level-card').forEach((card) => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.level-card').forEach((item) => item.classList.remove('selected'));
    card.classList.add('selected');
    const key = card.dataset.level;
    const data = levelData[key];
    detail.querySelector('.detail-accent').className = `detail-accent ${key}-bg`;
    detail.querySelector('h3').textContent = data.title;
    detail.querySelector('p').textContent = data.description;
    const dd = detail.querySelectorAll('dd');
    dd[0].textContent = data.own;
    dd[1].textContent = data.contribute;
    dd[2].textContent = data.roles;
  });
});

const readinessDescriptions = {
  'Performance & KPI Achievement': 'Can I show sustained delivery against the expectations of my current role?',
  'Process & Technical Capability': 'Can I independently apply the processes, tools, and technical knowledge expected at the next level?',
  'Safety & Compliance Record': 'Do my decisions and daily behaviours consistently protect people, quality, and compliance?',
  'Problem Solving & Ownership': 'Do I take ownership, solve non-routine problems, and escalate with sound judgement?',
  'Team & Stakeholder Contribution': 'Do I improve coordination, support others, and contribute beyond my individual task?',
  'Readiness Evidence & Demonstrated Capability': 'Can my manager and stakeholders point to visible examples of next-level behaviour and results?'
};

const focusTitle = document.getElementById('readinessFocus');
const focusDescription = document.getElementById('readinessDescription');
document.querySelectorAll('.readiness-wheel button').forEach((button, index) => {
  if (index === 0) button.classList.add('active');
  button.addEventListener('click', () => {
    document.querySelectorAll('.readiness-wheel button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const key = button.dataset.readiness;
    focusTitle.textContent = key;
    focusDescription.textContent = readinessDescriptions[key];
  });
});
