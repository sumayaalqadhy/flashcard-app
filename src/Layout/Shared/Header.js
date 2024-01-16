import React from "react";

function Header() {
  return (
    <header className="jumbotron" style={{ backgroundColor: '#eec0c8', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
      <div className="container text-white text-center">
        <h1 className="display-4" style={{ fontFamily: 'cursive' }}>
          Flashcard App!
        </h1>
        <p className="lead" style={{ fontWeight: 'bold' }}>Your favorite study buddy.</p>
      </div>
    </header>
  );
}

export default Header;

