import css from "./Section.module.css"; //! CSS-модулі

export default function Section({ children, title }) {
  return (
    <section>
      {title
        ?
        <h1
        // style={{
        //   marginBottom: 24,
        //   fontSize: '48px',
        //   textAlign: 'center',
        //   color: "darkred",
        // }}
        // className="title"
        // className="title lugrasimoBold"
        // className={css.title}
        // className={`${css.title} ${css.lugrasimoBold}`}
        className={css.titleLugrasimoBold}
        >
          {title}
        </h1>
        :
        <h1
        
        // style={{
        //   marginBottom: 24,
        //   fontSize: '48px',
        //   textAlign: 'center',
        //   color: "darkred",
        // }}
        // className="title"
        className={css.title}
        >
          No title
        </h1>}
      {children}
    </section>
  )
}