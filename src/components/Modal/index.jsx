import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

function Modal({
  isOpen,
  onAfterOpen,
  onAfterClose,
  onRequestClose,
  closeTimeoutMS = 0,
  overlayClassName = "",
  className = "",
  bodyOpenClassName = "modal-open",
  htmlOpenClassName = "modal-open",
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
  children,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const timeoutRef = useRef(null);

  const getScrollbarWidth = useCallback(() => {
    if (typeof window === "undefined") return 0;
    const scrollDiv = document.createElement("div");
    scrollDiv.style.width = "100px";
    scrollDiv.style.height = "100px";
    scrollDiv.style.overflow = "scroll";
    scrollDiv.style.position = "absolute";
    scrollDiv.style.top = "-9999px";
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }, []);

  const handleOpen = useCallback(() => {
    setIsVisible(true);
    setIsTransitioning(true);

    document.body.classList.add(bodyOpenClassName);
    document.documentElement.classList.add(htmlOpenClassName);
    const scrollbarWidth = getScrollbarWidth();
    if (scrollbarWidth > 0) {
      document.body.style.setProperty(
        "--scrollbar-width",
        `${scrollbarWidth}px`
      );
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      onAfterOpen && onAfterOpen();
    }, closeTimeoutMS || 300);
  }, [
    bodyOpenClassName,
    htmlOpenClassName,
    onAfterOpen,
    closeTimeoutMS,
    getScrollbarWidth,
  ]);

  const handleClose = useCallback(() => {
    setIsTransitioning(true);

    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      setIsTransitioning(false);

      document.body.classList.remove(bodyOpenClassName);
      document.documentElement.classList.remove(htmlOpenClassName);
      document.body.style.removeProperty("--scrollbar-width");
      document.body.style.paddingRight = "";

      onAfterClose && onAfterClose();
    }, closeTimeoutMS || 300);
  }, [bodyOpenClassName, htmlOpenClassName, onAfterClose, closeTimeoutMS]);

  useEffect(() => {
    if (isOpen) {
      handleOpen();
    } else {
      if (isVisible) {
        handleClose();
      }
    }

    return () => {
      clearTimeout(timeoutRef.current);
      document.body.classList.remove(bodyOpenClassName);
      document.documentElement.classList.remove(htmlOpenClassName);
      document.body.style.removeProperty("--scrollbar-width");
      document.body.style.paddingRight = "";
    };
  }, [
    isOpen,
    handleOpen,
    handleClose,
    isVisible,
    isTransitioning,
    bodyOpenClassName,
    htmlOpenClassName,
  ]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (shouldCloseOnEsc && event.key === "Escape") {
        onRequestClose && onRequestClose();
      }
    };

    const handleOverlayClick = (event) => {
      if (shouldCloseOnOverlayClick && overlayRef.current === event.target) {
        onRequestClose && onRequestClose();
      }
    };

    if (isVisible) {
      document.addEventListener("keydown", handleKeyDown);
      overlayRef.current &&
        overlayRef.current.addEventListener("click", handleOverlayClick);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (overlayRef.current) {
        overlayRef.current.removeEventListener("click", handleOverlayClick);
      }
    };
  }, [isVisible, shouldCloseOnEsc, shouldCloseOnOverlayClick, onRequestClose]);

  if (!isVisible && !isTransitioning) {
    return null;
  }

  const overlayClasses = [
    styles.overlay,
    overlayClassName,
    isOpen && isTransitioning && styles.entering,
    !isOpen && isTransitioning && styles.exiting,
    isOpen ? styles.visible : styles.hidden,
  ]
    .filter(Boolean)
    .join(" ");

  const modalClasses = [
    styles.modal,
    className,
    isOpen && isTransitioning && styles.entering,
    !isOpen && isTransitioning && styles.exiting,
    isOpen ? styles.visible : styles.hidden,
  ]
    .filter(Boolean)
    .join(" ");

  return ReactDOM.createPortal(
    <div className={overlayClasses} ref={overlayRef}>
      <div className={modalClasses} ref={modalRef}>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
