import { useState } from "react"
import "./Hero.css"

const artworks = [
    {
        image: "/src/assets/GalleriaPic/the-false-mirror.jpg",
        title: "Arte Surrealista",
        artist: "Renè Magritte",
        quote: "Oltre l’apparenza, in bilico tra logica e mistero."
    },
    {
        image: "/src/assets/GalleriaPic/golconda.jpg",
        title: "Pioggia d’uomini",
        artist: "Renè Magritte",
        quote: "Il reale si ripete fino a diventare irreale."
    },
    {
        image: "/src/assets/GalleriaPic/Il-figlio-delluomo.jpg",
        title: "Il figlio dell’uomo",
        artist: "Renè Magritte",
        quote: "L’invisibile è ciò che ci definisce."
    }
]

const Hero = () => {
    const [index, setIndex] = useState(0)

    const { image, title, artist, quote } = artworks[index]

    return (
        <section className="hero">
            <div className="hero-image">
                <img src={image} alt={title} />
            </div>
            <div className="hero-text">
                <h1>{title}</h1>
                <h2>{artist}</h2>
                <p>{quote}</p>
                <div className="dots">
                    {artworks.map((_, i) => (
                        <span
                            key={i}
                            className={i === index ? "dot active" : "dot"}
                            onClick={() => setIndex(i)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
