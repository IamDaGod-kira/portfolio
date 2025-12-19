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
        className={`absolute bottom-full mb-2 px-3 py-1 glass-card bg-black/60 text-white text-xs whitespace-nowrap rounded-lg shadow-lg transition-opacity duration-200 z-[100] border border-white/10 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        {props.content}
      </div>
      {props.children}
    </div>
  );
}
