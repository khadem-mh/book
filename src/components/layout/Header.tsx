export default function Header() {
  return (
    <header className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">📚 کتابخانه من</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>صفحه اصلی</a></li>
          <li><a>کتاب‌ها</a></li>
          <li><a>درباره</a></li>
        </ul>
      </div>
    </header>
  );
}