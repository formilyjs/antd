import type { FullToken } from 'antd/es/theme'
import { GenerateStyle, genStyleHook } from '../../__builtins__'
import { getAnimationStyle } from './animation'
import { getGridStyle } from './grid'
import { genOtherStyle } from './other'

export interface FormToken extends FullToken<'Form'> {
  formItemCls: string
}

const genSmallStyle: GenerateStyle = (token) => {
  const { componentCls, prefixCls, controlHeightSM, marginLG, fontSizeSM } =
    token
  return {
    fontSize: fontSizeSM,
    lineHeight: controlHeightSM,
    [`${componentCls}-label`]: {
      lineHeight: controlHeightSM,
      minHeight: controlHeightSM - 2,

      '> label': {
        height: controlHeightSM,
      },
    },

    [`${componentCls}-control-content`]: {
      ' &-component': {
        minHeight: controlHeightSM - 2,
        lineHeight: controlHeightSM + 2,
      },
    },

    [`${componentCls}-help,
      ${componentCls}-extra`]: {
      minHeight: controlHeightSM - 4,
      lineHeight: controlHeightSM - 4,
    },

    [`${componentCls}-control-content`]: {
      minHeight: controlHeightSM - 2,
    },

    [`${prefixCls}-input-affix-wrapper,
      ${prefixCls}-input-number,
      ${prefixCls}-picker`]: {
      padding: `0px 11px`,

      input: {
        height: controlHeightSM - 2,
        fontSize: fontSizeSM,
      },
    },

    [`${prefixCls}-cascader-picker`]: {
      height: controlHeightSM - 2,

      input: {
        padding: '0 7px',
        height: controlHeightSM - 2,
        fontSize: fontSizeSM,
      },
    },

    [`${prefixCls}-select-single:not(${prefixCls}-select-customize-input) ${prefixCls}-select-selector`]:
      {
        padding: `0px 11px`,
        height: controlHeightSM - 2,
        fontSize: fontSizeSM,
        lineHeight: controlHeightSM,

        [`${prefixCls}-select-selection-search`]: {
          height: controlHeightSM,
          lineHeight: controlHeightSM - 2,

          '&-input': {
            height: controlHeightSM - 2,
            lineHeight: controlHeightSM - 2,
          },
        },

        [`${prefixCls}-select-selection-placeholder`]: {
          height: controlHeightSM,
          lineHeight: controlHeightSM - 2,
        },

        [`${prefixCls}-select-selection-item`]: {
          height: controlHeightSM,
          lineHeight: controlHeightSM - 2,
        },
        [`${prefixCls}-select-multiple:not(${prefixCls}-select-customize-input)
          ${prefixCls}-select-selector`]: {
          padding: '0px 2px',
          height: controlHeightSM - 2,
          fontSize: fontSizeSM,
          lineHeight: controlHeightSM,

          '&::after': {
            height: controlHeightSM - 8,
            lineHeight: controlHeightSM - 8,
          },

          [`${prefixCls}-select-selection-search`]: {
            height: controlHeightSM - 8,
            lineHeight: controlHeightSM - 8,
            marginInlineStart: 0,

            '&-input': {
              height: controlHeightSM - 12,
              lineHeight: controlHeightSM - 12,
            },
          },

          [`${prefixCls}-select-selection-placeholder`]: {
            height: controlHeightSM - 8,
            lineHeight: controlHeightSM - 8,
            left: 4,
          },

          [`${prefixCls}-select-selection-overflow-item`]: {
            alignSelf: 'flex-start',

            [`${prefixCls}-select-selection-item`]: {
              lineHeight: controlHeightSM - 8,
              height: controlHeightSM - 8,
            },
          },
        },

        [`&${componentCls}-feedback-layout-terse`]: {
          marginBottom: 8,

          [`&${componentCls}-feedback-has-text:not(${componentCls}-inset)`]: {
            marginBottom: 0,
          },
        },

        [`&${componentCls}-feedback-layout-loose`]: {
          marginBottom: marginLG,

          [`&${componentCls}-feedback-has-text:not(${componentCls}-inset)`]: {
            marginBottom: 0,
          },
        },
      },
  }
}

