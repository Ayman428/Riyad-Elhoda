import Hero from "../components/once/Hero";
import FAQs from "../components/reuse/FAQs";

const Home = () => {
    return (
        <div>
            <Hero
                backgroundImage="/assets/HeroBg.png"
                title="شركة مدارس رياض الهدى"
                header="Riyadh AL-Huda Schools"
                description="شركة مدارس رياض الهدى هي مؤسسة تعليمية رائدة، تسعى إلى تقديم تعليم متميز يرتكز على أسس علمية حديثة ومتطورة. نؤمن بأهمية بناء جيل واعٍ ومبدع، يمتلك المهارات والمعارف التي تؤهله لمواكبة متطلبات العصر،"
                isHomePage={true}
            />
            <FAQs />
        </div>
    )
}

export default Home;