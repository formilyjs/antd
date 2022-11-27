# FormGrid

> FormGrid component

## Markup Schema example

<code src="../demos/form-grid/Markup.tsx"/>

## JSON Schema case

<code src="../demos/form-grid/Schema.tsx"/>

## Native case

<code src="../demos/form-grid/Native.tsx"/>

## Query Form case

<code src="../demos/form-grid/QueryForm.tsx"/>

## API

### FormGrid API

| Property name | Type                   | Description                                                                       | Default value     |
| ------------- | ---------------------- | --------------------------------------------------------------------------------- | ----------------- |
| minWidth      | `number \| number[]`   | Minimum element width                                                             | 100               |
| maxWidth      | `number \| number[]`   | Maximum element width                                                             | -                 |
| minColumns    | `number \| number[]`   | Minimum number of columns                                                         | 0                 |
| maxColumns    | `number \| number[]`   | Maximum number of columns                                                         | -                 |
| breakpoints   | number[]               | Container size breakpoints                                                        | `[720,1280,1920]` |
| columnGap     | number                 | Column spacing                                                                    | 8                 |
| rowGap        | number                 | Row spacing                                                                       | 4                 |
| colWrap       | boolean                | Wrap                                                                              | true              |
| strictAutoFit | boolean                | Is width strictly limited by maxWidth                                             | false             |
| shouldVisible | `(node,grid)=>boolean` | Whether to show the current node                                                  | `()=>true`        |
| grid          | `Grid`                 | Grid instance passed in from outside, used to implement more complex layout logic | -                 |

note:

- minWidth takes priority over minColumn
- maxWidth has priority over maxColumn
- The array format of minWidth/maxWidth/minColumns/maxColumns represents the mapping with the breakpoint array

### FormGrid.GridColumn

| Property name | Type   | Description                                                                                                              | Default value |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------ | ------------- |
| gridSpan      | number | The number of columns spanned by the element, if it is -1, it will automatically fill the cell across columns in reverse | 1             |

### FormGrid.createFormGrid

Read the Grid instance from the context

```ts
interface createFormGrid {
  (props: IGridProps): Grid
}
```

- IGridProps reference FormGrid properties
- Grid instance attribute method reference <https://github.com/alibaba/formily/tree/formily_next/packages/grid>

### FormGrid.useFormGrid

Read the Grid instance from the context

```ts
interface useFormGrid {
  (): Grid
}
```

- Grid instance attribute method reference <https://github.com/alibaba/formily/tree/formily_next/packages/grid>
