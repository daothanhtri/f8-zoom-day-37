import React, { useState, useRef } from "react";
import Modal from "../../components/Modal";
import styles from "./ModalDemo.module.scss";

function ModalDemoPage() {
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);
  const [isAnimatedModalOpen, setIsAnimatedModalOpen] = useState(false);
  const [isNoOverlayClickModalOpen, setIsNoOverlayClickModalOpen] =
    useState(false);
  const [isNoEscModalOpen, setIsNoEscModalOpen] = useState(false);
  const [isCustomStyleModalOpen, setIsCustomStyleModalOpen] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  const modalRef = useRef(null);
  const [isRefModalOpen, setIsRefModalOpen] = useState(false);

  const handleOpenRefModal = () => {
    modalRef.current.open();
    setIsRefModalOpen(true);
    console.log("Modal opened via ref.open()");
  };

  const handleCloseRefModal = () => {
    modalRef.current.close();
    setIsRefModalOpen(false);
    console.log("Modal closed via ref.close()");
  };

  const handleToggleRefModal = () => {
    modalRef.current.toggle();
    setIsRefModalOpen((prev) => !prev);
    console.log("Modal toggled via ref.toggle()");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Demo Modal Component</h1>
      <p>
        Nhấn vào các nút dưới đây để xem các trường hợp sử dụng khác nhau của
        Modal.
      </p>

      {/* Basic Modal */}
      <div className={styles.demoSection}>
        <h3>Modal cơ bản</h3>
        <p>Modal đơn giản với nút mở/đóng.</p>
        <button onClick={() => setIsBasicModalOpen(true)}>
          Mở Modal Cơ bản
        </button>
        <Modal
          isOpen={isBasicModalOpen}
          onRequestClose={() => setIsBasicModalOpen(false)}
        >
          <h2>Modal Cơ bản</h2>
          <p>Đây là nội dung của modal cơ bản.</p>
          <button
            onClick={() => setIsBasicModalOpen(false)}
            className={styles.closeButton}
          >
            Đóng Modal
          </button>
        </Modal>
      </div>

      {/* Modal with Animation */}
      <div className={styles.demoSection}>
        <h3>Modal với Animation</h3>
        <p>Modal có hiệu ứng mở/đóng mượt mà hơn nhờ closeTimeoutMS.</p>
        <button onClick={() => setIsAnimatedModalOpen(true)}>
          Mở Modal Animation
        </button>
        <Modal
          isOpen={isAnimatedModalOpen}
          onRequestClose={() => setIsAnimatedModalOpen(false)}
          closeTimeoutMS={500} // Thời gian animation
        >
          <h2>Modal Animation</h2>
          <p>Modal này có hiệu ứng mở và đóng.</p>
          <button
            onClick={() => setIsAnimatedModalOpen(false)}
            className={styles.closeButton}
          >
            Đóng Modal
          </button>
        </Modal>
      </div>

      {/* Modal no close on overlay click */}
      <div className={styles.demoSection}>
        <h3>Modal không đóng khi click overlay</h3>
        <p>
          Bạn chỉ có thể đóng modal này bằng cách click nút Đóng hoặc nhấn ESC.
        </p>
        <button onClick={() => setIsNoOverlayClickModalOpen(true)}>
          Mở Modal (Không Click Overlay)
        </button>
        <Modal
          isOpen={isNoOverlayClickModalOpen}
          onRequestClose={() => setIsNoOverlayClickModalOpen(false)}
          shouldCloseOnOverlayClick={false}
        >
          <h2>Modal Không Đóng bởi Overlay</h2>
          <p>Thử click ra bên ngoài overlay, modal sẽ không đóng.</p>
          <button
            onClick={() => setIsNoOverlayClickModalOpen(false)}
            className={styles.closeButton}
          >
            Đóng Modal
          </button>
        </Modal>
      </div>

      {/* Modal no close on Esc */}
      <div className={styles.demoSection}>
        <h3>Modal không đóng khi nhấn Esc</h3>
        <p>
          Bạn chỉ có thể đóng modal này bằng cách click nút Đóng hoặc click
          overlay.
        </p>
        <button onClick={() => setIsNoEscModalOpen(true)}>
          Mở Modal (Không nhấn Esc)
        </button>
        <Modal
          isOpen={isNoEscModalOpen}
          onRequestClose={() => setIsNoEscModalOpen(false)}
          shouldCloseOnEsc={false}
        >
          <h2>Modal Không Đóng bởi Esc</h2>
          <p>Thử nhấn phím Esc, modal sẽ không đóng.</p>
          <button
            onClick={() => setIsNoEscModalOpen(false)}
            className={styles.closeButton}
          >
            Đóng Modal
          </button>
        </Modal>
      </div>

      {/* Modal with custom className */}
      <div className={styles.demoSection}>
        <h3>Modal với Custom Styles</h3>
        <p>Modal này được áp dụng các lớp CSS tùy chỉnh.</p>
        <button onClick={() => setIsCustomStyleModalOpen(true)}>
          Mở Modal Custom Style
        </button>
        <Modal
          isOpen={isCustomStyleModalOpen}
          onRequestClose={() => setIsCustomStyleModalOpen(false)}
          overlayClassName={styles.customOverlayStyle}
          className={styles.customContent}
        >
          <h2>Modal Với Styles Tùy Chỉnh</h2>
          <p>Overlay và nội dung modal đều có style riêng biệt.</p>
          <button
            onClick={() => setIsCustomStyleModalOpen(false)}
            className={styles.closeButton}
          >
            Đóng Modal
          </button>
        </Modal>
      </div>

      {/* Modal with Callbacks */}
      <div className={styles.demoSection}>
        <h3>Modal với Callbacks (onAfterOpen, onAfterClose)</h3>
        <p>Kiểm tra console log để xem các callback được gọi.</p>
        <button onClick={() => setIsCallbackModalOpen(true)}>
          Mở Modal Callbacks
        </button>
        <Modal
          isOpen={isCallbackModalOpen}
          onAfterOpen={() => console.log("✅ Modal đã mở hoàn toàn!")}
          onAfterClose={() => console.log("❌ Modal đã đóng hoàn toàn!")}
          onRequestClose={() => setIsCallbackModalOpen(false)}
          closeTimeoutMS={400}
        >
          <h2>Modal Với Callbacks</h2>
          <p>Mở và đóng modal này, sau đó kiểm tra console log.</p>
          <button
            onClick={() => setIsCallbackModalOpen(false)}
            className={styles.closeButton}
          >
            Đóng Modal
          </button>
        </Modal>
      </div>

      {/*Modal with useImperativeHandle methods */}
      <div className={styles.demoSection}>
        <h3>Modal với `useImperativeHandle`</h3>
        <p>
          Điều khiển modal sử dụng các phương thức `open()`, `close()`,
          `toggle()` từ ref.
        </p>
        <div className={styles.refButtons}>
          <button onClick={handleOpenRefModal}>Open Modal via Ref</button>
          <button onClick={handleCloseRefModal}>Close Modal via Ref</button>
          <button onClick={handleToggleRefModal}>Toggle Modal via Ref</button>
        </div>
        <Modal
          ref={modalRef}
          isOpen={isRefModalOpen}
          onRequestClose={() => setIsRefModalOpen(false)}
          onAfterOpen={() => console.log("Ref Modal: onAfterOpen triggered")}
          onAfterClose={() => console.log("Ref Modal: onAfterClose triggered")}
        >
          <h2>Modal Điều Khiển qua Ref</h2>
          <p>Bạn đã mở modal này bằng ref.current.open()/toggle().</p>
          <button onClick={handleCloseRefModal} className={styles.closeButton}>
            Đóng Modal qua Ref
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default ModalDemoPage;
