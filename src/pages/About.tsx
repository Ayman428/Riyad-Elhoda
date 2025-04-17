import Hero from "../components/once/Hero";

const About = () => {
    return (
        <div>
            <Hero
                backgroundImage="/assets/HeroBg3.png"
                title="شركة مدارس رياض الهدى"
                header="Riyadh AL-Huda Schools"
                description="شركة مدارس رياض الهدى هي مؤسسة تعليمية رائدة، تسعى إلى تقديم تعليم متميز يرتكز على أسس علمية حديثة ومتطورة. نؤمن بأهمية بناء جيل واعٍ ومبدع، يمتلك المهارات والمعارف التي تؤهله لمواكبة متطلبات العصر،"
                isHomePage={false}
            />
        </div>
    )
}

export default About;