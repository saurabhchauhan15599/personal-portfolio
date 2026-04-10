import './index.scss';

interface ISwitch {
  checked: boolean;
  onChange: (event: React.ChangeEvent) => void;
}

const ThemeToggler = (props: ISwitch) => {
  const { checked, onChange } = props;

  return (
    <div className="toggle">
      <input
        id="theme-toggle"
        type="checkbox"
        onChange={onChange}
        checked={checked}
        aria-label="Toggle theme"
      />
      <label htmlFor="theme-toggle"></label>
    </div>
  );
};

export default ThemeToggler;