const genLargeStyle: GenerateStyle = (token) => {
  const {
    componentCls,
    prefixCls,
    fontSizeLG,
    controlHeightLG,
    controlHeightSM,
    marginLG,
  } = token
  return {
    fontSize: fontSizeLG,
    lineHeight: controlHeightLG,
    [`${componentCls}-label`]: {
      lineHeight: controlHeightLG,
      minHeight: controlHeightLG - 2,

      '> label': {
        height: controlHeightLG,
      },
    },

    [`${componentCls}-control-content`]: {
      ' &-component': {
        minHeight: controlHeightLG - 2,
        lineHeight: controlHeightLG,
      },
    },

    [`${componentCls}-help,
      ${componentCls}-extra`]: {
      minHeight: controlHeightSM,
      lineHeight: controlHeightSM,
    },

    [`${componentCls}-control-content`]: {
      minHeight: controlHeightLG - 2,
    },

    [`${prefixCls}-input`]: {
      fontSize: fontSizeLG,
    },

    [`${prefixCls}-input-number`]: {
      fontSize: fontSizeLG,

      input: {
        height: controlHeightLG - 2,
      },
    },

    [`${prefixCls}-input-affix-wrapper,
      ${prefixCls}-picker`]: {
      padding: `0px 11px`,
      lineHeight: controlHeightLG - 2,
      input: {
        height: controlHeightLG - 2,
        fontSize: fontSizeLG,
      },
    },

    [`${prefixCls}-btn`]: {
      height: controlHeightLG,
      padding: '0 8px',
    },

    [`${prefixCls}-radio-button-wrapper`]: {
      height: controlHeightLG,
      lineHeight: controlHeightLG,
    },

    [`${prefixCls}-cascader-picker`]: {
      height: controlHeightLG - 2,

      input: {
        padding: '0 11px',
        height: controlHeightLG - 2,
        fontSize: fontSizeLG,
      },
    },

    [`${prefixCls}-select-single:not(${prefixCls}-select-customize-input) ${prefixCls}-select-selector`]:
      {
        padding: `0px 11px`,
        height: controlHeightLG,
        fontSize: fontSizeLG,
        lineHeight: controlHeightLG,

        [`${prefixCls}-select-selection-search`]: {
          height: controlHeightLG,
          lineHeight: controlHeightLG - 2,

          '&-input': {
            height: controlHeightLG,
            lineHeight: controlHeightLG - 2,
          },
        },

        [`${prefixCls}-select-selection-placeholder`]: {
          height: controlHeightLG,
          lineHeight: controlHeightLG - 2,
        },

        [`${prefixCls}-select-selection-item`]: {
          height: controlHeightLG,
          lineHeight: controlHeightLG - 2,
        },
        [`${prefixCls}-select-multiple:not(${prefixCls}-select-customize-input)
          ${prefixCls}-select-selector`]: {
          padding: '0px 2px',
          height: controlHeightLG - 2,
          fontSize: fontSizeLG,
          lineHeight: controlHeightLG,

          '&::after': {
            height: controlHeightLG - 8,
            lineHeight: controlHeightLG - 8,
          },

          [`${prefixCls}-select-selection-search`]: {
            height: controlHeightLG - 8,
            lineHeight: controlHeightLG - 8,

            '&-input': {
              height: controlHeightLG - 12,
              lineHeight: controlHeightLG - 12,
            },
          },

          [`${prefixCls}-select-selection-placeholder`]: {
            height: controlHeightLG - 8,
            lineHeight: controlHeightLG - 8,
          },

          [`${prefixCls}-select-selection-overflow-item`]: {
            alignSelf: 'flex-start',

            [`${prefixCls}-select-selection-item`]: {
              lineHeight: controlHeightLG - 10,
              height: controlHeightLG - 8,
            },
          },
        },

        [`&${componentCls}-feedback-layout-terse`]: {
          marginBottom: 8,

          [`&${componentCls}-feedback-has-text:not(${componentCls}-inset)`]: {
            marginBottom: 0,
          },
        },

        [`&${componentCls}-feedback-layout-loose`]: {
          marginBottom: marginLG,

          [`&${componentCls}-feedback-has-text:not(${componentCls}-inset)`]: {
            marginBottom: 0,
          },
        },
      },
  }
}

const genLableStyle: GenerateStyle = (token) => {
  const { componentCls, controlHeight, controlHeightSM, marginLG, marginSM } =
    token
  return {
    lineHeight: controlHeight,
    minHeight: controlHeight - 2,
    position: 'relative',
    display: 'flex',
    color: token.colorTextHeading,

    label: {
      cursor: 'text',
    },

    '&-content': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },

    '&-tooltip': {
      cursor: 'help',
      '*': {
        cursor: 'help',
      },
      label: {
        borderBottom: '1px dashed currentColor',
      },
    },

    '&-align': {
      [`&--left`]: {
        [`> ${componentCls}-label`]: {
          justifyContent: 'flex-start',
        },
      },

      [`&--right`]: {
        [`> ${componentCls}-label`]: {
          label: {
            whiteSpace: 'pre-line',
            wordBreak: 'break-all',
          },
        },
      },
    },

    '&-wrap': {
      [`${componentCls}-label`]: {
        label: {
          whiteSpace: 'pre-line',
          wordBreak: 'break-all',
        },
      },
    },

    '&-feedback-layout': {
      '&-terse': {
        marginBottom: marginSM,
      },

      '&-loose': {
        marginBottom: marginLG,
      },

      '&-none': {
        marginBottom: 0,
      },

      '&-terse, &-loosee, &-none': {
        [`&.${componentCls}-feedback-has-text:not(${componentCls}-inset)`]: {
          marginBottom: 0,
        },
      },
    },

    '&-control': {
      flex: 1,
      maxWidth: '100%',

      [`&.${componentCls}-control-content`]: {
        display: 'flex',

        '&-component': {
          width: '100%',
          minHeight: controlHeight - 2,
          lineHeight: controlHeight + 2,

          '&-has-feedback-icon': {
            flex: 1,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          },
        },

        [`${componentCls}-addon`]: {
          '&-before': {
            marginRight: marginSM,
          },

          '&-after': {
            marginRight: marginSM,
          },

          '&-before, &-after': {
            display: 'inline-flex',
            alignItems: 'center',
            minHeight: controlHeight,
            flexShrink: 0,
          },
        },
      },

      [`${componentCls}-help,
        ${componentCls}-extra`]: {
        minHeight: controlHeightSM,
        lineHeight: controlHeightSM,
        color: token.colorTextSecondary,
      },
    },
  }
}

const genFormItemStyle: GenerateStyle = (token) => {
  const { componentCls, fontSize, marginLG } = token
  return {
    [componentCls]: {
      display: 'flex',
      position: 'relative',
      marginBottom: marginLG,
      fontSize: fontSize,

      [`${componentCls}-label`]: genLableStyle(token),

      [`&${componentCls}-size-small`]: genSmallStyle(token),

      [`&${componentCls}-size-large`]: genLargeStyle(token),
    },
  }
}

export default genStyleHook('Form', (token) => {
  return [
    genFormItemStyle(token),
    getGridStyle(token),
    getAnimationStyle(token),
    genOtherStyle(token),
  ]
})
