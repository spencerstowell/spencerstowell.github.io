const projects = [
  { id: 'fidgitech', category: 'personal', name: 'FidgiTech', type: 'Product / Venture', focus: 'Product design / Prototyping', status: '2026 SIOY first place', summary: 'A modular sensory-fidget system shaped through mechanical and electrical prototyping and user feedback.', style: 'fidgitech', page: 'projects/fidgitech/', image: 'assets/FidgiTech/box_background.jpg', cardLinkLabel: 'View project record', resources: [{ label: 'Watch product demo', url: 'https://youtu.be/9AOfiAs1jwo' }, { label: 'SIOY presentation & judge Q&A', url: 'https://www.youtube.com/watch?v=TjzGAp-ncQw&t=2009s' }, { label: 'SIOY winner announcement', url: 'https://www.youtube.com/watch?v=TjzGAp-ncQw&t=6952s' }] },
  { id: 'inflatable', category: 'research', name: 'Isoperimetric Truss Robotics', type: 'PhD research', focus: 'Optimization / Long-horizon control', status: 'Current research', summary: 'Control and optimization for modular inflatable truss robots with constant-perimeter actuation.', style: 'inflatable', page: 'projects/isoperimetric-truss/', image: 'assets/Iso_truss/double_octahedron.jpg', cardLinkLabel: 'View research record' },
  { id: 'tldr', category: 'personal', name: 'TLDR', type: 'Independent build', focus: 'Controls / PCB / CAN bus', status: 'Two-wheel stage validated', summary: 'A wheel-driven inverted-pendulum platform progressing toward a legged robot, with my own mechanical design, custom PCB, six-motor CAN bus, and onboard PD control.', style: 'tldr', page: 'projects/tldr/', image: 'assets/TLDR/Static_Shot_A.jpg', videoId: 'tQ868A3I6X4', mediaLabel: 'TLDR project compilation', resources: [{ label: 'Watch TLDR project compilation', url: 'https://youtube.com/shorts/tQ868A3I6X4' }, { label: 'PCB schematic', url: 'assets/TLDR/TLDR_PCB.pdf' }, { label: 'Repository', note: 'public soon' }] },
  { id: 'dr3am', category: 'extracurricular', name: 'DR3AM', type: 'Payload challenge', focus: 'Mechanical design / Testing', status: 'Flight-tested / redesigning', summary: 'A 4U direct-ink-write additive-manufacturing payload designed to fly, test, and reveal its next engineering problems.', style: 'dr3am', page: 'projects/dr3am/', image: 'assets/DR3AM/Sand Dune Team Photos-013.jpg', mediaLabel: 'DR3AM / flight hardware', cardLinkLabel: 'View project record', resources: [{ label: 'Watch preflight print', url: 'https://youtu.be/_VuGDj883KQ' }, { label: 'Watch postflight print', url: 'https://youtu.be/ZCIdICoN_74' }, { label: 'SmallSat 2025 poster - honorable mention', url: 'assets/DR3AM/DR3AM SmallSat Poster FINAL.pdf' }] },
  { id: 'mars-rover', category: 'extracurricular', name: 'BYU Mars Rover', type: 'Team lead / 2023-24', focus: 'Systems / Communications', status: '3rd place / URC 2024', summary: 'A 24-person multidisciplinary rover effort, with technical work in communication reliability and embedded systems.', style: 'rover', page: 'projects/mars-rover/', image: 'assets/MarsRover/Desert_Rover_1.jpg', cardLinkLabel: 'View project record', resources: [{ label: 'Watch Equipment Servicing task run', url: 'https://youtu.be/koZ1n3nMXgQ' }] },
  { id: 'parallel-elastic', category: 'research', name: 'Parallel Elastic Actuation', type: 'Compliant mechanisms research', focus: 'Regression / Mechanism design', status: '1st place / BYU Biomed 2026', summary: 'Weighted least-squares regression for designing optimal prosthesis-actuator springs, with a 30% measured torque reduction on the bench.', style: 'inflatable', page: 'projects/parallel-elastic-actuation/', cardLinkLabel: 'View research record' },
  { id: 'aircraft-sim', category: 'coursework', name: 'Autonomous Aircraft Simulation', type: 'Coursework / Python', focus: 'State estimation / Control / Planning', status: 'Full autonomy stack demonstrated', summary: 'Implemented a complete autonomy stack combining state estimation, control, and path planning.', style: 'aircraft', image: 'assets/thumbs/aircraft.jpg', page: 'projects/aircraft-autonomy/', cardLinkLabel: 'View project record', resources: [{ label: 'Watch aircraft autonomy demo', url: 'https://youtube.com/shorts/roqMzAGZLbQ?feature=share' }] },
  { id: 'slam-coursework', category: 'coursework', name: 'SLAM Coursework', type: 'Robotics / Mapping', focus: 'Occupancy grid / Particle filter', status: 'Project video available', summary: 'A class-project compilation showing occupancy-grid mapping and particle-filter localization.', style: 'aircraft', image: 'assets/thumbs/slam.jpg', page: 'projects/slam-coursework/', cardLinkLabel: 'View project record', resources: [{ label: 'Watch mapping and localization compilation', url: 'https://youtu.be/Zq5YEGWMT8w' }] },
  { id: 'gnn', category: 'coursework', name: 'Graph Neural Networks', type: 'Deep Learning for Engineers', focus: 'Learned control / GNNs', status: 'Recorded presentation', summary: 'A graph neural network architecture for learned control of an isoperimetric truss robot.', style: 'gnn', image: 'assets/thumbs/gnn.jpg', cardLinkLabel: 'Watch presentation', resources: [{ label: 'Watch project presentation', url: 'https://youtu.be/Yqhf6tG1JrI' }] },
  { id: 'behavioral-cloning', category: 'coursework', name: 'Behavioral Cloning', type: 'Coursework', focus: 'Machine learning / Autonomy', status: 'Project video available', summary: 'A behavioral-cloning coursework project with a pre-recorded presentation.', style: 'cloning', image: 'assets/thumbs/behavioral-cloning.jpg', cardLinkLabel: 'Watch project video', resources: [{ label: 'Watch project video', url: 'https://youtu.be/9lpcLIU36zU' }] },
  { id: 'farmroomba', category: 'extracurricular', name: 'FarmRoomba', type: 'ASABE team lead / 2022-23', focus: 'Autonomy / Mechatronics', status: 'Competition project', summary: 'An autonomous cotton-harvesting robot combining perception, mapping, navigation, manipulation, and systems integration.', style: 'farm', page: 'projects/farmroomba/', image: 'assets/ASABE/FarmRoombaPCB.jpg', cardLinkLabel: 'View project record', resources: [{ label: 'Watch hardware test', url: 'https://youtube.com/shorts/IygcPLkYXbs' }] },
  { id: 'ball-simulator', category: 'coursework', name: '2,000 Ball Simulator', type: 'Coursework / C++', focus: 'Simulation', status: 'Project video available', summary: 'A C++ simulator modeling 2,000 balls.', style: 'simulator', image: 'assets/thumbs/ball-simulator.jpg', cardLinkLabel: 'Watch simulation video', resources: [{ label: 'Watch simulation video', url: 'https://youtube.com/shorts/kek8NMmDD9c' }] },
  { id: 'mechatronics-launcher', category: 'coursework', name: 'Mechatronics Launcher', type: 'Coursework / PIC24', focus: 'Embedded control / Mechatronics', status: 'Final competition video', summary: 'A PIC24-series microcontroller project that launched ping-pong balls at arena goals.', style: 'launcher', image: 'assets/thumbs/launcher.jpg', cardLinkLabel: 'Watch final competition video', resources: [{ label: 'Watch final competition video', url: 'https://youtube.com/shorts/T2Q7dqmBz00?feature=share' }] },
  { id: 'tactile', category: 'research', name: 'Flexible Tactile Sensors', type: 'Undergraduate research', focus: 'Experiments / Visualization', status: 'Index addition forthcoming', summary: 'Built and characterized flexible tactile sensors for soft-robot interactions.', homepage: false }
];

