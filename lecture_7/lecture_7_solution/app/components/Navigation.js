import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function Navigation({ children }) {
  return (
    <div>
      <h1>Speed Typer</h1>
      <div><Link to="/play">Play a game</Link></div>
      <div><Link to="/pastGames">View history of games</Link></div>
      <div><Link to="/about">About</Link></div>
      {children}
    </div>
  );
}

Navigation.propTypes = {
  children: PropTypes.any
};
