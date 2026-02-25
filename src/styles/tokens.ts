export const colors = {
  background: '#000000',
  backgroundGradient:
    'radial-gradient(ellipse 150% 50% at 50% 100%, rgba(106, 108, 212, 0.35) 0%, rgba(106, 108, 212, 0.18) 35%, rgba(0, 0, 0, 1) 70%)',
  cardGradient:
    'linear-gradient(157deg, rgba(39, 39, 39, 1) 0%, rgba(41, 37, 37, 1) 100%)',
  headerGradient:
    'linear-gradient(0deg, rgba(18, 18, 25, 0) 0%, rgba(18, 18, 25, 1) 100%)',
  white: '#FFFFFF',
  inputBarBg: 'rgba(45, 45, 45, 0.8)',
  buttonBg: '#2B2B2B',
  iconButtonBg: 'rgba(82, 82, 82, 0.5)',
  sendButtonBg: 'rgba(82, 82, 82, 0.7)',
  accentPurple: '#724FFF',
  accentBlue: '#6C8CEB',
} as const;

export const typography = {
  greetingLight: {
    fontFamily: 'Montserrat',
    fontWeight: 300,
    fontSize: '34px',
    letterSpacing: '-0.03em',
  },
  greetingBold: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '34px',
    letterSpacing: '-0.03em',
    lineHeight: '1.15em',
  },
  aiResponse: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '15px',
    letterSpacing: '0.02em',
    lineHeight: '1.47em',
  },
  cardTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '11px',
    lineHeight: '1.67em',
  },
  cardSubtitle: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '1.3em',
    opacity: 0.6,
  },
  buttonText: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '1.22em',
  },
  inputPlaceholder: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '14px',
  },
} as const;
