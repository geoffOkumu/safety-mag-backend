/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.hbs", "./**/*.hbs"],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: "1rem",
        },
        fontFamily: {
            sans: ["Merriweather Sans", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
