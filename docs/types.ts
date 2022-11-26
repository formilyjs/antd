declare module 'mfetch' {
  type Fetch = typeof fetch
  const mfetch: Fetch
  export { mfetch as fetch }
}
