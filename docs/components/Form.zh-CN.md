# Form

> FormProvider + FormLayout + form 标签的组合组件，可以帮助我们快速实现带回车提交的且能批量布局的表单

## 使用案例

<code src="../demos/form/Form.zh-CN.tsx"/>

<Alert style="margin-top:20px">
注意：想要实现回车提交，我们在使用Submit组件的时候不能给其传onSubmit事件，否则回车提交会失效，这样做的目的是为了防止用户同时在多处写onSubmit事件监听器，处理逻辑不一致的话，提交时很难定位问题。
</Alert>

## API

布局相关的 API 属性，我们参考 [FormLayout](./form-layout)即可，剩下是 Form 组件独有的 API 属性

| 属性名                 | 类型                                                                                             | 描述                               | 默认值 |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------- | ------ |
| form                   | [Form](https://core.formilyjs.org/api/models/form)                                               | Form 实例                          | -      |
| component              | string                                                                                           | 渲染组件，可以指定为自定义组件渲染 | `form` |
| previewTextPlaceholder | ReactNode                                                                                        | 预览态占位符                       | `N/A`  |
| onAutoSubmit           | `(values:any)=>any`                                                                              | 回车提交事件回调                   | -      |
| onAutoSubmitFailed     | (feedbacks: [IFormFeedback](https://core.formilyjs.org/api/models/form#iformfeedback)[]) => void | 回车提交校验失败事件回调           | -      |
