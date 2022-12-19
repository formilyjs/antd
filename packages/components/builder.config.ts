import { IBuilderConfig } from '@formily/template'

export const BuilderConfig: IBuilderConfig = {
  targetLibName: 'antd',
  targetLibCjsDir: 'lib',
  targetLibEsDir: 'es',
  externals: {
    antd: 'antd',
    dayjs: 'dayjs',
  },
}
