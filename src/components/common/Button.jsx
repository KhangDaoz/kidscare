// Sử dụng inline style hoặc CSS Modules tùy chọn
const Button = ({ children, variant = 'primary', ...props }) => {
  const styles = {
    padding: '12px 24px',
    borderRadius: '999px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    backgroundColor: variant === 'primary' ? '#80BEED' : '#FFFFFF',
    color: variant === 'primary' ? '#FFFFFF' : '#80BEED',
    border: variant === 'secondary' ? '2px solid #80BEED' : 'none',
  };

  return (
    <button 
      style={styles}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };