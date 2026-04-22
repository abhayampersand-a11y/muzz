import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const path = usePathname();

  const baseClass = `flex items-center justify-between w-full py-2 px-3 text-black rounded-md dark:text-grey dark:text-opacity-70 focus:outline-hidden ${path === item.href ? 'bg-primary text-white dark:text-white!' : '  '} ${path.startsWith("/blog") && item.href==="/blog"?"bg-primary! text-white dark:text-white!":null}`;

  if (item.submenu) {
    return (
      <div className="relative block w-full">
        <button
          type="button"
          onClick={() => setSubmenuOpen((o) => !o)}
          className={baseClass}
        >
          {item.label}
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className={`transition-transform ${submenuOpen ? 'rotate-180' : ''}`}>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        </button>
        {submenuOpen && (
          <div className="bg-white dark:bg-darklight p-2 w-full">
            {item.submenu.map((subItem, index) => (
              <Link
                key={index}
                href={subItem.href}
                onClick={() => setSubmenuOpen(false)}
                className="block py-2 px-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-midnight_text rounded"
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link href={item.href} className="relative block w-full">
      <span className={baseClass}>{item.label}</span>
    </Link>
  );
};

export default MobileHeaderLink;
