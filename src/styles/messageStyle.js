// Default message styling
export const messageStyle = {
  general: {
    borderRadius: '5px',
    fontWeight: 600,
    marginBottom: '.125rem',
    marginTop: '.25rem',
    padding: '1rem',
    position: 'relative',
    textAlign: 'center',
    transitionDuration: '0.3s'
  },
  visible: { maxHeight: '100vh', opacity: 1 },
  hidden: { maxHeight: 0, opacity: 0, padding: 0 },
  button: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 900,
    padding: 0,
    position: 'absolute',
    right: '1rem',
    top: '1rem'
  }
};
