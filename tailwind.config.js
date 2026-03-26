/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          light: "#020617", // Deep Navy
          surface: "#0F172A", 
          deep: "#FFFFFF", 
          blue: "#2563EB",   
          green: "#059669",  
          orange: "#D97706", 
          purple: "#7C3AED", 
          red: "#DC2626",    
        },
      },
      backgroundImage: {
        'mesh-gradient': "radial-gradient(at 0% 0%, rgba(37, 99, 235, 0.1) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(124, 58, 237, 0.1) 0px, transparent 50%)",
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 10s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'orbit-1': 'orbit 20s linear infinite',
        'orbit-2': 'orbit 25s linear infinite reverse',
        'orbit-3': 'orbit 30s linear infinite',
        'orbit-4': 'orbit 35s linear infinite reverse',
        'orbit-5': 'orbit 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-40px) scale(1.05)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.6 },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(var(--orbit-distance)) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(var(--orbit-distance)) rotate(-360deg)' },
        }
      }
    },
  },
  plugins: [],
}
