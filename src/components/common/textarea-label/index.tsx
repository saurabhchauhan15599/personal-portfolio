import { forwardRef, memo, Ref } from 'react';
import { TextArea, TextAreaProps } from '../../../components/base';
import css from './index.module.scss';

interface TeaxtAreaLabelProps extends TextAreaProps {
  label?: string;
  helperText?: string;
  error?: boolean;
  rootClassName?: string;
}

const RefTextareaLabel = (props: TeaxtAreaLabelProps, ref: Ref<HTMLTextAreaElement>) => {
  const { label, helperText, error, required, className, rootClassName, ...otherProps } = props;

  const inputClass = error ? `${css.inputError} ${className}` : className;
  const helperTextClass = error
    ? `${css.textAreaHelperText} ${css.helperTextError}`
    : `${css.textAreaHelperText}`;
  const showAsterisk = required ? ' *' : undefined;

  return (
    <label className={`${css.textAreaWrapper} ${rootClassName}`}>
      {label && (
        <span className={css.textAreaLabel} data-value={showAsterisk}>
          {label}
        </span>
      )}
      <TextArea
        {...otherProps}
        ref={ref}
        required={required}
        className={inputClass}
        aria-label={label?.toString()}
        aria-required={required}
        aria-invalid={error}
        aria-disabled={otherProps.disabled}
        aria-readonly={otherProps.readOnly}
      />
      {helperText && <span className={helperTextClass}>{helperText}</span>}
    </label>
  );
};

const TextareaLabel = forwardRef(RefTextareaLabel);

export type { TeaxtAreaLabelProps };
export default memo(TextareaLabel);
