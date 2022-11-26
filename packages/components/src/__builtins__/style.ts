import type { CSSInterpolation, CSSObject } from '@ant-design/cssinjs'
import { useStyleRegister } from '@ant-design/cssinjs'
import { merge } from '@formily/shared'
import { DerivativeToken } from 'antd/es/theme'
import type { ComponentTokenMap, GlobalToken } from 'antd/es/theme/interface'
import { useConfig, useToken } from './hooks'
export type OverrideComponent = keyof ComponentTokenMap

export interface StyleInfo<ComponentName extends OverrideComponent> {
  hashId: string
  prefixCls: string
  rootPrefixCls: string
  iconPrefixCls: string
  overrideComponentToken: ComponentTokenMap[ComponentName]
}

export type TokenWithCommonCls<T> = T & {
  /** Wrap component class with `.` prefix */
  componentCls: string
  /** Origin prefix which do not have `.` prefix */
  prefixCls: string
  /** Wrap icon class with `.` prefix */
  iconCls: string
  /** Wrap ant prefixCls class with `.` prefix */
  antCls: string
}

export type GenerateStyle<
  ComponentToken extends object = TokenWithCommonCls<GlobalToken>,
  ReturnType = CSSInterpolation
> = (token: ComponentToken, options?: any) => ReturnType

export const genCommonStyle = (
  token: DerivativeToken,
  componentPrefixCls: string
): CSSObject => {
  const { fontFamily, fontSize } = token

  const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`

  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: 'border-box',

      '&::before, &::after': {
        boxSizing: 'border-box',
      },

      [rootPrefixSelector]: {
        boxSizing: 'border-box',

        '&::before, &::after': {
          boxSizing: 'border-box',
        },
      },
    },
  }
}
export type UseComponentStyleResult = [
  (node: React.ReactNode) => React.ReactElement,
  string
]

export const genStyleHook = <ComponentName extends OverrideComponent>(
  component: ComponentName,
  styleFn: (
    token: TokenWithCommonCls<GlobalToken>,
    info: StyleInfo<ComponentName>
  ) => CSSInterpolation
) => {
  return (prefixCls: string): UseComponentStyleResult => {
    const { theme, token, hashId } = useToken()
    const { getPrefixCls, iconPrefixCls } = useConfig()
    const rootPrefixCls = getPrefixCls()
    return [
      useStyleRegister(
        {
          theme,
          token,
          hashId,
          path: ['formily', component, prefixCls, iconPrefixCls],
        },
        () => {
          const componentCls = `.${prefixCls}`
          const mergedToken: TokenWithCommonCls<GlobalToken> = merge(token, {
            componentCls,
            prefixCls,
            iconCls: `.${iconPrefixCls}`,
            antCls: `.${rootPrefixCls}`,
          })

          const styleInterpolation = styleFn(mergedToken, {
            hashId,
            prefixCls,
            rootPrefixCls,
            iconPrefixCls,
            overrideComponentToken: token[component],
          })
          return [genCommonStyle(token, prefixCls), styleInterpolation]
        }
      ),
      hashId,
    ]
  }
}
