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
        <div className="absolute top-0 left-full p-2 bg-gray-200 shadow-lg rounded-lg">
          {props.content}
        </div>
      )}
    </div>
  );
}
