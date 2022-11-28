const useFlatOptions = (tree: any[]) => {
  const flatData = (data?: any[]) => {
    let list: any[] = []
    data?.forEach((item) => {
      list = [...list, item]
      if (item?.children?.length) {
        list = [...list, ...flatData(item.children)]
      }
    })
    return list
  }
  return flatData(tree)
}

export { useFlatOptions }
