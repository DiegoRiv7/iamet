// Función para crear Panduit NetKey Patch Panel
function createPanduitPatchPanel(x, y, materials) {
    const group = new THREE.Group();
    group.userData = { id: 'patch_panel_panduit', interactive: true };

    // Panel base Panduit (negro)
    const panel = new THREE.Mesh(
        new THREE.BoxGeometry(10.5, 1.5, 1.8),
        materials.panduitBlack
    );
    group.add(panel);

    // Barra superior azul Panduit
    const panduitStripe = new THREE.Mesh(
        new THREE.BoxGeometry(10.3, 0.15, 0.05),
        materials.panduitBlue
    );
    panduitStripe.position.set(0, 0.68, 0.92);
    group.add(panduitStripe);

    // Logo Panduit
    const logo = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.2, 0.03),
        new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.3
        })
    );
    logo.position.set(-4.5, 0.6, 0.92);
    group.add(logo);

    // 48 puertos Mini-Com en dos filas
    for (let row = 0; row < 2; row++) {
        for (let i = 0; i < 24; i++) {
            // Puerto RJ45 con color Panduit
            const port = new THREE.Mesh(
                new THREE.BoxGeometry(0.32, 0.22, 0.35),
                new THREE.MeshStandardMaterial({
                    color: row === 0 ? 0x0066cc : 0x333333, // Azul arriba, negro abajo
                    roughness: 0.4,
                    metalness: 0.3
                })
            );
            port.position.set(-4.0 + (i * 0.34), row === 0 ? 0.25 : -0.25, 0.75);
            group.add(port);

            // Etiquetas de número de puerto
            if (i % 6 === 0) {
                const label = new THREE.Mesh(
                    new THREE.BoxGeometry(0.12, 0.06, 0.02),
                    new THREE.MeshStandardMaterial({ color: 0xffffff })
                );
                label.position.set(-4.0 + (i * 0.34), row === 0 ? -0.05 : -0.55, 0.92);
                group.add(label);
            }
        }
    }

    // Modelo en el panel
    const modelText = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 0.12, 0.02),
        new THREE.MeshStandardMaterial({ color: 0xcccccc })
    );
    modelText.position.set(4, -0.6, 0.92);
    group.add(modelText);

    group.position.set(x, y, 0);
    return group;
}

// Función para crear Panduit Cable Manager
function createPanduitCableManager(x, y, materials) {
    const group = new THREE.Group();
    group.userData = { id: 'cable_manager_panduit', interactive: true };

    // Base del organizador
    const base = new THREE.Mesh(
        new THREE.BoxGeometry(10.5, 1, 1.5),
        materials.panduitBlack
    );
    group.add(base);

    // Dedos flexibles (fingers)
    const fingerCount = 20;
    for (let i = 0; i < fingerCount; i++) {
        const finger = new THREE.Mesh(
            new THREE.BoxGeometry(0.15, 0.8, 0.1),
            new THREE.MeshStandardMaterial({
                color: 0x2a2a2a,
                roughness: 0.5,
                metalness: 0.4
            })
        );
        finger.position.set(-4.8 + (i * 0.5), 0, 0.6);
        group.add(finger);
    }

    // Logo Panduit en el lateral
    const logo = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.15, 0.03),
        materials.panduitBlue
    );
    logo.position.set(-4.5, 0, 0.78);
    group.add(logo);

    group.position.set(x, y, 0);
    return group;
}
