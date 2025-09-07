// Animation variants for the stairs transition
export const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"]
  }
}

// Page content animation
export const pageAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -50,
  }
}

// Transition settings
export const transitionSettings = {
  stairs: {
    duration: 0.4,
    ease: "easeInOut",
  },
  page: {
    duration: 0.4,
    ease: "easeOut",
  }
}

// Calculate stair delay (reverse order for wave effect)
export const getStairDelay = (index, totalStairs = 10) => {
  return (totalStairs - index - 1) * 0.1
}

// Color themes for the transition
export const themes = {
  blue: {
    primary: '#1e40af',
    secondary: '#3b82f6',
    accent: '#60a5fa'
  },
  dark: {
    primary: '#1f2937',
    secondary: '#374151',
    accent: '#4b5563'
  },
  green: {
    primary: '#065f46',
    secondary: '#059669',
    accent: '#34d399'
  }
}
