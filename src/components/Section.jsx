export default function Section({ children, title }) {
    return (
    <section>
        {title ? <h1 style={{
            marginBottom: 24,
            fontSize: '48px',
            textAlign: 'center',
            color: "darkred",
          }}>{title}</h1> : 
        <h1 
          style={{
            marginBottom: 24,
            fontSize: '48px',
            textAlign: 'center',
            color: "darkred",
          }}>
            No title
        </h1>}
        {children}
    </section>
    )
}