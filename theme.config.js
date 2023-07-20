const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '3.5rem' }}>
      <time>{YEAR}</time> © Nikesh Shrestha
      <span
        style={{
          fontSize: '40px'
        }}
      >
        🇳🇵
      </span>
      {/* <a href="/feed.xml">RSS</a> */}
    </small>
  )
}
