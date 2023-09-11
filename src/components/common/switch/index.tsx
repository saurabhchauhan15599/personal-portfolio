import './index.scss';

interface ISwitch {
  checked: boolean;
  onChange: (event: React.ChangeEvent) => void;
}

const ThemeToggler = (props: ISwitch) => {
  const { checked, onChange } = props;

  return (
    <div className="toggle">
      <input type="checkbox" onChange={onChange} checked={checked} />
      <label></label>
    </div>
  );
};

export default ThemeToggler;
