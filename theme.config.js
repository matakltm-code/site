const YEAR = new Date().getFullYear()

export default {
  footer: (
    <div>
      <hr />
      <a href="https://twitter.com/shuding_" target="_blank">
        Twitter
      </a>{" "}
      ·{" "}
      <a href="https://github.com/shuding" target="_blank">
        GitHub
      </a>{" "}
      ·{" "}
      <a href="https://instagram.com/_shuding" target="_blank">
        Instagram
      </a>{" "}
      ·{" "}
      <a href="mailto:g@shud.in" target="_blank">
        g@shud.in
      </a>
      <small style={{ display: "block", marginTop: "8rem" }}>
        <abbr
          title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
          style={{ cursor: "help" }}
        >
          CC BY-NC 4.0
        </abbr>{" "}
        <time>{YEAR}</time> © Shu Ding.
        <a href="/feed.xml">RSS</a>
        <style jsx>{`
          a {
            float: right;
          }
        `}</style>
      </small>
    </div>
  ),
}
