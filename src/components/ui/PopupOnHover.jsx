import React from 'react';

export default function PopupOnHover(props) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {props.children}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-ink_black border border-dark_teal text-pearl_aqua text-sm rounded-lg shadow-xl whitespace-nowrap z-50">
          {props.content}
        </div>
      )}
    </div>
  );
}
