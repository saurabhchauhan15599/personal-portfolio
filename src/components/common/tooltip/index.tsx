interface ITooltip {
  children: React.ReactNode;
  id?: string;
}

const Tooltip = (props: ITooltip) => {
  const { children, id = 'tooltip-animation' } = props;
  console.log(children);
  return (
    <div
      id={id}
      role="tooltip"
      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      {children}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  );
};

export default Tooltip;
