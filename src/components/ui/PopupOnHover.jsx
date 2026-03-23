import React from 'react';

export default function PopupOnHover(props) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute bottom-full mb-2 px-3 py-1 glass-card text-text text-xs whitespace-nowrap rounded-lg shadow-lg transition-opacity duration-200 z-[100] ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        {props.content}
      </div>
      {React.cloneElement(props.children, { 'aria-label': props.content })}
    </div>
  );
}
