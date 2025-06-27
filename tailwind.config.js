/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#4F46E5', // indigo-600
        'primary-50': '#EEF2FF', // indigo-50
        'primary-100': '#E0E7FF', // indigo-100
        'primary-500': '#6366F1', // indigo-500
        'primary-600': '#4F46E5', // indigo-600
        'primary-700': '#4338CA', // indigo-700
        'primary-foreground': '#FFFFFF', // white

        // Secondary Colors
        'secondary': '#6B7280', // gray-500
        'secondary-50': '#F9FAFB', // gray-50
        'secondary-100': '#F3F4F6', // gray-100
        'secondary-200': '#E5E7EB', // gray-200
        'secondary-500': '#6B7280', // gray-500
        'secondary-600': '#4B5563', // gray-600
        'secondary-foreground': '#FFFFFF', // white

        // Accent Colors
        'accent': '#10B981', // emerald-500
        'accent-50': '#ECFDF5', // emerald-50
        'accent-100': '#D1FAE5', // emerald-100
        'accent-500': '#10B981', // emerald-500
        'accent-600': '#059669', // emerald-600
        'accent-foreground': '#FFFFFF', // white

        // Background Colors
        'background': '#FAFAF9', // stone-50
        'surface': '#FFFFFF', // white
        'surface-50': '#FAFAF9', // stone-50
        'surface-100': '#F5F5F4', // stone-100

        // Text Colors
        'text-primary': '#111827', // gray-900
        'text-secondary': '#6B7280', // gray-500
        'text-muted': '#9CA3AF', // gray-400

        // Status Colors
        'success': '#059669', // emerald-600
        'success-50': '#ECFDF5', // emerald-50
        'success-100': '#D1FAE5', // emerald-100
        'success-500': '#10B981', // emerald-500
        'success-600': '#059669', // emerald-600
        'success-foreground': '#FFFFFF', // white

        'warning': '#D97706', // amber-600
        'warning-50': '#FFFBEB', // amber-50
        'warning-100': '#FEF3C7', // amber-100
        'warning-500': '#F59E0B', // amber-500
        'warning-600': '#D97706', // amber-600
        'warning-foreground': '#FFFFFF', // white

        'error': '#DC2626', // red-600
        'error-50': '#FEF2F2', // red-50
        'error-100': '#FEE2E2', // red-100
        'error-500': '#EF4444', // red-500
        'error-600': '#DC2626', // red-600
        'error-foreground': '#FFFFFF', // white

        // Border Colors
        'border': '#E5E7EB', // gray-200
        'border-light': '#F3F4F6', // gray-100
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'caption': ['Inter', 'system-ui', 'sans-serif'],
        'data': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      fontWeight: {
        'heading-normal': '400',
        'heading-medium': '600',
        'heading-bold': '700',
        'body-normal': '400',
        'body-medium': '500',
        'caption-normal': '400',
        'data-normal': '400',
      },
      borderRadius: {
        'game': '8px',
        'container': '12px',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'soft-elevated': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'game-cell': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'game-cell-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        'breathing-sm': '16px',
        'breathing-md': '24px',
        'breathing-lg': '32px',
      },
      transitionDuration: {
        'micro': '150ms',
        'state': '200ms',
        'major': '300ms',
      },
      transitionTimingFunction: {
        'micro': 'ease-out',
        'state': 'ease-in-out',
        'major': 'ease-in-out',
      },
      zIndex: {
        'header': '100',
        'navigation': '90',
        'modal': '200',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}