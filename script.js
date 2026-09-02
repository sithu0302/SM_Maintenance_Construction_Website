document.addEventListener('DOMContentLoaded', () => {

  /* ================================================
     1. PROJECT DATA (Projects 1-14)
     ================================================ */
  const projectsData = [
    {
      id: 1,
      title: "Modern Two-Storey Residence",
      location: "Kegalle",
      category: "construction",
      categoryLabel: "CONSTRUCTION",
      type: "Residential Construction",
      description: "Modern residential construction project focused on practical planning, clean architectural form and quality execution.",
      images: [
        "assets/projects/project-01/01.jpg",
        "assets/projects/project-01/02.jpg",
        "assets/projects/project-01/03.jpg",
        "assets/projects/project-01/04.jpg"
      ]
    },
    {
      id: 2,
      title: "Proposed Design for 9.5 Perch",
      location: "Kukulpane, Dorawaka, Warakapola",
      category: "house-plans",
      categoryLabel: "HOUSE PLAN",
      type: "Residential House Planning",
      description: "Proposed residential design for a 9.5 perch land, developed with practical space planning, functional circulation and a modern architectural approach.",
      client: "B.G.I.P. Premawardhna",
      images: [
        "assets/projects/project-02/1.jpg",
        "assets/projects/project-02/2.jpg",
        "assets/projects/project-02/3.jpg",
        "assets/projects/project-02/4.jpg",
        "assets/projects/project-02/5.jpg",
        "assets/projects/project-02/6.jpg",
        "assets/projects/project-02/7.jpg",
        "assets/projects/project-02/8.jpg",
        "assets/projects/project-02/9.jpg",
        "assets/projects/project-02/10.jpg",
        "assets/projects/project-02/11.jpg",
        "assets/projects/project-02/12.jpg"
      ]
    },
    {
      id: 3,
      title: "Proposed Design for 7 Perch",
      location: "Uswaththa, Mainnoluwa, Dorawaka",
      category: "house-plans",
      categoryLabel: "HOUSE PLAN",
      type: "Residential House Planning",
      description: "A proposed residential design for a 7 perch property, planned with practical spaces, modern living areas and a functional three-level layout.",
      client: "S.M. Maintenance and Construction Engineering",
      details: {
        landSize: "7 Perch",
        groundFloor: "1,000 Sqft",
        firstFloor: "830 Sqft",
        secondFloor: "Roof Terrace",
        budget: "12 Million",
        groundFloorFeatures: [
          "1 Bathroom",
          "Living Area",
          "Kitchen Area",
          "Car Porch for 1 Car",
          "Courtyard Area"
        ],
        firstFloorFeatures: [
          "2 Bedrooms",
          "1 Bathroom",
          "TV Lobby",
          "Void Area",
          "Balcony Areas"
        ],
        secondFloorFeatures: [
          "Roof Terrace"
        ]
      },
      contact: {
        company: "S.M. Maintenance and Construction Engineering",
        address: "3/2 A Molamure Mawatha, Kegalle, Sri Lanka",
        email: "janith.dileepa18@gmail.com",
        phone: "+94 718814959"
      },
      images: [
        "assets/projects/project-03/1.jpg",
        "assets/projects/project-03/2.jpg",
        "assets/projects/project-03/3.jpg",
        "assets/projects/project-03/4.jpg",
        "assets/projects/project-03/5.jpg",
        "assets/projects/project-03/6.jpg",
        "assets/projects/project-03/7.jpg",
        "assets/projects/project-03/8.jpg",
        "assets/projects/project-03/9.jpg",
        "assets/projects/project-03/10.jpg",
        "assets/projects/project-03/11.jpg",
        "assets/projects/project-03/12.jpg",
        "assets/projects/project-03/13.jpg",
        "assets/projects/project-03/14.jpg",
        "assets/projects/project-03/15.jpg",
        "assets/projects/project-03/16.jpg",
        "assets/projects/project-03/17.jpg",
        "assets/projects/project-03/18.jpg",
        "assets/projects/project-03/19.jpg",
        "assets/projects/project-03/20.jpg"
      ]
    },
    {
      id: 4,
      title: "IMAX Hotel Project",
      location: "Randeniya, Kegalle",
      category: "construction",
      categoryLabel: "CONSTRUCTION",
      type: "Hotel Project",
      description: "A hotel development project at Randeniya, Kegalle, undertaken with a focus on practical planning, quality construction and functional hospitality spaces.",
      client: "IMAX Group",
      images: [
        "assets/projects/project-04/1.jpg",
        "assets/projects/project-04/2.jpg",
        "assets/projects/project-04/3.jpg",
        "assets/projects/project-04/4.jpg",
        "assets/projects/project-04/5.jpg",
        "assets/projects/project-04/6.jpg",
        "assets/projects/project-04/7.jpg",
        "assets/projects/project-04/8.jpg",
        "assets/projects/project-04/9.jpg",
        "assets/projects/project-04/10.jpg",
        "assets/projects/project-04/11.jpg",
        "assets/projects/project-04/12.jpg",
        "assets/projects/project-04/13.jpg",
        "assets/projects/project-04/14.jpg",
        "assets/projects/project-04/15.jpg",
        "assets/projects/project-04/16.jpg",
        "assets/projects/project-04/17.jpg",
        "assets/projects/project-04/18.jpg",
        "assets/projects/project-04/19.jpg"
      ]
    },
    {
      id: 5,
      title: "Interior Project at Kegalle",
      location: "Thalewela, Hettimulla, Kegalle",
      category: "renovation",
      categoryLabel: "RENOVATION",
      type: "Interior Design & Residential Planning",
      description: "Proposed interior and residential design for a 15 perch property in Thalewela, Hettimulla, Kegalle. The project focuses on practical space planning, quality finishes and a functional living environment.",
      client: "Mr. M.N.S. Algewaththa",
      company: "Government-Registered Construction Company",
      details: {
        landSize: "15 Perch",
        groundFloor: "1,200 Sqft"
      },
      images: [
        "assets/projects/project-05/1.jpg",
        "assets/projects/project-05/2.jpg",
        "assets/projects/project-05/3.jpg",
        "assets/projects/project-05/4.jpg",
        "assets/projects/project-05/5.jpg",
        "assets/projects/project-05/6.jpg",
        "assets/projects/project-05/7.jpg",
        "assets/projects/project-05/8.jpg",
        "assets/projects/project-05/9.jpg",
        "assets/projects/project-05/10.jpg",
        "assets/projects/project-05/11.jpg",
        "assets/projects/project-05/12.jpg",
        "assets/projects/project-05/13.jpg",
        "assets/projects/project-05/14.jpg",
        "assets/projects/project-05/15.jpg",
        "assets/projects/project-05/16.jpg",
        "assets/projects/project-05/17.jpg",
        "assets/projects/project-05/18.jpg",
        "assets/projects/project-05/19.jpg",
        "assets/projects/project-05/20.jpg",
        "assets/projects/project-05/21.jpg",
        "assets/projects/project-05/22.jpg",
        "assets/projects/project-05/23.jpg"
      ]
    },
    {
      id: 6,
      title: "Interior Project at Hikkaduwa",
      location: "Hikkaduwa, Sri Lanka",
      category: "renovation",
      categoryLabel: "RENOVATION",
      type: "Interior Design",
      description: "An interior design project at Hikkaduwa focused on creating a functional, comfortable and visually appealing interior environment with a contemporary approach.",
      images: [
        "assets/projects/project-06/1.jpg",
        "assets/projects/project-06/2.jpg",
        "assets/projects/project-06/3.jpg",
        "assets/projects/project-06/4.jpg",
        "assets/projects/project-06/5.jpg",
        "assets/projects/project-06/6.jpg",
        "assets/projects/project-06/7.jpg",
        "assets/projects/project-06/8.jpg",
        "assets/projects/project-06/9.jpg",
        "assets/projects/project-06/10.jpg",
        "assets/projects/project-06/11.jpg",
        "assets/projects/project-06/12.jpg",
        "assets/projects/project-06/13.jpg",
        "assets/projects/project-06/14.jpg",
        "assets/projects/project-06/15.jpg",
        "assets/projects/project-06/16.jpg",
        "assets/projects/project-06/17.jpg",
        "assets/projects/project-06/18.jpg"
      ]
    },
    {
      id: 7,
      title: "Hikkaduwa Project",
      location: "Hikkaduwa, Sri Lanka",
      category: "construction",
      categoryLabel: "CONSTRUCTION",
      type: "Construction Project",
      description: "A construction project at Hikkaduwa undertaken by S.M. Maintenance & Construction Engineering, with a focus on quality workmanship, practical execution and sustainable construction solutions.",
      client: "S.M. Maintenance & Construction Engineering",
      images: [
        "assets/projects/project-07/1.jpg",
        "assets/projects/project-07/2.jpg",
        "assets/projects/project-07/3.jpg",
        "assets/projects/project-07/4.jpg",
        "assets/projects/project-07/5.jpg",
        "assets/projects/project-07/6.jpg",
        "assets/projects/project-07/7.jpg",
        "assets/projects/project-07/8.jpg",
        "assets/projects/project-07/9.jpg",
        "assets/projects/project-07/10.jpg",
        "assets/projects/project-07/11.jpg",
        "assets/projects/project-07/12.jpg",
        "assets/projects/project-07/13.jpg",
        "assets/projects/project-07/14.jpg",
        "assets/projects/project-07/15.jpg",
        "assets/projects/project-07/16.jpg",
        "assets/projects/project-07/17.jpg",
        "assets/projects/project-07/18.jpg",
        "assets/projects/project-07/19.jpg",
        "assets/projects/project-07/20.jpg",
        "assets/projects/project-07/21.jpg"
      ]
    },
    {
      id: 8,
      title: "Two-Storey House Project",
      location: "Rambukkana, Sri Lanka",
      category: "construction",
      categoryLabel: "CONSTRUCTION",
      type: "Residential Construction",
      description: "A two-storey residential house project at Rambukkana, designed with practical planning, functional living spaces and a modern architectural approach.",
      images: [
        "assets/projects/project-08/1.jpg",
        "assets/projects/project-08/2.jpg",
        "assets/projects/project-08/3.jpg",
        "assets/projects/project-08/4.jpg",
        "assets/projects/project-08/5.jpg",
        "assets/projects/project-08/6.jpg",
        "assets/projects/project-08/7.jpg",
        "assets/projects/project-08/8.jpg",
        "assets/projects/project-08/9.jpg",
        "assets/projects/project-08/10.jpg",
        "assets/projects/project-08/11.jpg",
        "assets/projects/project-08/12.jpg",
        "assets/projects/project-08/13.jpg",
        "assets/projects/project-08/14.jpg",
        "assets/projects/project-08/15.jpg",
        "assets/projects/project-08/16.jpg",
        "assets/projects/project-08/17.jpg",
        "assets/projects/project-08/18.jpg",
        "assets/projects/project-08/19.jpg",
        "assets/projects/project-08/20.jpg"
      ]
    },
    {
      id: 9,
      title: "Interior Project at Warakapola",
      location: "Warakapola, Sri Lanka",
      category: "renovation",
      categoryLabel: "RENOVATION",
      type: "Interior Design",
      description: "An interior design project at Warakapola focused on modern aesthetics, practical space utilization, comfortable living and quality interior finishes.",
      images: [
        "assets/projects/project-09/1.jpg",
        "assets/projects/project-09/2.jpg",
        "assets/projects/project-09/3.jpg",
        "assets/projects/project-09/4.jpg",
        "assets/projects/project-09/5.jpg",
        "assets/projects/project-09/6.jpg",
        "assets/projects/project-09/7.jpg",
        "assets/projects/project-09/8.jpg",
        "assets/projects/project-09/9.jpg",
        "assets/projects/project-09/10.jpg",
        "assets/projects/project-09/11.jpg",
        "assets/projects/project-09/12.jpg",
        "assets/projects/project-09/13.jpg"
      ]
    },
    {
      id: 10,
      title: "Interior Project at Warakapola II",
      location: "Warakapola, Sri Lanka",
      category: "renovation",
      categoryLabel: "RENOVATION",
      type: "Interior Design",
      description: "An interior design project at Warakapola focused on creating a modern, functional and comfortable interior with a clean architectural character and quality finishes.",
      images: [
        "assets/projects/project-10/1.jpg",
        "assets/projects/project-10/2.jpg",
        "assets/projects/project-10/3.jpg",
        "assets/projects/project-10/4.jpg",
        "assets/projects/project-10/5.jpg",
        "assets/projects/project-10/6.jpg",
        "assets/projects/project-10/7.jpg",
        "assets/projects/project-10/8.jpg",
        "assets/projects/project-10/9.jpg",
        "assets/projects/project-10/10.jpg"
      ]
    },
    {
      id: 11,
      title: "Decorative Wall Project",
      location: "Molamure Mawatha, Kegalle, Sri Lanka",
      category: "construction",
      categoryLabel: "CONSTRUCTION",
      type: "Wall Decoration & Interior Works",
      description: "A decorative wall project at the Kegalle site, focusing on enhancing the interior character through modern wall finishes, detailing and practical design solutions.",
      images: [
        "assets/projects/project-11/1.jpg",
        "assets/projects/project-11/2.jpg",
        "assets/projects/project-11/3.jpg",
        "assets/projects/project-11/4.jpg",
        "assets/projects/project-11/5.jpg"
      ]
    },
    {
      id: 12,
      title: "Two-Storey Interior Project",
      location: "Rambukkana, Sri Lanka",
      category: "renovation",
      categoryLabel: "RENOVATION",
      type: "Interior Design",
      description: "A two-storey interior project at Rambukkana focused on modern interior styling, practical space utilization, comfortable living areas and quality finishes.",
      images: [
        "assets/projects/project-12/1.jpg",
        "assets/projects/project-12/2.jpg",
        "assets/projects/project-12/3.jpg",
        "assets/projects/project-12/4.jpg",
        "assets/projects/project-12/5.jpg",
        "assets/projects/project-12/6.jpg",
        "assets/projects/project-12/7.jpg"
      ]
    },
    {
      id: 13,
      title: "Proposed Design for 12 Perch",
      location: "Rambukkana, Sri Lanka",
      category: "house-plans",
      categoryLabel: "HOUSE PLAN",
      type: "Residential House Planning",
      description: "A proposed residential design for a 12 perch property in Rambukkana, planned with practical space utilization, functional circulation and a contemporary architectural approach.",
      details: {
        landSize: "12 Perch",
        groundFloor: "1,100 Sqft"
      },
      images: [
        "assets/projects/project-13/1.jpg",
        "assets/projects/project-13/2.jpg",
        "assets/projects/project-13/3.jpg",
        "assets/projects/project-13/4.jpg",
        "assets/projects/project-13/5.jpg",
        "assets/projects/project-13/6.jpg",
        "assets/projects/project-13/7.jpg",
        "assets/projects/project-13/8.jpg",
        "assets/projects/project-13/9.jpg",
        "assets/projects/project-13/10.jpg"
      ]
    },
    {
      id: 14,
      title: "Proposed Design for 17 Perch",
      location: "Bemmullegedara, Gampaha, Sri Lanka",
      category: "house-plans",
      categoryLabel: "HOUSE PLAN",
      type: "Residential House Planning",
      description: "A proposed residential design for a 17 perch property in Bemmullegedara, Gampaha, planned with practical space utilization, functional circulation and a contemporary architectural approach.",
      details: {
        landSize: "17 Perch",
        groundFloor: "1,200 Sqft"
      },
      images: [
        "assets/projects/project-14/1.jpg",
        "assets/projects/project-14/2.jpg",
        "assets/projects/project-14/3.jpg",
        "assets/projects/project-14/4.jpg",
        "assets/projects/project-14/5.jpg",
        "assets/projects/project-14/6.jpg",
        "assets/projects/project-14/7.jpg",
        "assets/projects/project-14/8.jpg",
        "assets/projects/project-14/9.jpg",
        "assets/projects/project-14/10.jpg",
        "assets/projects/project-14/11.jpg",
        "assets/projects/project-14/12.jpg",
        "assets/projects/project-14/13.jpg",
        "assets/projects/project-14/14.jpg",
        "assets/projects/project-14/15.jpg",
        "assets/projects/project-14/16.jpg",
        "assets/projects/project-14/17.jpg",
        "assets/projects/project-14/18.jpg",
        "assets/projects/project-14/19.jpg",
        "assets/projects/project-14/20.jpg",
        "assets/projects/project-14/21.jpg"
      ]
    }
  ];

  /* ================================================
     2. DYNAMIC PROJECT GRID RENDER & FILTERING
     ================================================ */
  const projectGrid = document.getElementById('projectGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderProjects(filter = 'all') {
    if (!projectGrid) return;

    projectGrid.innerHTML = '';
    const filteredData = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    filteredData.forEach((project, index) => {
      const card = document.createElement('article');
      card.className = 'project-card reveal revealed';
      card.setAttribute('data-id', project.id);
      
      const pNum = String(index + 1).padStart(2, '0');
      const categoryTag = project.categoryLabel || project.type || 'PROJECT';
      
      card.innerHTML = `
        <img src="${project.images[0]}" alt="${project.title}" loading="lazy">
        <div class="project-overlay">
          <span class="project-no">${pNum} / ${categoryTag}</span>
          <h3>${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-open">VIEW GALLERY <span>↗</span></div>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(project.id));
      projectGrid.appendChild(card);
    });
  }

  // Filter Buttons Click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const filterValue = e.target.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });

  // Initial Load Projects
  renderProjects();

  /* ================================================
     3. LIGHTBOX GALLERY LOGIC
     ================================================ */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDescription');
  const lightboxMeta = document.getElementById('lightboxMeta');
  const galleryCounter = document.getElementById('galleryCounter');
  const lightboxThumbs = document.getElementById('lightboxThumbs');

  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  const projPrevBtn = document.getElementById('projectPrev');
  const projNextBtn = document.getElementById('projectNext');

  let currentProjectIndex = 0;
  let currentImageIndex = 0;

  function openLightbox(projectId) {
    currentProjectIndex = projectsData.findIndex(p => p.id === projectId);
    if (currentProjectIndex === -1) return;
    
    currentImageIndex = 0;
    updateLightboxContent();
    if (lightbox) {
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    }
    document.body.classList.add('locked');
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('locked');
  }

  function updateLightboxContent() {
    const project = projectsData[currentProjectIndex];
    if (!project || !lightboxImg) return;

    lightboxImg.src = project.images[currentImageIndex];
    lightboxImg.alt = project.title;
    if (lightboxTitle) lightboxTitle.textContent = project.title;
    if (lightboxDesc) lightboxDesc.textContent = project.description;

    // Display Category, Type and Location in metadata
    let metaText = project.categoryLabel || project.category.toUpperCase();
    if (project.location) metaText += ` | ${project.location}`;
    if (project.client) metaText += ` | Client: ${project.client}`;
    if (lightboxMeta) lightboxMeta.textContent = metaText;

    if (galleryCounter) galleryCounter.textContent = `${currentImageIndex + 1} / ${project.images.length}`;

    // Render Thumbnails
    if (lightboxThumbs) {
      lightboxThumbs.innerHTML = '';
      project.images.forEach((imgSrc, idx) => {
        const thumbBtn = document.createElement('button');
        if (idx === currentImageIndex) thumbBtn.classList.add('active');
        thumbBtn.innerHTML = `<img src="${imgSrc}" alt="thumb">`;
        thumbBtn.addEventListener('click', () => {
          currentImageIndex = idx;
          updateLightboxContent();
        });
        lightboxThumbs.appendChild(thumbBtn);
      });
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-close')) closeLightbox();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const images = projectsData[currentProjectIndex].images;
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      updateLightboxContent();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const images = projectsData[currentProjectIndex].images;
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateLightboxContent();
    });
  }

  if (projPrevBtn) {
    projPrevBtn.addEventListener('click', () => {
      currentProjectIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
      currentImageIndex = 0;
      updateLightboxContent();
    });
  }

  if (projNextBtn) {
    projNextBtn.addEventListener('click', () => {
      currentProjectIndex = (currentProjectIndex + 1) % projectsData.length;
      currentImageIndex = 0;
      updateLightboxContent();
    });
  }

  // Lightbox Keyboard Navigation (Arrow Keys & ESC)
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
      const images = projectsData[currentProjectIndex].images;
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      updateLightboxContent();
    }
    if (e.key === 'ArrowRight') {
      const images = projectsData[currentProjectIndex].images;
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateLightboxContent();
    }
  });

  /* ================================================
     4. SERVICE DISCUSS BUTTON - AUTO SELECT SERVICE & SCROLL
     ================================================ */
  const discussBtns = document.querySelectorAll('.discuss-btn');
  const serviceSelect = document.getElementById('formService') || document.querySelector('select[name="service"]');
  const messageTextarea = document.getElementById('formMessage') || document.querySelector('textarea[name="message"]');
  const contactSection = document.getElementById('contact');

  if (discussBtns.length > 0) {
    discussBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selectedService = btn.getAttribute('data-service');

        // 1. Service Dropdown auto select කිරීම
        if (selectedService && serviceSelect) {
          serviceSelect.value = selectedService;
        }

        // 2. Message පෙට්ටියට මූලික විස්තර පිරවීම
        if (selectedService && messageTextarea) {
          messageTextarea.value = `Hi, I am interested in your "${selectedService}" service. Please provide me more details regarding options and pricing.`;
        }

        // 3. Contact Form එක වෙත Smooth Scroll වීම
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /* ================================================
     5. MULTI-PAGE ACTIVE NAV HIGHLIGHT
     ================================================ */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.desktop-nav a, .mobile-nav a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ================================================
     6. HEADER SCROLL & MOBILE MENU TOGGLE + AUTO-CLOSE
     ================================================ */
  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });
  }

  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  function closeMobileMenu() {
    if (menuToggle && mobileNav) {
      menuToggle.classList.remove('open');
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.classList.toggle('open');
      mobileNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open);
    });

    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  /* ================================================
     7. BACK TO TOP
     ================================================ */
  const backTop = document.getElementById('backTop');
  if (backTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) backTop.classList.add('visible');
      else backTop.classList.remove('visible');
    });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ================================================
     8. SCROLL REVEAL ANIMATION
     ================================================ */
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  }

  /* ================================================
     9. WHATSAPP CONTACT FORM SUBMISSION
     ================================================ */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = this.elements['name'] ? this.elements['name'].value : '';
      const phone = this.elements['phone'] ? this.elements['phone'].value : '';
      const email = this.elements['email'] ? this.elements['email'].value : '';
      const service = this.elements['service'] ? this.elements['service'].value : '';
      const message = this.elements['message'] ? this.elements['message'].value : '';

      const waMessage = `*NEW PROJECT ENQUIRY*%0A%0A` +
                        `*Name:* ${encodeURIComponent(name)}%0A` +
                        `*Phone:* ${encodeURIComponent(phone)}%0A` +
                        `*Email:* ${encodeURIComponent(email)}%0A` +
                        `*Service:* ${encodeURIComponent(service)}%0A` +
                        `*Message:* ${encodeURIComponent(message)}`;

      const phoneNumber = "94718814959";
      const waUrl = `https://wa.me/${phoneNumber}?text=${waMessage}`;
      window.open(waUrl, '_blank');
    });
  }

  /* ================================================
     10. CAREERS FORM - POSITION AUTO SELECT
     ================================================ */
  const applyBtns = document.querySelectorAll('.apply-position');
  const posSelect = document.querySelector('select[name="position"]');
  const careerForm = document.getElementById('careerForm');

  if (applyBtns.length > 0 && posSelect && careerForm) {
    applyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pos = e.target.getAttribute('data-position');
        if (pos) {
          posSelect.value = pos;
          careerForm.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

});