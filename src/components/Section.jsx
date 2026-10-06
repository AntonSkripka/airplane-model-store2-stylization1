export default function Section({ children, title }) {
    return (
    <section>
        {title ? <h1>{title}</h1> : <h1>No title</h1>}
        {children}
    </section>
    )
}