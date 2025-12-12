document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    fadeElements.forEach(el => observer.observe(el));

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.global-nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced Card Hover Effects
    const cards = document.querySelectorAll('.service-card, .testimonial-card, .brand-logo');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Form Enhancement
    const form = document.querySelector('.contact-form');
    if (form) {
        const inputs = form.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            input.addEventListener('focus', function () {
                this.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', function () {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            // Visual feedback
            submitBtn.textContent = 'Enviando...';
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                submitBtn.textContent = '¡Enviado!';
                submitBtn.style.background = '#28a745';

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    form.reset();
                }, 2000);
            }, 1500);
        });
    }

    // Forzar navbar negro desde el inicio
    const nav = document.querySelector('.global-nav');
    if (nav) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    }
    
    // Forzar texto blanco en navegación
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.style.color = 'white';
    });

    // Logo y menu ocultos inicialmente, aparecen al hacer scroll
    const logo = document.querySelector('.nav-logo');
    const navList = document.querySelector('.nav-list');
    
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transition = 'opacity 0.8s ease';
    }
    
    if (navList) {
        navList.style.opacity = '0';
        navList.style.transition = 'opacity 0.8s ease';
    }

    // Efecto de scroll para mostrar/ocultar logo y menu
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            if (logo) logo.style.opacity = '1';
            if (navList) navList.style.opacity = '1';
        } else {
            if (logo) logo.style.opacity = '0';
            if (navList) navList.style.opacity = '0';
        }
    });

    // Parallax effect for hero - DISABLED
    // const heroSection = document.querySelector('.hero-section');
    // if (heroSection) {
    //     window.addEventListener('scroll', () => {
    //         const scrolled = window.pageYOffset;
    //         const parallaxSpeed = 0.5;
    //         heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    //     });
    // }

    // Add loading animation delay for staggered effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });

    // Button ripple effect
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Inicializar Rack 3D con Three.js después de que las librerías se carguen
    setTimeout(() => {
        console.log('Intentando inicializar rack...');
        initIAMETRack3D();
    }, 100);

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .form-group.focused input,
        .form-group.focused select,
        .form-group.focused textarea {
            border-color: var(--accent-color);
            background-color: white;
        }
        
        .btn-small {
            padding: 8px 16px;
            font-size: 14px;
        }
        
        .modal-actions {
            margin-top: 20px;
            display: flex;
            gap: 10px;
            justify-content: center;
        }
        
        .status-info {
            margin: 15px 0;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 6px;
            font-size: 14px;
        }
    `;
    document.head.appendChild(style);
});

// === RACK 3D IAMET CON THREE.JS - VERSIÓN MEJORADA ===
function initIAMETRack3D() {
    console.log('Función initIAMETRack3D llamada');
    
    // Verificar si Three.js está disponible
    if (typeof THREE === 'undefined') {
        console.error('Three.js no disponible');
        return;
    }
    console.log('Three.js disponible');
    
    const container = document.getElementById('iamet-rack-container');
    const loader = document.getElementById('rack-loader');

    if (!container) {
        console.error('Container no encontrado');
        return;
    }
    console.log('Container encontrado');

    console.log('Creando sceneConfig...');
    const sceneConfig = {
        width: container.offsetWidth,
        height: container.offsetHeight,
    };
    console.log('SceneConfig:', sceneConfig);

    let scene, camera, renderer, controls;
    let interactables = [];
    let hoveredObject = null;
    let clock = new THREE.Clock();
    let mouseDownPosition = new THREE.Vector2();
    let isDragging = false;
    
    console.log('Variables inicializadas, llamando init()...');

    // Datos de componentes IAMET con equipos Panduit reales
    const componentData = {
        'rack_frame': {
            title: 'Rack IAMET 42U',
            type: 'Infraestructura',
            desc: 'Gabinete profesional de 42U para centros de datos. Diseño robusto con excelente gestión de cables y ventilación optimizada.',
            specs: ['Altura: 42U (2000mm)', 'Profundidad: 1000mm', 'Carga máxima: 800kg', 'Ventilación: Forzada']
        },
        'core_switch': {
            title: 'Switch Cisco Catalyst 9300',
            type: 'Activo de Red',
            desc: 'Switch empresarial de alto rendimiento con tecnología StackWise-480. Ideal para redes de campus y centros de datos.',
            specs: ['48x 1Gbps + 4x 10Gbps SFP+', 'PoE+ 740W', 'Stacking hasta 480Gbps', 'Layer 3 Routing']
        },
        'patch_panel_panduit': {
            title: 'Panduit NetKey Patch Panel',
            type: 'Cableado Estructurado Panduit',
            desc: 'Panel de parcheo modular NetKey de 48 puertos Cat6A. Diseño de alta densidad con gestión de cables integrada y módulos Mini-Com.',
            specs: ['Modelo: NK6PPG48Y', '48 puertos Cat6A', 'Módulos Mini-Com TX6A', 'Certificado TIA-568-C.2', 'Color: Negro']
        },
        'cable_manager_panduit': {
            title: 'Panduit Organizador Horizontal',
            type: 'Gestión de Cables Panduit',
            desc: 'Organizador horizontal de cables de 1U con diseño de dedos flexibles. Optimiza el radio de curvatura y protege los cables.',
            specs: ['Modelo: WMPFSE', '1U de altura', 'Dedos flexibles', 'Capacidad: 96 cables Cat6', 'Material: Acero']
        },
        'server_iamet': {
            title: 'Servidor Dell PowerEdge R750',
            type: 'Computación',
            desc: 'Servidor de rack 2U con procesadores Intel Xeon Scalable de 3ra generación. Optimizado para virtualización y cargas de trabajo intensivas.',
            specs: ['Dual Intel Xeon Gold 6338', '128GB DDR4 ECC 3200MHz', '8x 1.92TB NVMe SSD RAID 10', 'Dual PSU 1400W redundante']
        },
        'ups_system': {
            title: 'APC Smart-UPS 3000VA',
            type: 'Energía',
            desc: 'Sistema UPS online de doble conversión con gestión avanzada. Protección total contra todas las anomalías eléctricas.',
            specs: ['Modelo: SMT3000RMI2U', '3000VA / 2700W', 'Autonomía: 15min a carga completa', 'LCD display', 'SNMP management']
        }
    };

    function init() {
        console.log('Función init() ejecutándose...');
        // Escena completamente transparente - Sin fondo
        scene = new THREE.Scene();
        console.log('Scene creada');

        // Cámara con vista inclinada inicial alineada al texto
        console.log('Creando cámara...');
        camera = new THREE.PerspectiveCamera(42, sceneConfig.width / sceneConfig.height, 0.1, 1000);
        camera.position.set(20, 12, 32); // Vista más grande y girada a la derecha
        camera.lookAt(0, 10, 0); // Mirar al centro del rack
        console.log('Cámara creada y apuntando al rack');

        // Renderer con configuración premium - CON SOMBRAS
        console.log('Creando renderer...');
        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        });
        console.log('Renderer creado, configurando...');
        renderer.setSize(sceneConfig.width, sceneConfig.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.3;
        renderer.setClearColor(0x000000, 0); // Fondo completamente transparente
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.outputEncoding = THREE.sRGBEncoding;
        console.log('Añadiendo canvas al container...');
        container.appendChild(renderer.domElement);
        console.log('Canvas añadido');

        // Luces mejoradas sin sombras
        console.log('Configurando luces...');
        setupEnhancedLights();
        console.log('Luces configuradas');

        // Controles interactivos restaurados
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.maxPolarAngle = Math.PI / 1.8;
        controls.minPolarAngle = Math.PI / 8;
        controls.enableZoom = false; // Zoom deshabilitado
        controls.enablePan = false;  // Sin paneo
        controls.target.set(0, 8, 0); // Centrar en el rack
        controls.autoRotate = false; // Sin rotación automática

        // Sin raycaster - Solo visual

        // Sin suelo - Rack flotante

        // Cubo de prueba removido - rack funcionando correctamente
        
        // Construir rack mejorado con equipos Panduit
        console.log('Construyendo rack...');
        buildEnhancedRack();
        console.log('Rack construido');
        
        // Solo evento de resize
        console.log('Añadiendo event listeners...');
        window.addEventListener('resize', onWindowResize);
        console.log('Event listeners añadidos');

        // Remover loader inmediatamente
        console.log('Removiendo loader...');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 300);
        }
        console.log('Loader removido');

        console.log('Iniciando animación...');
        animate();
        console.log('Animación iniciada');
    }

    function setupEnhancedLights() {
        // Luz ambiental más fuerte (sin sombras)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);

        // Luz direccional principal SIN sombras
        const mainLight = new THREE.DirectionalLight(0xffffff, 1.3);
        mainLight.position.set(15, 25, 10);
        scene.add(mainLight);

        // Luz de acento azul (estilo tech)
        const accentLight = new THREE.SpotLight(0x3b82f6, 0.6);
        accentLight.position.set(-10, 20, 8);
        accentLight.angle = Math.PI / 4;
        accentLight.penumbra = 0.5;
        accentLight.decay = 2;
        accentLight.distance = 50;
        scene.add(accentLight);

        // Luz de relleno
        const fillLight = new THREE.PointLight(0x94a3b8, 0.5);
        fillLight.position.set(-12, 8, -8);
        scene.add(fillLight);

        // Luz trasera (rim light)
        const rimLight = new THREE.DirectionalLight(0xe0e7ff, 0.4);
        rimLight.position.set(0, 10, -15);
        scene.add(rimLight);
    }

    function buildEnhancedRack() {
        // Materiales mejorados con PBR y colores Panduit
        const materials = {
            rackMetal: new THREE.MeshStandardMaterial({
                color: 0x0f0f0f,
                roughness: 0.3,
                metalness: 0.9,
                envMapIntensity: 1.2
            }),
            deviceChassis: new THREE.MeshStandardMaterial({
                color: 0x1a1a1a,
                roughness: 0.25,
                metalness: 0.85,
                envMapIntensity: 1.0
            }),
            devicePanel: new THREE.MeshStandardMaterial({
                color: 0x0a0a0a,
                roughness: 0.4,
                metalness: 0.7
            }),
            panduitBlue: new THREE.MeshStandardMaterial({
                color: 0x0066cc,
                roughness: 0.3,
                metalness: 0.6
            }),
            panduitBlack: new THREE.MeshStandardMaterial({
                color: 0x1a1a1a,
                roughness: 0.35,
                metalness: 0.7
            }),
            ledGreen: new THREE.MeshStandardMaterial({
                color: 0x00ff00,
                emissive: 0x00ff00,
                emissiveIntensity: 2,
                roughness: 0.2,
                metalness: 0.1
            }),
            ledBlue: new THREE.MeshStandardMaterial({
                color: 0x0066ff,
                emissive: 0x0066ff,
                emissiveIntensity: 1.8,
                roughness: 0.2,
                metalness: 0.1
            }),
            ledOrange: new THREE.MeshStandardMaterial({
                color: 0xff6600,
                emissive: 0xff6600,
                emissiveIntensity: 1.5,
                roughness: 0.2,
                metalness: 0.1
            }),
            portMetal: new THREE.MeshStandardMaterial({
                color: 0xaaaaaa,
                metalness: 0.95,
                roughness: 0.05
            }),
            portPlastic: new THREE.MeshStandardMaterial({
                color: 0xeeeeee,
                roughness: 0.6,
                metalness: 0.1
            }),
            screen: new THREE.MeshStandardMaterial({
                color: 0x003322,
                emissive: 0x00ff88,
                emissiveIntensity: 0.8,
                roughness: 0.1,
                metalness: 0.2
            })
        };

        // Estructura del rack con más detalle
        const rackGroup = createDetailedRackStructure(materials);
        scene.add(rackGroup);
        // interactables.push(rackGroup); // Desactivado para que no sea interactivo

        // Componentes del rack con equipos Panduit
        let currentY = 18;

        // 1. Core Switch Cisco
        const switch1 = createEnhancedSwitch(0, currentY, materials, 1);
        scene.add(switch1);
        interactables.push(switch1);
        currentY -= 2.5;

        // 2. Panduit Cable Manager
        const cableManager1 = createPanduitCableManager(0, currentY, materials);
        scene.add(cableManager1);
        interactables.push(cableManager1);
        currentY -= 1;

        // 3. Panduit NetKey Patch Panel 48P
        const panduitPanel1 = createPanduitPatchPanel(0, currentY, materials);
        scene.add(panduitPanel1);
        interactables.push(panduitPanel1);
        currentY -= 1.5;

        // 4. Panduit Cable Manager
        const cableManager2 = createPanduitCableManager(0, currentY, materials);
        scene.add(cableManager2);
        interactables.push(cableManager2);
        currentY -= 1;

        // 5. Servidor Dell PowerEdge
        const server = createEnhancedServer(0, currentY, materials);
        scene.add(server);
        interactables.push(server);
        currentY -= 4.5;

        // 6. Switch Cisco de acceso
        const switch2 = createEnhancedSwitch(0, currentY, materials, 2);
        scene.add(switch2);
        interactables.push(switch2);
        currentY -= 2.5;

        // 7. Panduit Cable Manager
        const cableManager3 = createPanduitCableManager(0, currentY, materials);
        scene.add(cableManager3);
        interactables.push(cableManager3);
        currentY -= 1;

        // 8. Panduit NetKey Patch Panel 48P
        const panduitPanel2 = createPanduitPatchPanel(0, currentY, materials);
        scene.add(panduitPanel2);
        interactables.push(panduitPanel2);
        currentY -= 4;

        // 9. UPS APC
        const ups = createEnhancedUPS(0, 2, materials);
        scene.add(ups);
        interactables.push(ups);
    }

    function createDetailedRackStructure(materials) {
        const rackGroup = new THREE.Group();
        rackGroup.userData = { id: 'rack_frame', interactive: true };

        const postHeight = 20;
        const postWidth = 0.6;

        // Solo postes - sin travesaños para evitar z-fighting completamente
        const positions = [
            [-5.5, postHeight / 2, -3.5], [5.5, postHeight / 2, -3.5],
            [-5.5, postHeight / 2, 3.5], [5.5, postHeight / 2, 3.5]
        ];

        positions.forEach(pos => {
            const post = new THREE.Mesh(
                new THREE.BoxGeometry(postWidth, postHeight, postWidth),
                materials.rackMetal
            );
            post.position.set(...pos);
            post.castShadow = true;
            post.receiveShadow = true;
            rackGroup.add(post);
        });

        return rackGroup;
    }

    function createEnhancedSwitch(x, y, materials, id) {
        const group = new THREE.Group();
        group.userData = { id: 'core_switch', interactive: true };

        // Chasis con bordes redondeados - reducido para evitar postes
        const chassis = new THREE.Mesh(
            new THREE.BoxGeometry(10, 1.75, 7.5, 4, 4, 4),
            materials.deviceChassis
        );
        chassis.castShadow = true;
        chassis.receiveShadow = true;
        group.add(chassis);

        // Panel frontal
        const frontPanel = new THREE.Mesh(
            new THREE.BoxGeometry(9.8, 1.5, 0.15),
            materials.devicePanel
        );
        frontPanel.position.set(0, 0, 3.83);
        group.add(frontPanel);

        // Puertos Ethernet con más detalle
        const portCount = 24;
        for (let i = 0; i < portCount; i++) {
            const portX = -4.8 + (i * 0.4);

            // Puerto RJ45
            const port = new THREE.Mesh(
                new THREE.BoxGeometry(0.28, 0.18, 0.2),
                materials.portMetal
            );
            port.position.set(portX, 0.15, 3.95);
            group.add(port);

            // LEDs de estado (más realistas)
            if (Math.random() > 0.2) {
                const ledMat = Math.random() > 0.6 ? materials.ledGreen : materials.ledBlue;
                const led = new THREE.Mesh(
                    new THREE.SphereGeometry(0.04, 8, 8),
                    ledMat.clone()
                );
                led.position.set(portX, 0.45, 4.0);
                group.add(led);

                // Animación de parpadeo suave
                led.userData.blinkSpeed = 1000 + Math.random() * 2000;
                led.userData.blinkPhase = Math.random() * Math.PI * 2;
            }
        }

        // Logo IAMET
        const logo = new THREE.Mesh(
            new THREE.BoxGeometry(1.5, 0.3, 0.05),
            new THREE.MeshStandardMaterial({
                color: 0x3b82f6,
                emissive: 0x1e40af,
                emissiveIntensity: 0.3
            })
        );
        logo.position.set(-4, -0.5, 3.95);
        group.add(logo);

        group.position.set(x, y, 0);
        return group;
    }

    function createEnhancedPatchPanel(x, y, materials) {
        const group = new THREE.Group();
        group.userData = { id: 'patch_panel', interactive: true };

        // Panel base
        const panel = new THREE.Mesh(
            new THREE.BoxGeometry(10, 1.5, 1.8),
            materials.deviceChassis
        );
        panel.castShadow = true;
        panel.receiveShadow = true;
        group.add(panel);

        // Puertos RJ45
        for (let i = 0; i < 24; i++) {
            const port = new THREE.Mesh(
                new THREE.BoxGeometry(0.32, 0.22, 0.35),
                materials.portPlastic
            );
            port.position.set(-4.0 + (i * 0.34), 0, 0.75);
            group.add(port);

            // Etiquetas de puerto
            if (i % 4 === 0) {
                const label = new THREE.Mesh(
                    new THREE.BoxGeometry(0.15, 0.08, 0.02),
                    new THREE.MeshStandardMaterial({ color: 0xffffff })
                );
                label.position.set(-4.0 + (i * 0.34), -0.4, 0.92);
                group.add(label);
            }
        }

        group.position.set(x, y, 0);
        return group;
    }

    function createEnhancedServer(x, y, materials) {
        const group = new THREE.Group();
        group.userData = { id: 'server_iamet', interactive: true };

        // Chasis 2U
        const chassis = new THREE.Mesh(
            new THREE.BoxGeometry(10, 3.5, 8.5),
            materials.deviceChassis
        );
        chassis.castShadow = true;
        chassis.receiveShadow = true;
        group.add(chassis);

        // Panel frontal
        const frontPanel = new THREE.Mesh(
            new THREE.BoxGeometry(9.8, 3.2, 0.2),
            materials.devicePanel
        );
        frontPanel.position.set(0, 0, 4.35);
        group.add(frontPanel);

        // Bahías de disco con más detalle
        for (let i = 0; i < 8; i++) {
            const isActive = i < 4;
            const bay = new THREE.Mesh(
                new THREE.BoxGeometry(0.75, 0.55, 0.3),
                new THREE.MeshStandardMaterial({
                    color: isActive ? 0x0055aa : 0x222222,
                    emissive: isActive ? 0x002255 : 0x000000,
                    emissiveIntensity: isActive ? 0.5 : 0,
                    roughness: 0.3,
                    metalness: 0.7
                })
            );
            bay.position.set(-3.3 + (i * 0.85), 0.7, 4.45);
            group.add(bay);

            // LED de actividad en bahía
            if (isActive) {
                const led = new THREE.Mesh(
                    new THREE.SphereGeometry(0.03, 8, 8),
                    materials.ledOrange.clone()
                );
                led.position.set(-3.3 + (i * 0.85), 0.4, 4.5);
                group.add(led);
                led.userData.blinkSpeed = 300;
            }
        }

        // LEDs de estado frontales
        const powerLed = new THREE.Mesh(
            new THREE.SphereGeometry(0.08, 12, 12),
            materials.ledGreen
        );
        powerLed.position.set(-4.5, -1.2, 4.5);
        group.add(powerLed);

        const statusLed = new THREE.Mesh(
            new THREE.SphereGeometry(0.06, 12, 12),
            materials.ledBlue
        );
        statusLed.position.set(-3.8, -1.2, 4.5);
        group.add(statusLed);
        statusLed.userData.blinkSpeed = 500;

        // Logo IAMET
        const logo = new THREE.Mesh(
            new THREE.BoxGeometry(2, 0.4, 0.05),
            new THREE.MeshStandardMaterial({
                color: 0x3b82f6,
                emissive: 0x1e40af,
                emissiveIntensity: 0.4
            })
        );
        logo.position.set(0, -1.2, 4.5);
        group.add(logo);

        group.position.set(x, y, 0);
        return group;
    }

    function createEnhancedUPS(x, y, materials) {
        const group = new THREE.Group();
        group.userData = { id: 'ups_system', interactive: true };

        // Chasis UPS
        const chassis = new THREE.Mesh(
            new THREE.BoxGeometry(10, 5.5, 9.5),
            materials.deviceChassis
        );
        chassis.castShadow = true;
        chassis.receiveShadow = true;
        group.add(chassis);

        // Pantalla LCD con marco
        const screenFrame = new THREE.Mesh(
            new THREE.BoxGeometry(4.2, 2.2, 0.15),
            new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.2, metalness: 0.8 })
        );
        screenFrame.position.set(0, 1.5, 4.85);
        group.add(screenFrame);

        const screen = new THREE.Mesh(
            new THREE.BoxGeometry(3.8, 1.8, 0.1),
            materials.screen
        );
        screen.position.set(0, 1.5, 4.92);
        group.add(screen);

        // LED de estado
        const statusLed = new THREE.Mesh(
            new THREE.SphereGeometry(0.12, 16, 16),
            materials.ledGreen
        );
        statusLed.position.set(-4.2, 1.5, 4.9);
        group.add(statusLed);

        // Botones de control
        for (let i = 0; i < 3; i++) {
            const button = new THREE.Mesh(
                new THREE.CylinderGeometry(0.15, 0.15, 0.1, 16),
                new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.3, metalness: 0.6 })
            );
            button.rotation.x = Math.PI / 2;
            button.position.set(-3 + i * 0.5, -1.5, 4.85);
            group.add(button);
        }

        group.position.set(x, y, 0);
        return group;
    }

    function onMouseMove(event) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        checkIntersection();
    }

    function onDoubleClick(event) {
        console.log('Doble click detectado');
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        console.log('Mouse position:', mouse.x, mouse.y);
        checkIntersection(true);
    }

    function checkIntersection(isClick = false) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(interactables, true);
        
        if (isClick) {
            console.log('Clic detectado. Intersects:', intersects.length);
            console.log('Objetos interactuables:', interactables.length);
        }

        // Reset hover
        if (hoveredObject && hoveredObject.userData.originalScale) {
            hoveredObject.scale.copy(hoveredObject.userData.originalScale);
            hoveredObject = null;
        }

        if (intersects.length > 0) {
            const object = intersects[0].object;
            let targetGroup = object.parent;

            while (targetGroup && !targetGroup.userData.interactive) {
                targetGroup = targetGroup.parent;
            }

            if (targetGroup && targetGroup.userData.id) {
                renderer.domElement.style.cursor = 'pointer';

                // Hover effect
                if (!isClick && targetGroup !== hoveredObject) {
                    if (!targetGroup.userData.originalScale) {
                        targetGroup.userData.originalScale = targetGroup.scale.clone();
                    }
                    targetGroup.scale.multiplyScalar(1.05);
                    hoveredObject = targetGroup;
                }

                if (isClick) {
                    console.log('Objeto clickeado, ID:', targetGroup.userData.id);
                    showComponentDetails(targetGroup.userData.id);
                    // Efecto de click
                    targetGroup.scale.multiplyScalar(0.95);
                    setTimeout(() => {
                        if (targetGroup.userData.originalScale) {
                            targetGroup.scale.copy(targetGroup.userData.originalScale);
                        }
                    }, 100);
                }
            }
        } else {
            renderer.domElement.style.cursor = 'grab';
        }
    }

    function showComponentDetails(id) {
        console.log('showComponentDetails llamado con ID:', id);
        const data = componentData[id];
        if (!data) {
            console.log('No se encontraron datos para ID:', id);
            return;
        }
        console.log('Datos del componente:', data);

        const panel = document.getElementById('rack-info-panel');
        const content = document.getElementById('rack-panel-content');
        
        if (!panel) {
            console.error('No se encontró el panel rack-info-panel');
            return;
        }
        if (!content) {
            console.error('No se encontró el contenido rack-panel-content');
            return;
        }

        const specsHtml = data.specs.map(spec =>
            `<div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 13px;">
                <div style="width: 6px; height: 6px; background: #3b82f6; border-radius: 50%; margin-right: 10px;"></div>
                <span style="color: #64748b;">${spec}</span>
            </div>`
        ).join('');

        content.innerHTML = `
            <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 15px;">
                <div style="color: #3b82f6; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">${data.type}</div>
                <h2 style="color: #1e293b; font-size: 18px; font-weight: bold; margin: 0; line-height: 1.3;">${data.title}</h2>
            </div>
            <div style="margin-bottom: 20px;">
                <p style="color: #475569; font-size: 13px; line-height: 1.5; margin: 0;">${data.desc}</p>
            </div>
            <div style="background: #f8fafc; border-radius: 12px; padding: 16px; border: 1px solid #e2e8f0;">
                <h3 style="color: #1e293b; font-size: 13px; font-weight: bold; margin: 0 0 12px 0;">Especificaciones</h3>
                ${specsHtml}
            </div>
            <button onclick="document.getElementById('contacto').scrollIntoView({behavior: 'smooth'}); document.getElementById('message').value = 'Hola, estoy interesado en cotizar: ${data.title}. ¿Me podrían dar más información?'; document.getElementById('service').value = 'innovacion';" style="width: 100%; margin-top: 20px; background: #3b82f6; color: white; font-weight: bold; padding: 12px; border: none; border-radius: 8px; cursor: pointer; font-size: 13px; transition: all 0.2s; box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);" onmouseover="this.style.background='#2563eb'; this.style.transform='translateY(-1px)'; this.style.boxShadow='0 4px 12px rgba(59, 130, 246, 0.4)'" onmouseout="this.style.background='#3b82f6'; this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(59, 130, 246, 0.3)'">
                Cotizar este producto
            </button>
        `;

        panel.style.display = 'block';
        panel.style.right = '20px';
    }

    function onWindowResize() {
        const newWidth = container.offsetWidth;
        const newHeight = container.offsetHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    }

    function animate() {
        requestAnimationFrame(animate);

        const delta = clock.getDelta();
        const elapsed = clock.getElapsedTime();

        // Animar LEDs
        scene.traverse((object) => {
            if (object.userData.blinkSpeed) {
                const phase = object.userData.blinkPhase || 0;
                const intensity = (Math.sin(elapsed * (1000 / object.userData.blinkSpeed) + phase) + 1) / 2;
                if (object.material && object.material.emissiveIntensity !== undefined) {
                    object.material.emissiveIntensity = 0.5 + intensity * 1.5;
                }
            }
        });

        controls.update();
        renderer.render(scene, camera);
    }

    // Inicializar
    init();
}
