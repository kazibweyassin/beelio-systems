export function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.4 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4-.1.6.5 1.1 1.4 2 2.5 2.5.2.1.4.1.6-.1l.7-.8c.2-.2.4-.3.7-.1l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.3-.6 1.7-.5.5-1.3.7-2.1.6-1-.1-2.5-.6-4.1-2-1.3-1.2-2.2-2.7-2.5-3.8-.3-1.1 0-2.2.5-2.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function EnquiryPreview() {
  return (
    <div className="bg-[#0d1526] rounded-2xl p-6 border border-white/5" aria-hidden="true">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-electric/10 border border-electric/30 text-electric">
          <WhatsAppIcon className="h-4 w-4" />
        </span>
        <div>
          <strong className="block text-xs text-white">New enquiry</strong>
          <small className="text-[10px] text-white/40">Just now</small>
        </div>
        <span className="ml-auto rounded-full bg-electric/10 border border-electric/20 px-2.5 py-1 text-[10px] font-medium text-electric">
          Qualified
        </span>
      </div>
      <div className="mt-4 rounded-xl rounded-bl-sm bg-white/5 p-3 text-xs leading-5 text-white/70">
        Hi, I need help with a business website.
      </div>
      <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-4">
        {[0, 1, 2].map((step) => (
          <span
            key={step}
            className={`h-1.5 flex-1 rounded-full ${step < 2 ? "bg-electric" : "bg-white/10"}`}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-white/30">
        <span>Visit</span>
        <span>Capture</span>
        <span>Follow-up</span>
      </div>
    </div>
  );
}
