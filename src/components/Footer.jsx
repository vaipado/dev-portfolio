
function Footer() {
    const currentYear = new Date().getFullYear()
    
    return (
      <footer>
        <div className="footer-content">
          <p>&copy; {currentYear} Carlos Godinho</p>
        </div>
      </footer>
    )
  }
  
  export default Footer