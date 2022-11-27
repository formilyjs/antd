# Reset

> 重置按钮

## 普通重置

> 有默认值的控件无法被清空

<code src="../demos/reset/Normal.zh-CN.tsx"/>

## 强制清空重置

<code src="../demos/reset/ForceEmpty.zh-CN.tsx"/>

## 重置并校验

<code src="../demos/reset/Verify.zh-CN.tsx"/>

## 强制清空重置并校验

<code src="../demos/reset/ForceEmptyAndVerfy.zh-CN.tsx"/>

## API

### Reset API

其余 API 参考 <https://ant.design/components/button-cn/>

| 属性名                 | 类型                                                                                             | 描述                                  | 默认值 |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------- | ------ |
| onClick                | `(event: MouseEvent) => void \| boolean`                                                         | 点击事件，如果返回 false 可以阻塞重置 | -      |
| onResetValidateSuccess | (payload: any) => void                                                                           | 重置校验成功事件                      | -      |
| onResetValidateFailed  | (feedbacks: [IFormFeedback](https://core.formilyjs.org/api/models/form#iformfeedback)[]) => void | 重置校验失败事件                      |