const grid = document.querySelector('#project-grid');

grid.innerHTML = projects.filter(project => project.homepage !== false).map((project, index) => {
  const action = project.page
    ? `<a class="card-resource" href="${project.page}">${project.cardLinkLabel || 'View project record'} →</a>`
    : project.cardLinkLabel && project.resources && project.resources[0]
      ? `<a class="card-resource" href="${project.resources[0].url}" target="_blank" rel="noreferrer">${project.cardLinkLabel} →</a>`
      : '<span class="card-pending">Project record forthcoming</span>';
  const media = project.image ? `<img src="${project.image}" alt="${project.name} project media" loading="lazy">` : '<i></i>';
  const wholeCardLink = project.page ? `<a class="project-card-link" href="${project.page}" aria-label="View ${project.name} project record"></a>` : '';
  return `<article class="project-card ${project.style}" data-category="${project.category}" id="project-${project.id}">${wholeCardLink}<div class="card-media ${project.image ? 'has-image' : ''}"><span>${String(index + 1).padStart(2, '0')}</span>${media}</div><div class="card-copy"><small>${project.category} / ${project.type}</small><h3>${project.name}</h3><p>${project.summary}</p><div><span>${project.status}</span>${action}</div></div></article>`;
}).join('');

const filterButtons = Array.from(document.querySelectorAll('.project-filters button'));
const filterStatus = document.querySelector('#project-filter-status');
function filterProjects(category) {
  const cards = Array.from(document.querySelectorAll('.project-card'));
  const visible = cards.filter(card => category === 'all' || card.dataset.category === category);
  cards.forEach(card => { card.hidden = !visible.includes(card); });
  filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
  filterStatus.textContent = category === 'all' ? `${visible.length} projects` : `${visible.length} ${category} project${visible.length === 1 ? '' : 's'}`;
}
filterButtons.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.category;
  filterProjects(category);
  const url = new URL(window.location);
  if (category === 'all') url.searchParams.delete('category'); else url.searchParams.set('category', category);
  url.hash = 'projects';
  window.history.replaceState({}, '', url);
}));
filterProjects(new URLSearchParams(window.location.search).get('category') || 'all');

document.querySelector('#year').textContent = new Date().getFullYear();

