import { useState } from 'react';
import logo from '@/assets/Images/logo.png';
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from 'react-icons/hi2';
import { useThemeContext } from '@/hooks';
import { Image, Input } from '@/Common';
import { setItemLocalStorage } from '@/Helpers';

export default function Header() {
  const [toggle, setToggle] = useState(true);
  const { theme, toggleTheme } = useThemeContext();

  const handleToggle = () => {
    setItemLocalStorage('theme', theme === 'dark' ? 'light' : 'dark');
    toggleTheme();
    setToggle(!toggle);
  };

  return (
    <section className="flex p-3 items-center ">
      <Image url={logo} width={60} height={60} />
      <div className="rounded-full flex bg-slate-200 p-2 w-full mx-5 items-center">
        <HiOutlineMagnifyingGlass />
        <Input
          type="text"
          placeholder="Search Games"
          className="px-2 bg-transparent outline-none"
        />
      </div>
      <div>
        {toggle ? (
          <HiMoon
            className="text-[35px] cursor-pointer bg-slate-200 text-black p-1 rounded-full"
            onClick={handleToggle}
          />
        ) : (
          <HiSun
            className="text-[35px] cursor-pointer bg-slate-200 text-black p-1 rounded-full"
            onClick={handleToggle}
          />
        )}
      </div>
    </section>
  );
}
