export const themes = {
    olive: {
        name: 'Olive Green',
        colors: {
            '--olive-dark': '#2C3E2D',
            '--olive-medium': '#4A6741',
            '--olive-light': '#8BA888',
            '--olive-pale': '#D4E5D2',
            '--gold': '#C9A961',
            '--gold-light': '#E5D19E',
            '--cream': '#F7F4ED',
            '--white': '#FFFFFF',
            '--shadow': 'rgba(44, 62, 45, 0.1)',
            '--accent-red': '#C85A54',
            '--accent-blue': '#5B8C9F',
        }
    },
    ocean: {
        name: 'Ocean Blue',
        colors: {
            '--olive-dark': '#1a3a52',
            '--olive-medium': '#2c5f7f',
            '--olive-light': '#5b9fc4',
            '--olive-pale': '#c8e3f0',
            '--gold': '#f4a261',
            '--gold-light': '#f7c59f',
            '--cream': '#f0f4f8',
            '--white': '#FFFFFF',
            '--shadow': 'rgba(26, 58, 82, 0.1)',
            '--accent-red': '#e76f51',
            '--accent-blue': '#2a9d8f',
        }
    },
    sunset: {
        name: 'Sunset Orange',
        colors: {
            '--olive-dark': '#5a2e2e',
            '--olive-medium': '#8b4545',
            '--olive-light': '#c97676',
            '--olive-pale': '#f4d4d4',
            '--gold': '#e9c46a',
            '--gold-light': '#f4e1a1',
            '--cream': '#fdf8f3',
            '--white': '#FFFFFF',
            '--shadow': 'rgba(90, 46, 46, 0.1)',
            '--accent-red': '#d62828',
            '--accent-blue': '#457b9d',
        }
    },
    forest: {
        name: 'Deep Forest',
        colors: {
            '--olive-dark': '#1b3a2f',
            '--olive-medium': '#2d5f4d',
            '--olive-light': '#4a9b7f',
            '--olive-pale': '#c8e6d7',
            '--gold': '#d4a574',
            '--gold-light': '#e8c9a5',
            '--cream': '#f5f9f7',
            '--white': '#FFFFFF',
            '--shadow': 'rgba(27, 58, 47, 0.1)',
            '--accent-red': '#c85a54',
            '--accent-blue': '#5b8c9f',
        }
    },
    lavender: {
        name: 'Lavender Dream',
        colors: {
            '--olive-dark': '#4a3b5c',
            '--olive-medium': '#6b5b7f',
            '--olive-light': '#9d8fb8',
            '--olive-pale': '#e5dff0',
            '--gold': '#c9a0dc',
            '--gold-light': '#e0c4ed',
            '--cream': '#f9f7fc',
            '--white': '#FFFFFF',
            '--shadow': 'rgba(74, 59, 92, 0.1)',
            '--accent-red': '#d65780',
            '--accent-blue': '#7b68ee',
        }
    },
    dark: {
        name: 'Dark Mode',
        colors: {
            '--olive-dark': '#e8e8e8',
            '--olive-medium': '#b8b8b8',
            '--olive-light': '#888888',
            '--olive-pale': '#3a3a3a',
            '--gold': '#ffd700',
            '--gold-light': '#ffe44d',
            '--cream': '#1a1a1a',
            '--white': '#2d2d2d',
            '--shadow': 'rgba(0, 0, 0, 0.3)',
            '--accent-red': '#ff6b6b',
            '--accent-blue': '#4ecdc4',
        }
    }
};

export const applyTheme = (themeName) => {
    const theme = themes[themeName];
    if (!theme) return;

    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });

    localStorage.setItem('selectedTheme', themeName);
};

export const getStoredTheme = () => {
    return localStorage.getItem('selectedTheme') || 'olive';
};
