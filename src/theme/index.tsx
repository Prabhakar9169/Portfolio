// theme/index.tsx
export interface ThemeColors {
    primary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    secondary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      accent: string;
    };
    border: {
      primary: string;
      secondary: string;
    };
  }
  
  export interface PortfolioTheme {
    name: string;
    colors: ThemeColors;
    gradients: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      glow: string;
    };
    animations: {
      duration: {
        fast: string;
        normal: string;
        slow: string;
      };
      easing: {
        default: string;
        bounce: string;
      };
    };
  }
  
  export interface ThemeClasses {
    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundGradient: string;
    textPrimary: string;
    textSecondary: string;
    textAccent: string;
    textGradient: string;
    buttonPrimary: string;
    buttonSecondary: string;
    borderPrimary: string;
    borderSecondary: string;
    glassEffect: string;
    hoverGlow: string;
    hoverScale: string;
    transitionDefault: string;
    transitionSlow: string;
  }
  
  // Dark Green Theme Configuration
  export const darkGreenTheme: PortfolioTheme = {
    name: "dark-green",
    colors: {
      primary: {
        50: "#ecfdf5",
        100: "#d1fae5", 
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
      },
      secondary: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
      },
      background: {
        primary: "rgb(17, 24, 39)",      // gray-900
        secondary: "rgb(30, 41, 59)",    // slate-800
        tertiary: "rgb(6, 78, 59)",      // emerald-900
      },
      text: {
        primary: "#ffffff",
        secondary: "#d1d5db",             // gray-300
        tertiary: "#9ca3af",              // gray-400
        accent: "#6ee7b7",                // emerald-300
      },
      border: {
        primary: "rgba(16, 185, 129, 0.3)", // emerald-500 with opacity
        secondary: "rgba(16, 185, 129, 0.5)",
      },
    },
    gradients: {
      primary: "bg-gradient-to-r from-emerald-600 to-green-600",
      secondary: "bg-gradient-to-r from-emerald-500 to-green-500",
      background: "bg-gradient-to-br from-gray-900 via-slate-800 to-emerald-900",
      text: "bg-gradient-to-r from-emerald-300 via-green-200 to-emerald-400",
    },
    shadows: {
      sm: "0 1px 2px 0 rgba(16, 185, 129, 0.05)",
      md: "0 4px 6px -1px rgba(16, 185, 129, 0.1)",
      lg: "0 10px 15px -3px rgba(16, 185, 129, 0.1)",
      glow: "0 0 20px rgba(16, 185, 129, 0.3)",
    },
    animations: {
      duration: {
        fast: "150ms",
        normal: "300ms",
        slow: "500ms",
      },
      easing: {
        default: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  };
  
  // Theme Classes Generator - Fixed return type
  export const generateThemeClasses = (theme: PortfolioTheme): ThemeClasses => {
    return {
      // Background Classes
      backgroundPrimary: `bg-gray-900`,
      backgroundSecondary: `bg-slate-800`,
      backgroundGradient: theme.gradients.background,
      
      // Text Classes
      textPrimary: `text-white`,
      textSecondary: `text-gray-300`,
      textAccent: `text-emerald-300`,
      textGradient: `${theme.gradients.text} bg-clip-text text-transparent`,
      
      // Button Classes
      buttonPrimary: `${theme.gradients.primary} hover:${theme.gradients.secondary} text-white`,
      buttonSecondary: `border-2 border-emerald-500 text-emerald-300 hover:bg-emerald-500 hover:text-white`,
      
      // Border Classes
      borderPrimary: `border-emerald-500/30`,
      borderSecondary: `border-emerald-500/50`,
      
      // Glass Effect
      glassEffect: `bg-emerald-800/30 border border-emerald-700/50 backdrop-blur-sm`,
      
      // Hover Effects
      hoverGlow: `hover:shadow-emerald-500/25`,
      hoverScale: "hover:scale-105",
      
      // Animation Classes
      transitionDefault: `transition-all duration-300 ease-in-out`,
      transitionSlow: `transition-all duration-500 ease-in-out`,
    };
  };
  
  // Theme Hook with proper typing
  export const usePortfolioTheme = () => {
    const theme = darkGreenTheme;
    const classes = generateThemeClasses(theme);
    
    return {
      theme,
      classes,
      colors: theme.colors,
      gradients: theme.gradients,
    } as const;
  };
  