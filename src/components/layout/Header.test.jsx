import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header component', () => {
  it('renders the header with name and profile picture', () => {
    render(<Header />);
    
    // Check for the name
    expect(screen.getByText('Pritam Santra')).toBeInTheDocument();
    
    // Check for the profile picture
    const profilePic = screen.getByAltText('Profile');
    expect(profilePic).toBeInTheDocument();
    expect(profilePic.tagName).toBe('IMG');
  });

  it('renders social media links', () => {
    render(<Header />);
    
    // Check for the GitHub link
    const githubLink = screen.getByRole('link', { name: /my github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/IamDaGod-kira/');
    
    // Check for the Instagram link
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/cameraman.pritam/');
  });
});
