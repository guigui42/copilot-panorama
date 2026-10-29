import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { QRCodeSVG } from 'qrcode.react';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useI18n } from '../i18n';

interface ShareQrDialogProps {
  url: string;
  onClose: () => void;
}

export default function ShareQrDialog({ url, onClose }: ShareQrDialogProps) {
  const t = useI18n();
  const trapRef = useFocusTrap(true);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return createPortal(
    <>
      <div className="detail-overlay" onClick={onClose} aria-hidden="true" />
      <div
        ref={trapRef}
        id="share-qr-dialog"
        className="share-qr-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-qr-title"
        aria-describedby="share-qr-description"
      >
        <div className="detail-header">
          <h2 id="share-qr-title" className="detail-name">{t.ui.shareQrCode}</h2>
          <button
            ref={closeBtnRef}
            type="button"
            className="detail-close"
            onClick={onClose}
            aria-label={t.ui.closeQrCode}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
              <path d="M4 4l12 12" />
              <path d="M16 4 4 16" />
            </svg>
          </button>
        </div>
        <div className="share-qr-content">
          <p id="share-qr-description">{t.ui.shareQrDescription}</p>
          <QRCodeSVG
            className="share-qr-code"
            value={url}
            size={360}
            level="M"
            marginSize={4}
            bgColor="#ffffff"
            fgColor="#000000"
            role="img"
            aria-label={`${t.ui.shareQrCode}: ${url}`}
          />
          <a className="share-qr-url" href={url}>{url}</a>
        </div>
      </div>
    </>,
    document.body,
  );
}
