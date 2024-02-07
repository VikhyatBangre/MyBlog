import React from 'react';

export default function Footer() {
  let footerStyle = {
    position: "absolute",
    bottom: "0vh",
    width: "100%",
    boder: "5px solid red"
  }
  return (
    <div>
      <footer className='bg-dark text-light text-center py-3' style={footerStyle}>
        Copyright &copy; Mylist.com
      </footer>
    </div>
  );
}
