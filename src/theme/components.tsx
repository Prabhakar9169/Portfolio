// theme/components.tsx
import { usePortfolioTheme } from './index';

export interface ComponentStyles {
  section: string;
  container: string;
  heading: {
    h1: string;
    h2: string;
    h3: string;
  };
  text: {
    primary: string;
    secondary: string;
    accent: string;
  };
  button: {
    primary: string;
    secondary: string;
    icon: string;
  };
  card: {
    default: string;
    featured: string;
  };
  tag: string;
  decoration: {
    circle: string;
    blob: string;
  };
  statusBadge: string;
  socialLink: string;
  scrollIndicator: string;
  nav: {
    container: string;
    link: string;
  };
}

export const useComponentStyles = (): ComponentStyles => {
  const { classes, colors, gradients } = usePortfolioTheme();
  
  return {
    // Section Wrapper
    section: `min-h-screen ${classes.backgroundGradient} px-6 py-20 relative overflow-hidden`,
    
    // Container
    container: "max-w-6xl mx-auto relative z-10",
    
    // Headings
    heading: {
      h1: `text-6xl md:text-7xl font-extrabold tracking-tight mb-6 ${classes.textGradient}`,
      h2: `text-4xl md:text-5xl font-bold tracking-tight mb-8 ${classes.textPrimary}`,
      h3: `text-2xl md:text-3xl font-semibold mb-6 ${classes.textAccent}`,
    },
    
    // Text
    text: {
      primary: `text-lg md:text-xl ${classes.textSecondary} leading-relaxed`,
      secondary: `text-base ${classes.textSecondary}`,
      accent: `${classes.textAccent} font-medium`,
    },
    
    // Buttons - Fixed typing issue
    button: {
      primary: `px-8 py-4 ${classes.buttonPrimary} rounded-xl shadow-lg ${classes.hoverGlow} ${classes.transitionDefault} font-semibold`,
      secondary: `px-8 py-4 ${classes.buttonSecondary} rounded-xl ${classes.transitionDefault} font-semibold ${classes.glassEffect}`,
      icon: `w-12 h-12 ${classes.glassEffect} rounded-full flex items-center justify-center ${classes.textAccent} hover:bg-emerald-600 hover:text-white ${classes.transitionDefault}`,
    },
    
    // Cards
    card: {
      default: `${classes.glassEffect} rounded-2xl p-6 ${classes.hoverScale} ${classes.transitionDefault}`,
      featured: `${classes.glassEffect} rounded-2xl p-8 ${classes.hoverGlow} ${classes.transitionDefault}`,
    },
    
    // Skills/Tags
    tag: `px-4 py-2 ${classes.glassEffect} ${classes.textSecondary} rounded-full text-sm font-medium hover:bg-emerald-700/50 ${classes.transitionDefault}`,
    
    // Background Decorations
    decoration: {
      circle: `absolute border ${classes.borderPrimary} rounded-full opacity-20`,
      blob: `absolute bg-emerald-600 rounded-full blur-xl opacity-10`,
    },
    
    // Status Badge
    statusBadge: `inline-flex items-center px-4 py-2 ${classes.glassEffect} rounded-full ${classes.textAccent} text-sm font-medium mb-6`,
    
    // Social Links
    socialLink: `w-12 h-12 ${classes.glassEffect} rounded-full flex items-center justify-center ${classes.textAccent} hover:bg-emerald-600 hover:text-white ${classes.transitionDefault}`,
    
    // Scroll Indicator
    scrollIndicator: `absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce`,
    
    // Navigation
    nav: {
      container: `fixed top-0 w-full z-50 ${classes.glassEffect}`,
      link: `${classes.textSecondary} hover:${classes.textAccent} ${classes.transitionDefault} font-medium`,
    },
  };
};
