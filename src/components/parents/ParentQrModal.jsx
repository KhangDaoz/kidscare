import { QrCode } from 'lucide-react';

export default function ParentQrModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-6 backdrop-blur-md">
      <div className="w-full max-w-md space-y-6 rounded-[3rem] border border-white bg-white p-10 text-center shadow-2xl">
        <h3 className="text-2xl font-black text-slate-800">Xác thực O2O</h3>

        <div className="relative mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-[3rem] border-8 border-sky-500 bg-slate-50 shadow-inner">
          <div className="parents-scan-line absolute inset-x-0 top-0 h-1 bg-sky-500 shadow-[0_0_15px_#0ea5e9]" />
          <QrCode className="h-32 w-32 text-slate-200" />
        </div>

        <p className="text-xs font-bold uppercase tracking-tighter text-slate-400">
          AI đang chờ bạn quét mã trên điện thoại của bé để ghi nhận kết quả.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="w-full rounded-2xl bg-sky-500 py-4 font-black text-white shadow-xl transition-all active:scale-95"
        >
          Xác nhận xong
        </button>
      </div>
    </div>
  );
}
