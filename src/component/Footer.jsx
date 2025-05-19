

const Footer = () => {
  return (
    <div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p>Phone: +1 234 567 890</p>
          <p>Email: info@example.com</p>
          <p>Address: 123 Main Street, City</p>
        </div>

    
      <div className="text-center mt-8 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
      </div>
  </div>
    
  );
};

export default Footer;
