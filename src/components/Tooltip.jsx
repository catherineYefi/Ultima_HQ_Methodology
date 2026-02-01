// components/Tooltip.jsx
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// Tooltip Portal Component with Smart Positioning
export function TooltipPortal({ content, children, show }) {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    placement: "top",
  });
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (show && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const tooltipHeight = 80;

      const spaceAbove = rect.top;
      const spaceBelow = viewportHeight - rect.bottom;

      const showBelow = spaceAbove < 100 || spaceBelow > spaceAbove;

      setPosition({
        top: showBelow ? rect.bottom + 8 : rect.top - 8,
        left: rect.left + rect.width / 2,
        placement: showBelow ? "bottom" : "top",
      });
    }
  }, [show]);

  return (
    <>
      <span ref={triggerRef}>{children}</span>
      {show &&
        ReactDOM.createPortal(
          <div
            ref={tooltipRef}
            style={{
              position: "fixed",
              top: `${position.top}px`,
              left: `${position.left}px`,
              transform:
                position.placement === "bottom"
                  ? "translate(-50%, 0)"
                  : "translate(-50%, -100%)",
              zIndex: 10000,
              background: "rgba(0, 0, 0, 0.95)",
              color: "white",
              padding: "10px 14px",
              borderRadius: 8,
              fontSize: 12,
              lineHeight: 1.5,
              maxWidth: 320,
              whiteSpace: "normal",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            {content}
          </div>,
          document.body
        )}
    </>
  );
}

export function Tooltip({ content, children }) {
  const [show, setShow] = useState(false);

  return (
    <TooltipPortal content={content} show={show}>
      <span
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        style={{ cursor: "help", display: "inline-flex", alignItems: "center" }}
      >
        {children}
      </span>
    </TooltipPortal>
  );
}
