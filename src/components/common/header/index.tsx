import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/shadcn/ui/dropdown-menu';
import { useMediaQuery } from '@mui/material';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { DARK_MODE_MAP, primaryNavigation, secondaryNavigation } from '../../../helpers/constant';
import { AppContext } from '../../../helpers/hooks/AppContext';
import Divider from '../../base/divider';
import Typography from '../../base/typography';
import ThemeToggler from '../switch';
import css from './index.module.scss';
import { useCallback, useContext, useState } from 'react';

interface IHeader {
  theme?: string;
  setTheme?: (theme: string) => void;
}

const Header = (props: IHeader) => {
  const [open, setOpen] = useState(false);
  const { appDispatch } = useContext(AppContext);
  const { theme, setTheme = () => {} } = props;
  const mobileLayout = useMediaQuery('(max-width:480px)');

  const smoothScrollTo = useCallback((targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, []);

  const nextTheme = theme === DARK_MODE_MAP.light ? DARK_MODE_MAP.dark : DARK_MODE_MAP.light;

  return (
    <div className={css.header}>
      <section className={css.title}>
        <Typography variant="h2" className={css.text}>
          {!mobileLayout && <CheckCircle2 className="h-6 w-6 text-green-500" />} Portfolio
        </Typography>
      </section>
      <section className={css.links}>
        <div className={css.primary}>
          {primaryNavigation.map((val) => {
            return (
              <Typography
                key={val.id}
                className={css.link}
                onClick={() => smoothScrollTo(val.link)}
              >
                {val.label}
              </Typography>
            );
          })}
        </div>
        {!mobileLayout && <Divider className={css.divider} />}
        <div>
          <ThemeToggler
            checked={theme === DARK_MODE_MAP.dark}
            onChange={() => {
              setTheme(nextTheme);
              appDispatch({
                type: 'setTheme',
                payload: {
                  theme: nextTheme
                }
              });
            }}
          />
        </div>
        {!mobileLayout && <Divider className={css.divider} />}
        {!mobileLayout && (
          <div className={css.secondary}>
            {secondaryNavigation.map((val) => {
              return (
                <a href={val.link} target="_blank" rel="noopener noreferrer" key={val.id}>
                  <val.component
                    className={css.logo}
                    color={theme === DARK_MODE_MAP.dark ? '#fff' : '#000000'}
                  />
                </a>
              );
            })}
          </div>
        )}
      </section>
      {mobileLayout && (
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <button aria-label="Open menu" type="button">
              <ChevronDown />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {secondaryNavigation.map((val, index, array) => {
              return (
                <div key={val.id}>
                  <DropdownMenuLabel>
                    <a href={val.link} target="_blank" rel="noopener noreferrer">
                      {val.label}
                    </a>
                  </DropdownMenuLabel>
                  {index !== array.length - 1 && <DropdownMenuSeparator />}
                </div>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default Header;
