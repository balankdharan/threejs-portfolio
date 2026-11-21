import { socialLinks } from "../constants";

const NotConnectedDialog = ({ name, onClose }) => {
  const contacts = socialLinks.filter((item) => item.link.startsWith("http"));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="not-connected-title"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase text-amber-700">
          Not connected
        </p>
        <h2
          id="not-connected-title"
          className="mt-4 text-2xl font-poppins font-semibold text-black-500"
        >
          Thanks{name ? `, ${name}` : ""}!
        </h2>
        <p className="mt-3 text-slate-500">
          This contact form isn't connected to an email service yet, so your
          message wasn't sent.
        </p>
        <p className="mt-3 text-slate-500">
          When it's connected, the form sends your name, email and message
          straight to my inbox through EmailJS, and the fox reacts when the
          message goes out.
        </p>
        <p className="mt-3 text-slate-500">
          Until then, you can reach me here:
        </p>
        <div className="mt-4 flex gap-3">
          {contacts.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 font-medium text-black-500 hover:bg-slate-50"
            >
              <img
                src={item.iconUrl}
                alt=""
                className="h-5 w-5 object-contain"
              />
              {item.name}
            </a>
          ))}
        </div>
        <button type="button" className="btn mt-8" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
};

export default NotConnectedDialog;
