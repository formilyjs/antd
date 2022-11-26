import { CSSProperties } from 'react'
import { GenerateStyle } from '../../__builtins__'

export const genOtherStyle: GenerateStyle = (token) => {
  const {
    componentCls,
    colorError,
    colorErrorBg,
    colorWarningBg,
    colorWarning,
    colorBorder,
    colorSuccess,
    controlHeightSM,
    lineWidth,
    colorPrimaryBorderHover,
    colorPrimary,
    prefixCls,
    fontSize,
    marginSM,
    controlHeight,
    lineHeight,
    controlOutlineWidth,
    controlOutline,
    colorPrimaryHover,
  } = token

  const hover = (color = colorPrimaryBorderHover): CSSProperties => ({
    borderColor: color,
    borderRightWidth: lineWidth,
  })

  const active = (color = colorPrimary): CSSProperties => ({
    borderColor: color,
    borderRightWidth: lineWidth,
    outline: 0,
    boxShadow: `${controlOutlineWidth} 0 ${controlOutline} ${colorPrimaryHover}`,
  })

  return {
    [componentCls]: {
      '&-layout-vertical': {
        display: 'block',

        [`${componentCls}-label`]: {
          minHeight: controlHeight - 10,
          lineHeight: lineHeight,
        },
      },

      [`textarea${prefixCls}-input`]: {
        height: 'auto',
      },

      [`input[type='radio'], input[type='checkbox']`]: {
        width: fontSize,
        height: fontSize,
      },

      [`${componentCls}-feedback-layout-popover`]: {
        marginBottom: 8,
      },

      [`${componentCls}-label-tooltip-icon`]: {
        marginLeft: 4,
        color: token.colorTextSecondary,
        display: 'flex',
        alignItems: 'center',
        maxHeight: controlHeight,

        span: {
          display: 'inline-block',
        },
      },

      [`${prefixCls}-upload`]: {
        background: 'transparent',
      },

      [`${prefixCls}-upload${prefixCls}-upload-drag`]: {
        background: token.colorBgBase,
      },

      [`${prefixCls}-radio-inline, ${prefixCls}-checkbox-inline`]: {
        display: 'inline-block',
        marginLeft: marginSM,
        fontWeight: 'normal',
        verticalAlign: 'middle',
        cursor: 'pointer',

        '&:first-child': {
          marginLeft: 0,
        },
      },

      [`${prefixCls}-radio-vertical,
        ${prefixCls}-checkbox-vertical`]: {
        display: 'block',
      },

      [`${prefixCls}-checkbox-vertical + ${prefixCls}-checkbox-vertical,
        ${prefixCls}-radio-vertical + ${prefixCls}-radio-vertical`]: {
        marginLeft: 0,
      },

      [`${prefixCls}-input-number`]: {
        width: '100%',

        [`+ ${prefixCls}-form-text`]: {
          marginLeft: marginSM,
        },

        '&-handler-wrap': {
          zIndex: 2,
        },
      },
      [`${prefixCls}-select,
        ${prefixCls}-cascader-picker,
        ${prefixCls}-picker`]: {
        width: '100%',
      },

      [`${prefixCls}-input-group ${prefixCls}-select,
        ${prefixCls}-input-group ${prefixCls}-cascader-picker`]: {
        width: 'auto',
      },

      [`${componentCls}-control-align-left`]: {
        [`${componentCls}-control-content`]: {
          justifyContent: 'flex-start',
        },
      },

      [`${componentCls}-control-align-right`]: {
        [`${componentCls}-control-content`]: {
          justifyContent: 'flex-end',
        },
      },

      [`${componentCls}-control-wrap`]: {
        [`${componentCls}-control`]: {
          whiteSpace: 'pre-line',
          wordBreak: 'break-all',
        },
      },

      [`${componentCls}-asterisk`]: {
        color: colorError,
        marginRight: '4px',
        display: 'inline-block',
        fontFamily: 'SimSun, sans-serif',
      },

      [`${componentCls}-colon`]: {
        marginLeft: 2,
        marginRight: 8,
      },

      [`${componentCls}-help,
        ${componentCls}-extra`]: {
        clear: 'both',
        minHeight: controlHeightSM - 2,
        color: 'rgba(0, 0, 0, 0.45)',
        transition: 'color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
        paddingTop: 0,
      },

      [`${componentCls}-fullness`]: {
        [`> ${componentCls}-control`]: {
          [`> ${componentCls}-control-content`]: {
            [`> ${componentCls}-control-content-component`]: {
              '> *:first-child': {
                width: '100%',
              },
            },
          },
        },
      },

      [`${componentCls}-control-content-component-has-feedback-icon`]: {
        borderRadius: 2,
        border: `1px solid ${colorBorder}`,
        paddingRight: 8,
        transition: 'all 0.3s',
        touchAction: 'manipulation',
        outline: 'none',

        [`${componentCls}-input-number,
          ${componentCls}-picker,
          ${componentCls}-cascader-picker:focus ${componentCls}-cascader-input,
          ${componentCls}-select:not(${componentCls}-select-customize-input)
          ${componentCls}-select-selector,
          ${componentCls}-input-affix-wrapper,
          ${componentCls}-input`]: {
          border: 'none !important',
          boxShadow: 'none !important',
        },
      },

      [`${componentCls}-bordered-none`]: {
        [`${componentCls}-input-number,
    ${componentCls}:-input-affix-wrapper,
    ${componentCls}-picker,
    ${componentCls}-cascader-picker:focus ${componentCls}-cascader-input,
    ${componentCls}-select:not(${componentCls}-select-customize-input)
      ${componentCls}-select-selector,
    ${componentCls}-input`]: {
          border: 'none !important',
          boxShadow: 'none !important',
        },

        [`${componentCls}-input-number-handler-wrap`]: {
          border: 'none !important',

          [`${componentCls}-input-number-handler`]: {
            border: 'none !important',
          },
        },
      },

      [`${componentCls}-inset`]: {
        borderRadius: 2,
        border: `1px solid ${colorBorder}`,
        paddingLeft: 12,
        transition: '0.3s all',

        [`${componentCls}-input-number,
          ${componentCls}-picker,
          ${componentCls}-cascader-picker:focus ${componentCls}-cascader-input,
          ${componentCls}-select:not(${componentCls}-select-customize-input)
          ${componentCls}-select-selector,
          ${componentCls}-input-affix-wrapper,
          ${componentCls}-input`]: {
          border: 'none !important',
          boxShadow: 'none !important',
        },

        [`${componentCls}-input-number-handler-wrap`]: {
          border: 'none !important',

          [`${componentCls}-input-number-handler`]: {
            border: 'none !important',
          },
        },

        '&:hover': {
          ...hover(),
        },
      },

      [`${componentCls}-inset-active`]: {
        ...active(),
      },

      [`${componentCls}-active`]: {
        [`${componentCls}-control-content-component-has-feedback-icon`]: {
          ...active(),
        },

        [`${componentCls}-input-number,
        ${componentCls}-picker,
        ${componentCls}-cascader-picker:focus ${componentCls}-cascader-input,
        ${componentCls}-select:not(${componentCls}-select-customize-input)
        ${componentCls}-select-selector,
        ${componentCls}-input`]: {
          ...active(),
        },
      },

      [`${componentCls}`]: {
        '&:hover': {
          [`${componentCls}-control-content-component-has-feedback-icon`]: {
            ...hover(),
          },
        },
      },

      [`${componentCls}-error`]: {
        [`${componentCls}-select-selector,
        ${componentCls}-cascader-picker,
        ${componentCls}-picker,
        ${componentCls}-input,
        ${componentCls}-input-number,
        ${componentCls}-input-affix-wrapper,
        ${componentCls}-input-affix-wrapper,
        ${componentCls}-input`]: {
          borderColor: `${colorError}  !important`,
        },

        [`${componentCls}-select-selector,
        ${componentCls}-cascader-picker,
        ${componentCls}-picker,
        ${componentCls}-input,
        ${componentCls}-input-number,
        ${componentCls}-input-affix-wrapper,
        ${componentCls}-input-affix-wrapper:hover,
        ${componentCls}-input:hover`]: {
          borderColor: `${colorError}  !important`,
        },

        [`${componentCls}-select:not(${componentCls}-select-disabled):not(${componentCls}-select-customize-input)`]:
          {
            [`${componentCls}-select-selector`]: {
              backgroundColor: colorErrorBg,
              borderColor: `${colorError}  !important`,
            },

            [`&${componentCls}-select-open ${componentCls}-select-selector,
            &${componentCls}-select-focused ${componentCls}-select-selector`]: {
              ...active(colorError),
            },
          },

        [`${componentCls}-input-number,
        ${componentCls}-picker`]: {
          backgroundColor: colorErrorBg,
          borderColor: colorError,

          [`&-focused,
          &:focus`]: {
            ...active(colorError),
          },

          [`&:not([disabled]):hover`]: {
            backgroundColor: colorErrorBg,
            borderColor: colorError,
          },
        },

        [`${componentCls}-cascader-picker:focus ${componentCls}-cascader-input`]:
          {
            backgroundColor: colorErrorBg,
            ...active(colorError),
          },

        [`${componentCls}-input-affix-wrapper-focused,
        ${componentCls}-input-affix-wrapper:focus,
        ${componentCls}-input-focused,
        ${componentCls}-input:focus`]: {
          ...active(colorError),
        },
      },

      [`${componentCls}-error-help`]: {
        color: `${colorError}  !important`,
      },

      [`${componentCls}-warning-help`]: {
        color: colorSuccess,
      },

      [`${componentCls}-success-help`]: {
        color: `${colorSuccess} !important`,
      },

      [`${componentCls}-warning`]: {
        [`${componentCls}-select-selector,
        ${componentCls}-cascader-picker,
        ${componentCls}-picker,
        ${componentCls}-input,
        ${componentCls}-input-number,
        ${componentCls}-input-affix-wrapper,
        ${componentCls}-input-affix-wrapper,
        ${componentCls}-input`]: {
          borderColor: colorSuccess,
        },

        [`${componentCls}-select-selector,
        ${componentCls}-cascader-picker,
        ${componentCls}-picker,
        ${componentCls}-input,
        ${componentCls}-input-number,
        ${componentCls}-input-affix-wrapper,
        ${componentCls}-input-affix-wrapper:hover,
        ${componentCls}-input:hover`]: {
          borderColor: colorSuccess,
        },

        [`${componentCls}-select:not(${componentCls}-select-disabled):not(${componentCls}-select-customize-input)`]:
          {
            [`${componentCls}-select-selector`]: {
              backgroundColor: colorWarningBg,
              borderColor: colorSuccess,
            },

            [`&${componentCls}-select-open ${componentCls}-select-selector,
      &${componentCls}-select-focused ${componentCls}-select-selector`]: {
              ...active(colorWarning),
            },
          },

        [`${componentCls}-input-number,
        ${componentCls}-picker`]: {
          backgroundColor: colorWarningBg,
          borderColor: colorWarning,

          [`&-focused,
      &:focus`]: {
            ...active(colorWarning),
          },

          '&:not([disabled]):hover': {
            backgroundColor: colorWarningBg,
            borderColor: colorWarning,
          },
        },

        [`${componentCls}-cascader-picker:focus ${componentCls}-cascader-input`]:
          {
            backgroundColor: colorWarningBg,
            ...active(colorWarning),
          },

        [`${componentCls}-input-affix-wrapper-focused,
        ${componentCls}-input-affix-wrapper:focus,
        ${componentCls}-input-focused,
        ${componentCls}-input:focus`]: {
          ...active(colorWarning),
        },
      },

      [`${componentCls}-success{
      ${componentCls}-select-selector,
      ${componentCls}-cascader-picker,
      ${componentCls}-picker,
      ${componentCls}-input,
      ${componentCls}-input-number,
      ${componentCls}-input-affix-wrapper,
      ${componentCls}-input-affix-wrapper,
      ${componentCls}-input`]: {
        borderColor: `${colorSuccess} !important`,
      },

      [`${componentCls}-select-selector,
      ${componentCls}-cascader-picker,
      ${componentCls}-picker,
      ${componentCls}-input,
      ${componentCls}-input-number,
      ${componentCls}-input-affix-wrapper,
      ${componentCls}-input-affix-wrapper:hover,
      ${componentCls}-input:hover`]: {
        borderColor: `${colorSuccess} !important`,
      },

      [`${componentCls}-input-affix-wrapper-focused,
      ${componentCls}-input-affix-wrapper:focus,
      ${componentCls}-input-focused,
      ${componentCls}-input:focus`]: {
        borderColor: `${colorSuccess} !important`,
        borderRightWidth: '1px !important',
        outline: 0,
      },
    },
  }
}
