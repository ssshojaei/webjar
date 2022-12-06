export const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const removeHTML = (value: string) => value.replace(/(<([^>]+)>)/gi, '')
