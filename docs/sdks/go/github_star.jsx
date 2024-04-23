import React from 'react';
import GitHubButton from 'react-github-btn'

const GitHubStarButton = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <GitHubButton 
                href="https://github.com/kwilteam/kwil-db" 
                data-color-scheme="no-preference: light; light: light; dark: dark_dimmed;" 
                data-icon="octicon-star" 
                data-size="large" 
                aria-label="Star kwilteam/kwil-db on GitHub"
            >
                Star kwil-db
            </GitHubButton>
            <div 
                style={{
                    width: 5,
                }}
            />
            <GitHubButton 
                href="https://github.com/kwilteam" 
                data-color-scheme="no-preference: light; light: light; dark: dark_dimmed;" 
                data-size="large" 
                aria-label="Follow @kwilteam on GitHub"
            >
                Follow @kwilteam
            </GitHubButton>
        </div>
    );
  };
  
  export default GitHubStarButton;
  