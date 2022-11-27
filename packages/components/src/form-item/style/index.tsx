import type { FullToken } from 'antd/es/theme'
import { GenerateStyle, genStyleHook } from '../../__builtins__'
import { getAnimationStyle } from './animation'
import { getGridStyle } from './grid'
import { genOtherStyle } from './other'

export interface FormToken extends FullToken<'Form'> {
  formItemCls: string
}

const genSmallStyle: GenerateStyle = (token) => {
  const {
    componentCls,
    antCls,
    controlHeightSM,
    marginLG,
    fontSizeSM,
    lineHeightSM: lineHeight,
  } = token
  return {
    fontSize: fontSizeSM,
    lineHeight,
    [`${componentCls}-label`]: {
      lineHeight,
      minHeight: controlHeightSM - 2,

      '> label': {
        height: controlHeightSM,
      },
    },

    [`${componentCls}-control-content`]: {
      ' &-component': {
        minHeight: controlHeightSM - 2,
        lineHeight,
      },
    },

    [`${componentCls}-help,
      ${componentCls}-extra`]: {
      minHeight: controlHeightSM - 4,
      lineHeight,
    },

    [`${componentCls}-control-content`]: {
      minHeight: controlHeightSM - 2,
    },

    [`${antCls}-input-affix-wrapper,
      ${antCls}-input-number,
      ${antCls}-picker`]: {
      padding: `0px 11px`,

      input: {
        height: controlHeightSM - 2,
        fontSize: fontSizeSM,
      },
    },

    [`${antCls}-cascader-picker`]: {
      height: controlHeightSM - 2,

      input: {
        padding: '0 7px',
        height: controlHeightSM - 2,
        fontSize: fontSizeSM,
      },
    },

    [`${antCls}-select-single:not(${antCls}-select-customize-input) ${antCls}-select-selector`]:
      {
        padding: `0px 11px`,
        height: controlHeightSM - 2,
        fontSize: fontSizeSM,
        lineHeight,

        [`${antCls}-select-selection-search`]: {
          height: controlHeightSM,
          lineHeight,

          '&-input': {
            height: controlHeightSM - 2,
            lineHeight,
          },
        },

        [`${antCls}-select-selection-placeholder`]: {
          height: controlHeightSM,
          lineHeight,
        },

        [`${antCls}-select-selection-item`]: {
          height: controlHeightSM,
          lineHeight,
        },
        [`${antCls}-select-multiple:not(${antCls}-select-customize-input)
          ${antCls}-select-selector`]: {
          padding: '0px 2px',
          height: controlHeightSM - 2,
          fontSize: fontSizeSM,
          lineHeight,

          '&::after': {
            height: controlHeightSM - 8,
            lineHeight,
          },

          [`${antCls}-select-selection-search`]: {
            height: controlHeightSM - 8,
            lineHeight,
            marginInlineStart: 0,

            '&-input': {
              height: controlHeightSM - 12,
              lineHeight,
            },
          },

          [`${antCls}-select-selection-placeholder`]: {
            height: controlHeightSM - 8,
            lineHeight,
            marginInlineStart: 4,
          },

          [`${antCls}-select-selection-overflow-item`]: {
            alignSelf: 'flex-start',

            [`${antCls}-select-selection-item`]: {
              lineHeight,
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
    antCls,
    fontSizeLG,
    controlHeightLG,
    controlHeightSM,
    marginLG,
    lineHeightLG: lineHeight,
  } = token
  return {
    fontSize: fontSizeLG,
    lineHeight,
    [`${componentCls}-label`]: {
      lineHeight,
      minHeight: controlHeightLG - 2,

      '> label': {
        height: controlHeightLG,
      },
    },

    [`${componentCls}-control-content`]: {
      ' &-component': {
        minHeight: controlHeightLG - 2,
        lineHeight,
      },
    },

    [`${componentCls}-help,
      ${componentCls}-extra`]: {
      minHeight: controlHeightSM,
      lineHeight,
    },

    [`${componentCls}-control-content`]: {
      minHeight: controlHeightLG - 2,
    },

    [`${antCls}-input`]: {
      fontSize: fontSizeLG,
    },

    [`${antCls}-input-number`]: {
      fontSize: fontSizeLG,

      input: {
        height: controlHeightLG - 2,
      },
    },

    [`${antCls}-input-affix-wrapper,
      ${antCls}-picker`]: {
      padding: `0px 11px`,
      lineHeight,
      input: {
        height: controlHeightLG - 2,
        fontSize: fontSizeLG,
      },
    },

    [`${antCls}-btn`]: {
      height: controlHeightLG,
      padding: '0 8px',
    },

    [`${antCls}-radio-button-wrapper`]: {
      height: controlHeightLG,
      lineHeight,
    },

    [`${antCls}-cascader-picker`]: {
      height: controlHeightLG - 2,

      input: {
        padding: '0 11px',
        height: controlHeightLG - 2,
        fontSize: fontSizeLG,
      },
    },

    [`${antCls}-select-single:not(${antCls}-select-customize-input) ${antCls}-select-selector`]:
      {
        padding: `0px 11px`,
        height: controlHeightLG,
        fontSize: fontSizeLG,
        lineHeight,

        [`${antCls}-select-selection-search`]: {
          height: controlHeightLG,
          lineHeight,

          '&-input': {
            height: controlHeightLG,
            lineHeight,
          },
        },

        [`${antCls}-select-selection-placeholder`]: {
          height: controlHeightLG,
          lineHeight,
        },

        [`${antCls}-select-selection-item`]: {
          height: controlHeightLG,
          lineHeight,
        },
        [`${antCls}-select-multiple:not(${antCls}-select-customize-input)
          ${antCls}-select-selector`]: {
          padding: '0px 2px',
          height: controlHeightLG - 2,
          fontSize: fontSizeLG,
          lineHeight,

          '&::after': {
            height: controlHeightLG - 8,
            lineHeight,
          },

          [`${antCls}-select-selection-search`]: {
            height: controlHeightLG - 8,
            lineHeight,

            '&-input': {
              height: controlHeightLG - 12,
              lineHeight,
            },
          },

          [`${antCls}-select-selection-placeholder`]: {
            height: controlHeightLG - 8,
            lineHeight,
          },

          [`${antCls}-select-selection-overflow-item`]: {
            alignSelf: 'flex-start',

            [`${antCls}-select-selection-item`]: {
              lineHeight,
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
  const {
    componentCls,
    controlHeight,
    controlHeightSM,
    marginLG,
    marginSM,
    lineHeight,
  } = token
  return {
    lineHeight,
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
          lineHeight,

          '&-has-feedback-icon': {
            flex: 1,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          },
        },

        [`${componentCls}-addon`]: {
          '&-before': {
            marginInlineEnd: marginSM,
          },

          '&-after': {
            marginInlineEnd: marginSM,
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
        lineHeight,
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

      '&-label': {
        '&-align': {
          [`&-left`]: {
            [`> ${componentCls}-label`]: {
              justifyContent: 'flex-start',
            },
          },

          [`&-right`]: {
            [`> ${componentCls}-label`]: {
              justifyContent: 'flex-end',

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
      },

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
