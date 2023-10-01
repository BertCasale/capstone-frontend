import HeroImage from "../assets/acorn_squirrel.png"
import {useNavigate} from "react-router-dom"

// {language} state from Landing.jsx
export default function Hero({language}) {

    // this function handles the start your first lesson button
    // needs to adjust useNav to correct route, /dashboard is a place holder
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate("/dashboard")
    }

    const textArray1=[
        "The free, fun and interactive way to learn art!",
        "自由、有趣和互动的学习艺术方式!",
        "自由、有趣和互動的學習藝術方式!",
        " ¡La forma gratuita, divertida e interactiva de aprender arte!",
        "الطريقة المجانية والممتعة والتفاعلية لتعلم الفن!",
        "A maneira gratuita, divertida e interativa de aprender arte!",
        "Cara belajar seni yang gratis, menyenangkan, dan interaktif!",
        " La manière gratuite, amusante et interactive d'apprendre l'art!",
        "無料で楽しくインタラクティブなアートの学習方法!",
        "Бесплатный, веселый и интерактивный способ изучения искусства!",
        "Die kostenlose, unterhaltsame und interaktive Art, Kunst zu lernen!",
    ];

    const textArray2=[
        "Art is a universal language that goes beyond boundaries, expressing emotions, ideas, and perspectives.",
        "艺术是一门超越界限的普遍语言，表达情感、思想和观点。",
        "藝術是一門超越界限的普遍語言，表達情感、思想和觀點。",
        "El arte es un lenguaje universal que va más allá de las fronteras, expresando emociones, ideas y perspectivas.",
        " الفن هو لغة عالمية تتجاوز الحدود، تعبّر عن المشاعر والأفكار والآفاق.",
        "A arte é uma linguagem universal que vai além das fronteiras, expressando emoções, ideias e perspectivas.",
        "Seni adalah bahasa universal yang melampaui batas-batas, mengungkapkan emosi, gagasan, dan pandangan.",
        "L'art est un langage universel qui va au-delà des frontières, exprimant émotions, idées et perspectives.",
        "芸術は境界を越える普遍的な言語で、感情、アイデア、視点を表現します。",
        "Искусство - это универсальный язык, который выходит за границы, выражая эмоции, идеи и точки зрения.",
        "Kunst ist eine universelle Sprache, die über Grenzen hinweggeht und Emotionen, Ideen und Perspektiven ausdrückt.",
    ];

    const textArray3=[
        "✅  Learn about lines and color mixing.",
        "✅  学习线条和颜色混合。",
        "✅  學習線條和顏色混合。",
        "✅  Aprende sobre líneas y mezcla de colores.",
        "تعلم عن الخطوط ومزج الألوان.  ✅",
        "✅  Aprenda sobre linhas e mistura de cores.",
        "✅  Pelajari tentang garis dan pencampuran warna.",
        "✅  Apprenez les lignes et le mélange des couleurs.",
        "✅  線と色の混合について学びます。",
        "✅  Узнайте о линиях и смешивании цветов.",
        "✅  Lernen Sie Linien und Farbmischung kennen.",
    ];

    const textArray4=[
        "✅  Apply your learning within every lesson.",
        "✅  在每节课中应用你的学习。",
        "✅  在每堂課中應用你的學習。",
        "✅  Aplica tus aprendizajes en cada lección.",
        "ضع تعلمك في كل درس.  ✅",
        "✅  Aplique o que aprendeu em cada lição.",
        "✅  Terapkan pembelajaran Anda dalam setiap pelajaran.",
        "✅  Appliquez vos apprentissages dans chaque leçon.",
        "✅  各レッスンで学んだことを実践します。",
        "✅  Применяйте свои знания в каждом уроке.",
        "✅  Wende dein Wissen in jeder Lektion an.",
    ];

    const textArray5=[
        "✅  Practice freely within the sandbox area.",
        "✅  在沙盒区域内自由练习。",
        "✅  在沙盒區域內自由練習。",
        "✅  Practica libremente dentro del área de juegos.",
        "امارس بحرية داخل منطقة الصندوق الرملي.  ✅",
        "✅  Pratique livremente na área do sandbox.",
        "✅  Berlatih dengan bebas di area sandbox.",
        "✅  Pratiquez librement dans la zone de bac à sable.",
        "✅  砂場エリア内で自由に練習してください。",
        "✅  Практикуйтесь свободно в песочнице.",
        "✅  Üben Sie frei im Sandkastenbereich.",
    ];

    const textArray6=[
        "Start Your First Lesson Now!",
        "立即开始你的第一堂课!",
        "立即開始你的第一堂課!",
        "¡Comienza tu primera lección ahora!",
        "ابدأ الدرس الأول الخاص بك الآن!",
        "Comece sua primeira lição agora!",
        "Mulai pelajaran pertama Anda sekarang!",
        "Commencez votre première leçon maintenant!",
        "今すぐ最初のレッスンを始めましょう!",
        "Начните свой первый урок сейчас!",
        "Starten Sie Ihre erste Lektion jetzt!"
    ];


    return (
        <div>

            <section className="hero is-white is-fullheight block">
                <div className="hero-head">

                </div>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-hcentered">
                            <div className="column is-half">
                                <p className="title is-1 has-text-link">
                                    {textArray1[language-1]}
                                </p>
                                <p className="subtitle">
                                {textArray2[language-1]}
                                </p>
                                <section className="features is-flex is-flex-direction-column ml-4">
                                    <p className="is-flex is-align-content-start">{textArray3[language-1]}</p>
                                    <p className="is-flex is-align-content-start">{textArray4[language-1]}</p>
                                    <p className="is-flex is-align-content-start">{textArray5[language-1]}</p>
                                </section>
                                <br />
                                <section className="callToAction is-flex">
                                <button className="button is-link is-rounded" onClick={handleOnClick}>{textArray6[language-1]}</button>
                                </section>
                            </div>
                            <div>
                                <div className="column ">
                                    <div className="card-image is-flex is-align-content-center">
                                        {/* <figure className="image is-256x256 is-inline-block"> */}
                                        <img src={HeroImage} alt="artsy acorn squirel" />
                                        {/* </figure> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
