// Shared CV helpers.
// Experience data lives in js/i18n.js (window.i18n.getExperience()) so it can
// be localized per UI language. This file only carries the language-independent
// bits the renderer still needs.

// Format "1y 8mo"
window.CV_DURATION = function (start, end) {
    const parse = (s) => {
        if (!s) return new Date();
        const [y, m] = s.split('-').map(Number);
        return new Date(y, (m || 1) - 1, 1);
    };
    const a = parse(start);
    const b = end ? parse(end) : new Date();
    let months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
    if (months < 1) months = 1;
    const y = Math.floor(months / 12);
    const m = months % 12;
    if (y === 0) return `${m}mo`;
    if (m === 0) return `${y}y`;
    return `${y}y ${m}mo`;
};

// Skill-matrix rows (category → years) used in V3 density map.
window.CV_SKILL_MATRIX = {
    years: [2022, 2023, 2024, 2025, 2026],
    groups: [
        {
            label: 'Languages',
            rows: [
                { label: 'Python',              values: [4, 4, 4, 4, 4] },
                { label: 'SQL',                 values: [4, 4, 4, 4, 4] },
                { label: 'Shell / Bash',        values: [2, 3, 3, 3, 3] },
                { label: 'C / C++',             values: [2, 3, 3, 3, 3] },
            ],
        },
        {
            label: 'Frameworks & Libraries',
            rows: [
                { label: 'pandas / NumPy',      values: [4, 4, 4, 4, 4] },
                { label: 'PyTorch',             values: [1, 2, 4, 4, 4] },
                { label: 'TensorFlow',          values: [0, 0, 3, 4, 4] },
                { label: 'Keras',            values: [0, 0, 1, 1, 2] },
                { label: 'Scikit-learn',             values: [0, 0, 1, 1, 2] },
                { label: 'OpenCV',                 values: [0, 0, 0, 2, 3] },
                { label: 'FastAPI',          values: [0, 0, 1, 2, 2] },
                { label: 'Hugging Face',          values: [0, 0, 0, 1, 2] },
                { label: 'LangChain',          values: [0, 0, 0, 1, 2] },
            ],
        },
        {
            label: 'ML / AI',
            rows: [
                { label: 'Scikit-learn',        values: [0, 0, 1, 2, 2] },
                { label: 'Classification',      values: [0, 0, 1, 1, 2] },
                { label: 'Segmentation',        values: [0, 0, 1, 2, 1] },
                { label: 'Transformers',        values: [0, 0, 0, 0, 2] },
                { label: 'LLM / RAG',           values: [0, 0, 0, 0, 2] },
                { label: 'NLP',                 values: [0, 0, 0, 1, 2] },
                { label: 'CV',                 values: [0, 0, 0, 2, 3] },
            ],
        },
        {
            label: 'Infra',
            rows: [
                { label: 'Linux',                 values: [0, 1, 1, 1, 1] },
                { label: 'Docker',              values: [0, 0, 0, 0, 2] },
            ],
        },
    ],
};
