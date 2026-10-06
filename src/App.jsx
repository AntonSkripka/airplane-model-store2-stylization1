import Section from "./components/Section.jsx";
import PlanesList from "./components/PlanesList.jsx";
import planes from "./json/planes.json";

export default function App() {
    return (
        <Section title="Коллекція літаків">
            <PlanesList items={planes} />
        </Section>
    )
}